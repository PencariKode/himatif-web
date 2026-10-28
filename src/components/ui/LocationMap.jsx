"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { CONTACT_INFO } from "@l/constants";

export default function LocationMap({ className = "" }) {
  const containerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!containerRef.current || mapInstanceRef.current) return;

      const L = (await import("leaflet")).default;
      if (!isMounted || !containerRef.current || mapInstanceRef.current) return;

      const { lat, lon } = CONTACT_INFO.coordinates;

      const map = L.map(containerRef.current, {
        center: [lat, lon],
        zoom: 17,
        scrollWheelZoom: false,
        zoomControl: false,
      });

      L.control.zoom({ position: "topright" }).addTo(map);

      L.tileLayer(CONTACT_INFO.tileUrl, {
        attribution: CONTACT_INFO.tileAttribution,
        subdomains: "abc",
        maxZoom: 19,
      }).addTo(map);

      const customPinIcon = L.divIcon({
        className: "bg-transparent border-0",
        html: `
          <div class="relative flex items-center justify-center w-12 h-12">
            <span class="absolute w-12 h-12 rounded-full bg-tif-secondary/35 animate-ping"></span>
            <span class="relative w-10 h-10 rounded-full bg-tif-secondary text-tif-primary border-2 border-tif-bg shadow-md flex items-center justify-center">
              <i class="fa-regular fa-location-dot text-base" aria-hidden="true"></i>
            </span>
          </div>
        `,
        iconSize: [48, 48],
        iconAnchor: [24, 24],
        popupAnchor: [0, -24],
      });

      L.marker([lat, lon], { icon: customPinIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: Poppins, sans-serif; font-size: 12px; color: #132347; line-height: 1.4;">
            <strong>Sekretariat HIMATIF USU</strong><br/>
            <span>${CONTACT_INFO.shortLocation}</span>
          </div>`
        );

      mapInstanceRef.current = map;
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-label="Peta Lokasi Sekretariat HIMATIF USU"
      className={`w-full h-full z-0 [&_.leaflet-tile-pane]:saturate-[0.7] [&_.leaflet-tile-pane]:brightness-[1.02] ${className}`}
    />
  );
}

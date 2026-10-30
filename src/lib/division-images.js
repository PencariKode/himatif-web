import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

/**
 * Checks if a public asset path exists on disk.
 * Returns the public path string if the file exists, otherwise null.
 */
export function resolvePublicImage(publicPath) {
  if (!publicPath || typeof publicPath !== "string") {
    return null;
  }

  const normalizedRelPath = publicPath.replace(/^\/+/, "");
  const fullPath = path.join(process.cwd(), "public", normalizedRelPath);

  try {
    const stat = fs.statSync(fullPath);
    return stat.isFile() ? `/${normalizedRelPath.replace(/\\/g, "/")}` : null;
  } catch {
    return null;
  }
}

/**
 * Reads all valid image files inside `public/division/<folder>/anggota`,
 * sorted in natural numeric/alphabetical order.
 */
export function getAnggotaImages(folder) {
  if (!folder) {
    return [];
  }

  const dirPath = path.join(process.cwd(), "public", "division", folder, "anggota");

  try {
    if (!fs.existsSync(dirPath)) {
      return [];
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries
      .filter(
        (entry) =>
          entry.isFile() &&
          IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
      )
      .map((entry) => entry.name)
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
      )
      .map((fileName) => `/division/${folder}/anggota/${fileName}`);
  } catch {
    return [];
  }
}

/**
 * Resolves `image` field on an array of member objects, returning null if missing on disk.
 */
export function resolveMemberImages(members = []) {
  return members.map((member) => ({
    ...member,
    image: resolvePublicImage(member.image),
  }));
}

/**
 * Resolves 5 hero collage images from `public/<publicSubDir>`:
 * - Index 0 (center hexagon): strictly `1.png` (or null if missing).
 * - Indices 1..4 (side panels): randomly shuffled from other valid images in the directory,
 *   padded with `null` for any missing slots.
 */
export function getCollageHeroImages(publicSubDir) {
  if (!publicSubDir) {
    return [null, null, null, null, null];
  }

  const cleanSubDir = publicSubDir.replace(/^\/+|\/+$/g, "");
  const mainImage = resolvePublicImage(`/${cleanSubDir}/1.png`);
  const dirPath = path.join(process.cwd(), "public", cleanSubDir);

  let sideCandidates = [];
  try {
    if (fs.existsSync(dirPath)) {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      sideCandidates = entries
        .filter(
          (entry) =>
            entry.isFile() &&
            IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) &&
            entry.name.toLowerCase() !== "1.png"
        )
        .map((entry) => `/${cleanSubDir}/${entry.name}`);

      for (let i = sideCandidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sideCandidates[i], sideCandidates[j]] = [
          sideCandidates[j],
          sideCandidates[i],
        ];
      }
    }
  } catch {
    sideCandidates = [];
  }

  return [
    mainImage,
    sideCandidates[0] ?? null,
    sideCandidates[1] ?? null,
    sideCandidates[2] ?? null,
    sideCandidates[3] ?? null,
  ];
}

/**
 * Resolves 5 hero collage images from `public/division/<folder>/hero`.
 */
export function getDivisionHeroImages(folder) {
  if (!folder) {
    return [null, null, null, null, null];
  }

  return getCollageHeroImages(`division/${folder}/hero`);
}

/**
 * Resolves 5 hero collage images from `public/assets/img/hero`.
 */
export function getHomepageHeroImages() {
  return getCollageHeroImages("assets/img/hero");
}

/**
 * Enriches a division object with verified `cardImage`, `heroImage`, `heroImages`,
 * `leaders` (`koor.png` & `sekdiv.png`), and `members` (`anggota/*`).
 */
export function getDivisionWithImages(divisi) {
  if (!divisi) {
    return null;
  }

  const folder = divisi.folder || divisi.slug;
  const cardImage = resolvePublicImage(
    divisi.cardImage ?? `/division/${folder}/card.png`
  );
  const heroImage = resolvePublicImage(
    divisi.heroImage ?? `/division/${folder}/hero.png`
  );
  const heroImages = getDivisionHeroImages(folder);

  const leaderFiles = ["koor.png", "sekdiv.png"];
  const leaders = (divisi.leaders || []).map((leader, idx) => {
    const defaultPath = leaderFiles[idx]
      ? `/division/${folder}/${leaderFiles[idx]}`
      : null;
    return {
      ...leader,
      image: resolvePublicImage(leader.image ?? defaultPath),
    };
  });

  const anggotaImages = getAnggotaImages(folder);
  const members = (divisi.members || []).map((member, idx) => ({
    ...member,
    image: member.image
      ? resolvePublicImage(member.image)
      : anggotaImages[idx] ?? null,
  }));

  return {
    ...divisi,
    cardImage,
    heroImage,
    heroImages,
    leaders,
    members,
  };
}

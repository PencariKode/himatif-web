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
 * Enriches a division object with verified `cardImage`, `heroImage`,
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
    leaders,
    members,
  };
}

const MUHAMMAD_PREFIX_REGEX = /^(m(uh|oeh|oh|och)a?m+a?d|mohd)$/i;
const MAX_LETTERS = 24;

function getLetters(word) {
  return word.replace(/[^a-zA-Z]/g, "");
}

function getInitial(word) {
  const letters = getLetters(word);
  return letters ? letters[0].toUpperCase() : word;
}

function countLetters(words) {
  return words.reduce((sum, word) => sum + getLetters(word).length, 0);
}

function isIgnoredWord(word, index) {
  const letters = getLetters(word);
  if (index === 0 && /^m$/i.test(letters)) return true;
  if (/^br$/i.test(letters)) return true;
  return false;
}

export function nameShortener(name) {
  if (!name || typeof name !== "string") return name ?? "";

  const words = name.trim().split(/\s+/);
  if (words.length <= 2) return words.join(" ");

  // 1. Jika kata pertama adalah variasi Muhammad dan total kata > 2, singkat jadi "M"
  if (MUHAMMAD_PREFIX_REGEX.test(getLetters(words[0]))) {
    words[0] = "M";
  }

  // 2. Kumpulkan indeks kata efektif (abaikan "M" di awal dan kata "Br")
  const effectiveIndices = [];
  for (let i = 0; i < words.length; i++) {
    if (!isIgnoredWord(words[i], i)) {
      effectiveIndices.push(i);
    }
  }

  // 3. Jika lebih dari 3 kata efektif, singkat nama tengah mulai dari kata efektif ke-3 hingga sebelum marga
  if (effectiveIndices.length > 3) {
    for (let k = 2; k <= effectiveIndices.length - 2; k++) {
      const idx = effectiveIndices[k];
      words[idx] = getInitial(words[idx]);
    }
  }

  // 4. Jika masih > 24 huruf (non-huruf tidak dihitung), singkat sisa nama tengah yang belum disingkat (dari belakang)
  for (let k = effectiveIndices.length - 2; k >= 1; k--) {
    if (countLetters(words) <= MAX_LETTERS) break;
    const idx = effectiveIndices[k];
    if (getLetters(words[idx]).length > 1) {
      words[idx] = getInitial(words[idx]);
    }
  }

  return words.join(" ");
}

// Remove duplicates from array
export function uniqueArray<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

// Shuffle an array randomly (Fisher-Yates)
export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for(let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

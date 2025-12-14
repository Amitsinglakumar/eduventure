// Calculate average progress % of multiple subjects or modules
export function calculateAverageProgress(progressValues: number[]): number {
  if (progressValues.length === 0) return 0;
  const total = progressValues.reduce((acc, val) => acc + val, 0);
  return Math.round(total / progressValues.length);
}

// Clamp a progress value between 0 and 100
export function clampProgress(value: number): number {
  if (value < 0) return 0;
  if (value > 100) return 100;
  return value;
}

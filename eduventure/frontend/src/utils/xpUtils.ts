// Calculate new level based on total XP and XP threshold per level
export function calculateLevel(totalXP: number, xpPerLevel = 200): number {
  return Math.floor(totalXP / xpPerLevel) + 1;
}

// Convert XP number to formatted string with commas
export function formatXP(xp: number): string {
  return xp.toLocaleString();
}

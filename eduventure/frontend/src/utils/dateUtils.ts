// Format a date as readable string e.g., "Sep 30, 2025"
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Calculate streak days between two dates (assume dates in ISO format)
export function calculateStreak(lastDate: string, currentDate = new Date()): number {
  const last = new Date(lastDate);
  const diffTime = currentDate.getTime() - last.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 1 ? diffDays + 1 : 1; // streak resets if gap >1 day
}

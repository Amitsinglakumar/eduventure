// Capitalize first letter of a string
export function capitalize(str: string): string {
  if (!str.length) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Truncate string and add ellipsis if longer than max length
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

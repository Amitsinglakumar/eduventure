// Generic localStorage set
export function setLocalStorage(key: string, value: any): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
}

// Generic localStorage get with fallback
export function getLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  const item = localStorage.getItem(key);
  if (!item) return defaultValue;
  try {
    return JSON.parse(item) as T;
  } catch {
    return defaultValue;
  }
}

// Remove item from localStorage
export function removeLocalStorage(key: string): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(key);
}

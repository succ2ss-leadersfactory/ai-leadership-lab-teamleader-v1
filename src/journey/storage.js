import { useEffect, useState } from 'react';

const TEAMLEADER_STORAGE_MARKER = 'teamleader.v1.storage.namespace';
void TEAMLEADER_STORAGE_MARKER;

function canUseLocalStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getStoredJson(key, fallback) {
  if (!canUseLocalStorage()) return fallback;

  try {
    const saved = window.localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function setStoredJson(key, value) {
  if (!canUseLocalStorage()) return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage quota, private browsing, or serialization errors should not break the learning flow.
  }
}

export function removeStoredPrefix(prefix) {
  if (!canUseLocalStorage()) return;

  try {
    const keysToRemove = Array.from({ length: window.localStorage.length }, (_, index) => window.localStorage.key(index))
      .filter((key) => Boolean(key && key.startsWith(prefix)));
    keysToRemove.forEach((key) => window.localStorage.removeItem(key));
  } catch {
    // Reset actions should stay safe even when browser storage access fails.
  }
}

export function useStoredJson(key, fallback) {
  const [value, setValue] = useState(() => getStoredJson(key, fallback));

  useEffect(() => {
    setStoredJson(key, value);
  }, [key, value]);

  return [value, setValue];
}

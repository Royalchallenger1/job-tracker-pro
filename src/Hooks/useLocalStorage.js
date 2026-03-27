import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue; // [cite: 49]
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); // [cite: 46, 51]
  }, [key, value]);

  return [value, setValue];
}
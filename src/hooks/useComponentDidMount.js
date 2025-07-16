// src/hooks/useComponentDidMount.js
import { useEffect, useCallback } from 'react';

export default function useComponentDidMount(callbackFn) {
  const stableCallback = useCallback(() => {
    if (typeof callbackFn === 'function') {
      callbackFn();
    }
  }, [callbackFn]);

  useEffect(() => {
    // Garantir que o DOM está completamente renderizado
    const timeoutId = setTimeout(() => {
      stableCallback();
    }, 100); // Pequeno delay para garantir renderização

    return () => clearTimeout(timeoutId);
  }, [stableCallback]);
}

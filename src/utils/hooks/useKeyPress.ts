import { useEffect, useState } from "react";

export function useKeyPress(handler: (event: KeyboardEvent) => void) {
  useEffect(() => {
    document.addEventListener("keypress", handler);

    return () => {
      document.addEventListener("keypress", handler);
    };
  }, []);
}

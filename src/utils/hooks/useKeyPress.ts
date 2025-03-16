import { useEffect } from "react";

export function useKeyPress(handler: (event: KeyboardEvent) => void) {
  useEffect(() => {
    document.addEventListener("keydown", handler);

    return () => {
      document.addEventListener("keydown", handler);
    };
  }, []);
}

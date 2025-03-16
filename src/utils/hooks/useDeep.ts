import { isEqual } from "lodash";
import React from "react";

export function useDeep<S, U>(selector: (state: S) => U): (state: S) => U {
  const prev = React.useRef<U | undefined>(undefined);
  return (state) => {
    const next = selector(state);
    return isEqual(prev.current, next)
      ? (prev.current as U)
      : (prev.current = next);
  };
}

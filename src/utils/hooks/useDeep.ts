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

/// Alternative but will fail for circular references
export function isDeepEqual(value1: any, value2: any): boolean {
  // 1. Strict equality check (handles primitives, functions, and same object references)
  if (value1 === value2) {
    // Special case for NaN, as NaN !== NaN
    return value1 !== 0 || 1 / value1 === 1 / value2; // Handles +0 and -0
  }

  // 2. Handle null or undefined values
  if (value1 == null || value2 == null) {
    return value1 === value2;
  }

  // 3. Handle non-object types that are not strictly equal (e.g., different primitives)
  if (typeof value1 !== 'object' || typeof value2 !== 'object') {
    return false;
  }

  // 4. Handle Date objects
  if (value1 instanceof Date) {
    if (!(value2 instanceof Date)) return false;
    return value1.getTime() === value2.getTime();
  }

  // 5. Handle RegExp objects
  if (value1 instanceof RegExp) {
    if (!(value2 instanceof RegExp)) return false;
    return value1.source === value2.source && value1.flags === value2.flags;
  }

  // 6. Handle functions (compare by reference if not strictly equal earlier)
  // If we reach here, they are different function objects.
  if (typeof value1 === 'function' || typeof value2 === 'function') {
    return false;
  }

  // 7. Handle Arrays and Objects
  const isArr1 = Array.isArray(value1);
  const isArr2 = Array.isArray(value2);

  // If one is an array and the other isn't, they are not equal.
  if (isArr1 !== isArr2) {
    return false;
  }

  // Handle Arrays
  if (isArr1 && isArr2) {
    if (value1.length !== value2.length) {
      return false;
    }
    for (let i = 0; i < value1.length; i++) {
      if (!isDeepEqual(value1[i], value2[i])) {
        return false;
      }
    }
    return true;
  }

  // Handle plain Objects
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all keys from value1 exist in value2 and their values are deeply equal
  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(value2, key) || !isDeepEqual(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}
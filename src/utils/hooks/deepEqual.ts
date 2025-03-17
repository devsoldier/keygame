import { isEqual } from "lodash";

export default function deepEqual(objA: any, objB: any) {
  return isEqual(objA, objB);
}

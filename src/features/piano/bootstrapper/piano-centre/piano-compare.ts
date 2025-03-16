import { isEqual } from "lodash";

export const compareMiddleware =
  (config: any) => (set: any, get: any, api: any) =>
    config(
      (updates: any) => {
        const state = get();
        const newState =
          typeof updates === "function" ? updates(state) : updates;

        // Build what the next state would be
        const nextState = { ...state, ...newState };

        // Compare relevant parts and only update if different
        const hasChanged = Object.keys(newState).some(
          (key) => !isEqual(state[key], nextState[key])
        );

        if (hasChanged) {
          set(updates);
          console.log("State updated");
        } else {
          console.log("Update skipped - no changes");
        }
      },
      get,
      api
    );

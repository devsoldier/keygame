import { create } from "zustand";
import { Tile } from "../../components/PianoTile";
import { tileGenerator, tileHandler } from "./piano-service";
import { useDeep } from "../../../../utils/hooks/useDeep";

export interface PianoState {
  tiles: Tile[];
}

export interface PianoEvent {
  gameInit: () => void;
  keypress: (key: string) => void;
}

const initialState: PianoState = { tiles: [] };

export const pianoStore = create<PianoState & PianoEvent>()(
  (set, get, api) => ({
    tiles: initialState.tiles,
    gameInit: () =>
      set((currentState) => ({
        tiles: (currentState.tiles = tileGenerator(10)),
      })),
    keypress: (key) => {
      set((currentState) => {
        return {
          tiles: tileHandler(key, currentState.tiles),
        };
      });
    },
  })
);

export const usePianoStore = () => {
  return pianoStore(useDeep((state) => state));
};

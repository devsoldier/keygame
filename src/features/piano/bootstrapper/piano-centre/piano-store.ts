import { create } from "zustand";
import { Tile } from "../../components/PianoTile";
import { tileGenerator, tileHandler } from "./piano-service";

export interface PianoState {
  tiles: Tile[];
}

export interface PianoEvent {
  gameInit: () => void;
  keypress: (key: string) => void;
}

const initialState: PianoState = { tiles: [] };

export const usePianoStore = create<PianoState & PianoEvent>()((set, get) => ({
  tiles: initialState.tiles,
  gameInit: () => {
    console.log(`init`);
    set((currentState) => ({
      tiles: (currentState.tiles = tileGenerator(10)),
    }));
  },
  keypress: (key) => {
    console.log(`current first key || ${JSON.stringify(get().tiles[0])}`);
    console.log(`pressed key || ${key}`);
    set((currentState) => ({
      tiles: (currentState.tiles = tileHandler(key, currentState.tiles)),
    }));
  },
}));

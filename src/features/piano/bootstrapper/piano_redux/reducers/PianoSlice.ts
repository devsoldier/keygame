import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayPianoSound } from "../../../components/PlayPianoSound";
import { tileGenerator } from "../../service/PianoService";
import { Tile } from "../../../components/PianoTile";

export interface PianoState {
  tiles: Array<Tile>;
}

const initialState: PianoState = { tiles: [] };

export const piano = createSlice({
  name: "piano",
  initialState,
  reducers: {
    gameinit: (state) => {
      state.tiles = tileGenerator(10);
    },
    keypress: (state, action: PayloadAction<string>) => {
      if (!action.payload) return;

      if (state.tiles[0].displayKey === action.payload) {
        PlayPianoSound(state.tiles[0].soundKey);
        const updatedTiles = state.tiles.filter((_, index) => index != 0);
        state.tiles = [...updatedTiles, ...tileGenerator(1)];
      }
    },
  },
});

export const { gameinit, keypress } = piano.actions;

export default piano.reducer;

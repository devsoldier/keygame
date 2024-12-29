import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PianoState } from "./PianoReducer";
import { PlayPianoSound } from "../../../components/PlayPianoSound";
import { tileGenerator } from "../../service/PianoService";

// const initialState = { tiles: [] } satisfies PianoState as PianoState;
const initialState: PianoState = { tiles: [] };

export const PianoSlice = createSlice({
  name: "piano",
  initialState,
  reducers: {
    gameinit(state) {
      state.tiles = tileGenerator(10);
    },
    keypress(state, action: PayloadAction<string>) {
      if (!action.payload) return;

      if (state.tiles[0].displayKey === action.payload) {
        PlayPianoSound(state.tiles[0].soundKey);
        const updatedTiles = state.tiles.filter((_, index) => index != 0);
        state.tiles = [...updatedTiles, ...tileGenerator(1)];
      }
    },
  },
});

export const { gameinit, keypress } = PianoSlice.actions;

export default PianoSlice.reducer;

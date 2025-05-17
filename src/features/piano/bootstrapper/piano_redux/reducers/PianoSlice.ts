import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tileGenerator, tileHandler } from "../../service/PianoService";
import { Tile } from "../../../components/PianoTile";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../common/store";
import deepEqual from "../../../../../utils/hooks/deepEqual";

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

      state.tiles = tileHandler(action.payload, state.tiles);
    },
  },
});

export const { gameinit, keypress } = piano.actions;

export const usePianoState=()=>{
  return useSelector((state: RootState) => state, deepEqual);
}

export default piano.reducer;

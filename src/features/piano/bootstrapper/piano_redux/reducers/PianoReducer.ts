import { gameInit, keyPressed } from "../actions/PianoAction";
import { createReducer } from "@reduxjs/toolkit";
import { Tile } from "../../../components/PianoTile";
import { tileGenerator, tileHandler } from "../../service/PianoService";
export interface PianoState {
  tiles: Array<Tile>;
}

const initialState: PianoState = { tiles: [] };

export const PianoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(gameInit, (state, _) => {
      state.tiles = tileGenerator(10);
    })
    .addCase(keyPressed, (state, action) => {
      if (!action.payload) return;

      state.tiles = tileHandler(action.payload, state.tiles);
    });
});

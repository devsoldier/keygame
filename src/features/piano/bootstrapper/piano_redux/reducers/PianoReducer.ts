import { gameInit, keyPressed } from "../actions/PianoAction";
import { createReducer } from "@reduxjs/toolkit";
import { Tile } from "../../../components/PianoTile";
import { PlayPianoSound } from "../../../components/PlayPianoSound";
import { tileGenerator } from "../../service/PianoService";

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
      console.log(action);
      if (!action.payload) return;

      if (state.tiles[0].displayKey === action.payload) {
        PlayPianoSound(state.tiles[0].soundKey);
        const updatedTiles = state.tiles.filter((_, index) => index != 0);
        state.tiles = [...updatedTiles, ...tileGenerator(1)];
      }
    });
});

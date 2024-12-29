import { createAction } from "@reduxjs/toolkit";

interface PianoAction {
  GameInit: string;
  KeyPressed: string;
}

const PianoAction: PianoAction = {
  GameInit: "piano/gameInit",
  KeyPressed: "piano/keyPressed",
};

export const gameInit = createAction<string | undefined>(PianoAction.GameInit);
export const keyPressed = createAction<string | undefined>(
  PianoAction.KeyPressed
);

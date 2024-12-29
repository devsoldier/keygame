import { configureStore } from "@reduxjs/toolkit";
import { PianoReducer } from "../features/piano/bootstrapper/piano_redux/reducers/PianoReducer";

export const store = configureStore({ reducer: PianoReducer });

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { piano } from "../features/piano/bootstrapper/piano_redux/reducers/PianoSlice";

export const store = configureStore({ reducer: { piano: piano.reducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

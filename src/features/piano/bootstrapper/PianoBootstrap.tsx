import { useEffect } from "react";
import { PianoTileContainer } from "../components/PianoTileContainer";
import { useDispatch } from "react-redux";
import { gameinit } from "./piano_redux/reducers/PianoSlice";

export function PianoBootstrap() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameinit());
  }, []);

  return <PianoTileContainer />;
}

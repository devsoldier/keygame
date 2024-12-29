import { useEffect } from "react";
import { PianoTileContainer } from "../components/PianoTileContainer";
import { useDispatch } from "react-redux";
import { gameInit } from "./piano_redux/actions/PianoAction";

export function PianoBootstrap() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameInit());
  }, []);

  return <PianoTileContainer />;
}

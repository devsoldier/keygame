import { useEffect } from "react";
import { Tile } from "../components/PianoTile";
import { displayKey, soundKeys, tileColors } from "./constants/PianoConstants";
import { PianoBootstrap } from "./PianoBootstrap";

export function PianoHandler() {
  const getRandomElement = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const generator = (no: number) => {
    const generatedTiles: Tile[] = Array(no)
      .fill(null)
      .map<Tile>(() => ({
        displayKey: getRandomElement(displayKey),
        tileColor: getRandomElement(tileColors),
        soundKey: getRandomElement(soundKeys),
      }));

    return generatedTiles;
  };

  console.log(generator(10));

  return (
    <>
      <PianoBootstrap generatedTiles={generator(10)} generator={generator} />
    </>
  );
}

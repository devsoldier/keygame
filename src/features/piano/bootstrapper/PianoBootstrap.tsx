import { createContext, useEffect, useState } from "react";
import { PianoTileContainer } from "../components/PianoTileContainer";
import {
  displayKey,
  getRandomNumberInRange,
  soundKeys,
  tileColors,
} from "./constants/PianoConstants";
import { Tile } from "../components/PianoTile";
import { PlayPianoSound } from "../components/PlayPianoSound";

export interface PianoContextType {
  tiles: Tile[];
  tileHandler: (key: string) => void;
}

export const PianoContext = createContext<PianoContextType>({
  tiles: [],
  tileHandler: () => {},
});

/// all business logic belong here
export function PianoBootstrap() {
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

  const [tiles, setTiles] = useState<Tile[]>([...generator(10)]);

  const tileHandler = (key: string) => {
    if (!key) return;

    setTiles((prevTiles) => {
      if (prevTiles[0].displayKey === key) {
        PlayPianoSound(prevTiles[0].soundKey);
        const newTile = prevTiles.filter((item, index) => index != 0);
        return [...newTile, ...generator(1)];
      } else {
        return prevTiles;
      }
    });
  };

  useEffect(() => {
    console.log(`tiles updated ${JSON.stringify(tiles)}`);
  }, [tiles]);

  return (
    <PianoContext.Provider value={{ tiles, tileHandler: tileHandler }}>
      <PianoTileContainer />
    </PianoContext.Provider>
  );
}

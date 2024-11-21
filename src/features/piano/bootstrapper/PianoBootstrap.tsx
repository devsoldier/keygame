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
export function PianoBootstrap({
  generatedTiles,
  generator,
}: {
  generatedTiles: Tile[];
  generator: (no: number) => Tile[];
}) {
  console.log(`generatedTiles ${generatedTiles}`);
  const [tiles, setTiles] = useState<Tile[]>([...generatedTiles]);

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

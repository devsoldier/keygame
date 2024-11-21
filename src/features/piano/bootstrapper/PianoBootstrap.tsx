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

interface PianoContextType {
  tiles: Tile[];
  tileHandler: (key: string) => void;
}

export const PianoContext = createContext<PianoContextType>({
  tiles: [],
  tileHandler: () => {},
});

/// all business logic belong here
export function PianoBootstrap() {
  const [tiles, setTiles] = useState<Tile[]>([]);

  const getRandomElement = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const generator = (no: number) => {
    const generatedTiles: Tile[] = Array(no)
      .fill(null)
      .map<Tile>(() => ({
        id: getRandomNumberInRange(0, 1000),
        displayKey: getRandomElement(displayKey),
        tileColor: getRandomElement(tileColors),
        soundKey: getRandomElement(soundKeys),
      }));

    return generatedTiles;
  };

  const gameStart = () => {
    setTiles(generator(10));
  };

  const tileHandler = (key: string) => {
    if (!key) return;

    /// shows nothing
    console.log(`tiles ${tiles}`);

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

  /// initialize
  useEffect(() => {
    gameStart();
  }, []);

  /// for when the tiles change
  useEffect(() => {}, [tiles]);

  return (
    <PianoContext.Provider value={{ tiles, tileHandler: tileHandler }}>
      <PianoTileContainer />
    </PianoContext.Provider>
  );
}

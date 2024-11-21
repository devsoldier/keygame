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
  removeTile: (key: string) => void;
  addTile: () => void;
}

export const PianoContext = createContext<PianoContextType>({
  tiles: [],
  removeTile: () => {},
  addTile: () => {},
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

    setTiles([...tiles, ...generatedTiles]);
  };

  const removeTile = (key: string) => {
    if (!key) return;

    /// shows nothing
    console.log(`tiles ${tiles}`);

    setTiles((prevTiles) => {
      if (prevTiles[0].displayKey == key) {
        PlayPianoSound(prevTiles[0].soundKey);
        return prevTiles.filter((item, index) => index != 0);
      } else {
        return prevTiles;
      }
    });
  };

  const addTile = () => {};

  /// initialize
  useEffect(() => {
    generator(10);
  }, []);

  /// for when the tiles change
  useEffect(() => {
    console.log("tiles updated:", tiles);
  }, [tiles]);

  return (
    <PianoContext.Provider
      value={{ tiles, removeTile: removeTile, addTile: addTile }}
    >
      <PianoTileContainer />
    </PianoContext.Provider>
  );
}

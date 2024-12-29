import { Tile } from "../../components/PianoTile";
import { PlayPianoSound } from "../../components/PlayPianoSound";
import { displayKey, soundKeys, tileColors } from "../constants/PianoConstants";

export const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const tileGenerator = (no: number) => {
  const generatedTiles: Tile[] = Array(no)
    .fill(null)
    .map<Tile>(() => ({
      displayKey: getRandomElement(displayKey),
      tileColor: getRandomElement(tileColors),
      soundKey: getRandomElement(soundKeys),
    }));

  return generatedTiles;
};

export const tileHandler = (key: string, currentTiles: Array<Tile>) => {
  if (!key) return currentTiles;

  if (currentTiles[0].displayKey === key) {
    PlayPianoSound(currentTiles[0].soundKey);
    const updatedTiles = currentTiles.filter((_, index) => index != 0);
    return [...updatedTiles, ...tileGenerator(1)];
  }

  return currentTiles;
};

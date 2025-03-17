import { useKeyPress } from "../../../utils/hooks/useKeyPress";
import { PianoTile } from "./PianoTile";
import "./Piano.css";
import { useEffect } from "react";
import { usePianoStore } from "../bootstrapper/piano-centre/piano-store";

export function PianoTileContainer() {
  const { tiles, gameInit, keypress } = usePianoStore();

  const handleKeyboardPress = (event: KeyboardEvent) => {
    keypress(event.key.toLocaleUpperCase());
  };

  useEffect(() => {
    gameInit();
  }, []);

  useKeyPress(handleKeyboardPress);

  return (
    <div className="piano-container">
      {tiles.map((val, index) => (
        <PianoTile
          color={val.tileColor}
          displayName={val.displayKey}
          soundKey={val.soundKey}
          index={index}
          isCurrentKey={index === 0}
        />
      ))}
    </div>
  );
}

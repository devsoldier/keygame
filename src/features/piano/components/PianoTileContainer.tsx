import { useKeyPress } from "../../../utils/hooks/useKeyPress";
import { PianoTile } from "./PianoTile";
import "./Piano.css";
import { useContext } from "react";
import { PianoContext } from "../bootstrapper/PianoBootstrap";

export function PianoTileContainer() {
  const { tiles, tileHandler } = useContext(PianoContext);

  const handleKeyboardPress = (event: KeyboardEvent) => {
    tileHandler(event.key.toLocaleUpperCase());
  };

  useKeyPress(handleKeyboardPress);

  return (
    <div className="piano-container">
      {tiles.map((val, index) => (
        <PianoTile
          key={val.id}
          color={val.tileColor}
          displayName={val.displayKey}
          soundKey={val.soundKey}
          index={index}
          isCurrentKey={index == 0}
        />
      ))}
    </div>
  );
}

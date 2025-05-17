import { useKeyPress } from "../../../utils/hooks/useKeyPress";
import { PianoTile } from "./PianoTile";
import "./Piano.css";
import { useDispatch } from "react-redux";
import {
  keypress,
  usePianoState,
} from "../bootstrapper/piano_redux/reducers/PianoSlice";

export function PianoTileContainer() {
  const tiles = usePianoState().piano.tiles;
  const dispatch = useDispatch();

  const handleKeyboardPress = (event: KeyboardEvent) => {
    dispatch(keypress(event.key.toLocaleUpperCase()));
  };

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

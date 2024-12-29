import { useKeyPress } from "../../../utils/hooks/useKeyPress";
import { PianoTile } from "./PianoTile";
import "./Piano.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../common/store";
import { keypress } from "../bootstrapper/piano_redux/reducers/PianoSlice";

export function PianoTileContainer() {
  const tiles = useSelector((state: RootState) => state.piano.tiles);
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

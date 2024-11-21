import { AudioKey } from "./PlayPianoSound";

export interface Tile {
  displayKey: string;
  tileColor: string;
  soundKey: AudioKey;
}

export function PianoTile({
  displayName,
  color,
  soundKey,
  index,
  isCurrentKey,
}: {
  displayName: string;
  color: string;
  soundKey: string;
  index: number;
  isCurrentKey: boolean;
}) {
  return (
    <div
      className="piano-tile"
      style={{
        backgroundColor: isCurrentKey ? color : "silver",
        color: isCurrentKey ? "white" : "grey",
        padding: isCurrentKey ? "40px" : "0px",
        margin: "15px",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: isCurrentKey ? "150px" : "80px",
        borderRadius: "30px",
        width: "100px",
        objectFit: "cover",
        transition: "all 0.3s cubic-bezir(0.4,0,0.2,1)",
      }}
    >
      {displayName}
    </div>
  );
}

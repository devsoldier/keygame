import { audioKeyList } from "../bootstrapper/constants/PianoConstants";

export type AudioKey =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

export type AudioMap = {
  [key: string]: HTMLAudioElement;
};

export function PlayPianoSound(key: string) {
  const sound: HTMLAudioElement = audioKeyList[key.toLowerCase()];

  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

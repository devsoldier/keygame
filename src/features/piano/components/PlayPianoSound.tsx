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
  const audioKeyList: AudioMap = {
    a: new Audio("src/assets/sounds/A0.mp3"),
    b: new Audio("src/assets/sounds/Bb0.mp3"),
    c: new Audio("src/assets/sounds/B0.mp3"),
    d: new Audio("src/assets/sounds/C1.mp3"),
    e: new Audio("src/assets/sounds/Db1.mp3"),
    f: new Audio("src/assets/sounds/D1.mp3"),
    g: new Audio("src/assets/sounds/Eb1.mp3"),
    h: new Audio("src/assets/sounds/E1.mp3"),
    i: new Audio("src/assets/sounds/F1.mp3"),
    j: new Audio("src/assets/sounds/Gb1.mp3"),
    k: new Audio("src/assets/sounds/G1.mp3"),
    l: new Audio("src/assets/sounds/Ab1.mp3"),
    m: new Audio("src/assets/sounds/A1.mp3"),
    n: new Audio("src/assets/sounds/Bb1.mp3"),
    o: new Audio("src/assets/sounds/B1.mp3"),
    p: new Audio("src/assets/sounds/C2.mp3"),
    q: new Audio("src/assets/sounds/Db2.mp3"),
    r: new Audio("src/assets/sounds/D2.mp3"),
    s: new Audio("src/assets/sounds/Eb2.mp3"),
    t: new Audio("src/assets/sounds/E2.mp3"),
    u: new Audio("src/assets/sounds/F2.mp3"),
    v: new Audio("src/assets/sounds/Gb2.mp3"),
    w: new Audio("src/assets/sounds/G2.mp3"),
    x: new Audio("src/assets/sounds/Ab2.mp3"),
    y: new Audio("src/assets/sounds/A2.mp3"),
    z: new Audio("src/assets/sounds/Bb2.mp3"),
  };

  const sound: HTMLAudioElement = audioKeyList[key.toLowerCase()];

  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

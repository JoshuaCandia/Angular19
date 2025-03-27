interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const { song, songDuration, details } = audioPlayer;
const { author } = details;

console.log("Song: ", song);
console.log("Song duration: ", songDuration);
console.log("Author: ", author);

const [, , trunks]: string[] = ["Goku", "Vegeta", "Trunks"];

console.log("Personaje 3: ", trunks);

import RockImg from './images/rock.png';
import PaperImg from './images/paper.png';
import ScissorsImg from './images/scissors.png';

// URLオブジェクト
export const appURL = {
  top: "/",
  main: "/main",
  result: "/result"
};

// Topページのタイトルテキスト
export const topTitleText = "あとだしじゃんけん";

// Topページのボタン
export const timesArr = [
  { times: 3, text: "3回あそぶ" },
  { times: 5, text: "5回あそぶ" },
  { times: 7, text: "7回あそぶ" }
];

// Resultページのボタンテキスト
export const resultButtonText = "Topに戻る";

// Resultページの勝敗テキスト
export const resultTitleTextObj = {
  win: "お題クリア！！",
  lose: "お題しっぱ〜〜い"
};

// お題
export const questionTextArr = [
  { id: 0, text: "あいこを出してください" },
  { id: 1, text: "負けてください" },
  { id: 2, text: "勝ってください" }
];

// じゃんけんの手
export const rpsHandArr = [
  { id: 0, text: "rock", img: RockImg },
  { id: 1, text: "scissors", img: ScissorsImg },
  { id: 2, text: "paper", img: PaperImg }
];

// 各指のランドマークの設定
export const landmarksObj = {
  colors: {
    thumb: 'red',
    indexFinger: 'blue',
    middleFinger: 'yellow',
    ringFinger: 'green',
    pinky: 'pink',
    palmBase: 'white'
  },
  radius: 3
};

// じゃんけんの手を判定するための推論回数
export const ESTIMATE_TIMES = 20;

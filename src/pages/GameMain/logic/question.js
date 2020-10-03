import { questionTextArr, rpsHandArr } from '../../../game-config';

/**
 * ランダムにお題のオブジェクトを生成
 */
export function generateQuestion() {
  return {
    id: Math.random(),
    text: _randQuestionText(),
    hand: _randQuestionHand()
  }
}

/**
 *
 * @param poseCounter : 試行回数とプレイヤーの手を管理するオブジェクト
 * @param cpuHand     : お題のじゃいけんの手のテキスト
 * @param judge       : プレイヤーの勝利条件のテキスト
 */
export function judgeQuestion(poseCounter, cpuHand, judge) {
  // 一番出した回数の多い手の取得
  const getPlayerHand = () => {
    const keys = Object.keys(poseCounter);
    let values = Object.values(poseCounter);
    // 第一引数には試行回数が格納されているのでその値を書き換える
    values[0] = -1;
    // じゃんけんの手の最大値のインデックスを取得
    const maxIndex = values.indexOf(Math.max(...values));
    // プレイヤーの手の取得
    return keys[maxIndex];
  }

  // じゃんけんの手を対応する数に変換
  const numPlayerHand = _text2Id(getPlayerHand(), rpsHandArr);
  const numCpuHand = _text2Id(cpuHand, rpsHandArr);
  const numJudge = _text2Id(judge, questionTextArr);
  // 勝敗の決定
  const result = (numPlayerHand - numCpuHand + 3) % 3;

  return result === numJudge ? true : false;
}

/**
 * ランダムにじゃんけんの手を選択
 */
function _randQuestionHand() {
  return _randSelectText(rpsHandArr);
}

/**
 * ランダムにお題テキストを選択
 */
function _randQuestionText() {
  return _randSelectText(questionTextArr);
}

/**
 * 引数の配列からkeyが"text"の値をランダムに一つ取得
 * @param arr: keyに"text"を持つObjectの配列
 */
function _randSelectText(arr) {
  const texts = arr.map(v => v.text);
  const selectedText = texts[Math.floor(Math.random() * texts.length)];

  return selectedText;
}

/**
 * 引数の配列からkeyが"text"のObjectの"id"を取得
 * @param text : idを取得対象のtext
 * @param arr  : keyに"text", "id"をもつObjectの配列
 */
function _text2Id(text, arr) {
  return arr.find(v => v.text === text).id;
}
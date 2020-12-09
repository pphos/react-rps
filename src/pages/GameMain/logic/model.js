import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';

import { resizeCanvas, drawHandPoints } from './draw';

/**
 * HandPoseモデルの読み込み
 * @param setModel  : modelのステートを更新する関数
 */
export async function loadModel(setModel) {
  setModel(await handpose.load());
  console.log("Handpose model loaded");
}

/**
 * モデルから手のポーズを推論
 * @param  setPoseCounter     : poseCounterのステートを更新する関数
 * @param  setPlayerHandName  : playerHandNameのステートを更新する関数
 * @param  webcamRef          : webcamへのref
 * @param  canvasRef          : canvasへのref
 * @param  model              : handposeモデル
 * @param  GE                 : GestureEstimatorオブジェクト (モデルにおける手のジェスチャーを定義したオブジェクト)
 */
export async function estimateHands(setPoseCounter, setPlayerHandName, webcamRef, canvasRef, model, GE) {
  const video = webcamRef.current;
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');

  if (video.getCanvas() !== null && model !== null) {
    // 推論結果の取得
    const result = await _estimate(video, canvas, ctx, model, GE);
    // 推論成功時に結果を更新
    if (result !== undefined) {
      const handName = result.name;
      setPoseCounter(poseCounter => ({
        ...poseCounter,
        total: poseCounter.total + 1,
        [handName]: poseCounter[handName] + 1
      }));
      setPlayerHandName(handName);
    }
  }
}

/**
 * モデルから手のポーズを推論
 * @param video   : video要素
 * @param canvas  : canvas要素
 * @param ctx     : canvas要素の2dレンダリングコンテクスト
 * @param model   : handposeモデル
 * @param GE      : GestureEstimatorオブジェクト (モデルにおける手のジェスチャーを定義したオブジェクト)
 */
async function _estimate(video, canvas, ctx, model, GE) {
  const videoWidth = video.video.clientWidth;
  const videoHeight = video.video.clientHeight;
  // canvasを初期化
  resizeCanvas(canvas, videoWidth, videoHeight);
  ctx.clearRect(0, 0, videoWidth, videoHeight);
  // 推論結果のランドマークを取得
  // ここでheight nullエラーが出る可能性がある
  const predictions = await model.estimateHands(video.getCanvas(), true);
  // 指のランドマークの描画
  drawHandPoints(ctx, predictions);
  // 手のポーズの推論結果の取得
  const result = predictPose(predictions, GE);
  // 推論結果のポーズ名の返却
  return result;
}

/**
 * predictionsから最も信頼度の高い推論結果を取得
 * @param  predictions : handposeモデルのestimateHandsを呼び出した推論結果
 * @param  GE          : GestureEstimatorオブジェクト (モデルにおける手のジェスチャーを定義したオブジェクト)
 */
function predictPose(predictions, GE) {
  for (const prediction of predictions) {
    // ランドマークを用いたジェスチャーの推論 (信頼度は最大10.0)
    const est = GE.estimate(prediction.landmarks, 7.5);

    if (est.gestures.length > 0) {
      // 信頼度が最大のジェスチャーを取得
      const result = est.gestures.reduce((prev, current) => {
        return (prev.confidence > current.confidence) ? prev : current
      });
      return result;
    }
  }
}
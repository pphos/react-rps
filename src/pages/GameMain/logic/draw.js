import { landmarksObj } from '../../../game-config';


/**
 * canvasサイズをvideo要素のclientWidthとclientHeightにリサイズ
 * @param canvas : canvas要素のref
 * @param width  : video要素のclientWidth
 * @param height : video要素のclientHeight
 */
export function resizeCanvas(canvas, width, height) {
  canvas.width = width;
  canvas.height = height;
}

/**
 * handposeモデルの推論により取得した指のランドマークの描画
 * @param  ctx        : canvasの2Dレンダリングコンテクスト
 * @param  preditions : handposeモデルのestimateHandsを呼び出した推論結果
 */
export function drawHandPoints(ctx, predictions) {
  const radius = landmarksObj.radius;
  const colors = landmarksObj.colors;

  // 推論結果の描画
  predictions.map(prediction => {
    const annotations = prediction.annotations;
    Object.keys(annotations).forEach(part => {
      annotations[part].map(points => {
        drawPoint(ctx, points[0], points[1], radius, colors[part])
      });
    });
  });
}

/**
 * 座標, 半径, 色を指定して円を描画
 * @param ctx   : canvasの2Dレンダリングコンテクスト
 * @param x     : x座標の描画位置
 * @param y     : y座標の描画位置
 * @param r     : 円の描画半径
 * @param color : 円の描画色
 */
function drawPoint(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
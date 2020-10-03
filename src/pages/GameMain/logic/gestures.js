import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

/**
 * グーのポーズの定義
 */
export function RockGesture() {
  const pose = new GestureDescription('rock');

  pose.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
  pose.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
  pose.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
  pose.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
  pose.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

  return pose;
}

/**
 * パーのポーズの定義
 */
export function PaperGesture() {
  const pose = new GestureDescription('paper');

  pose.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
  pose.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
  pose.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  pose.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
  pose.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

  return pose;
}

/**
 * チョキのポーズの定義
 */
export function ScissorsGesture() {
  const pose = new GestureDescription('scissors');

  // 親指
  pose.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
  pose.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
  pose.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
  pose.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

  // 人差し指
  pose.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
  pose.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
  pose.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

  // 中指
  pose.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  pose.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
  pose.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

  // 薬指
  pose.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
  pose.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
  pose.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
  pose.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

  // 小指
  pose.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
  pose.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
  pose.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
  pose.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

  pose.setWeight(Finger.Index, 2);
  pose.setWeight(Finger.Middle, 2);

  return pose;
}

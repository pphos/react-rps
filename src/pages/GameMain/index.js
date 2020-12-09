import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import tw from 'twin.macro';
import fp from 'fingerpose';

import SwitchFrame from '../../layout/SwitchFrame';
import Player from './Player';
import Question from './Question';
import Judge from './Judge';

import { useValueRef } from './logic/hooks';
import { generateQuestion, judgeQuestion } from './logic/question';
import { loadModel, estimateHands } from './logic/model';
import { RockGesture, PaperGesture, ScissorsGesture } from './logic/gestures';

import { appURL, ESTIMATE_TIMES } from '../../game-config';


const GameMain = ({gameStore, setGameStore}) => {
  const poseCounterInit = { total: 0, rock: 0, paper: 0, scissors: 0};

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const history = useHistory();

  const [question, setQuestion] = useState(generateQuestion());
  const [poseCounter, setPoseCounter] = useState(poseCounterInit);
  const [playerHandName, setPlayerHandName] = useState('');
  const [model, setModel] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [estimateReady, setEstimateReady] = useState(true);
  const [count, setCount] = useState(0);

  const refPoseCounter = useValueRef(poseCounter);
  const GE = new fp.GestureEstimator([
    RockGesture(),
    PaperGesture(),
    ScissorsGesture()
  ]);

  // HandPoseモデルの読み込み
  useEffect(() => {
    loadModel(setModel);
  }, []);

  // じゃんけんの手の推論
  useEffect(() => {
    const handleEstimate = () => {
      estimateHands(setPoseCounter, setPlayerHandName, webcamRef, canvasRef, model, GE);
    }

    if (estimateReady) {
      const estimateInterval = setInterval(handleEstimate);

      console.log("Starting prediction...");
      return () => clearInterval(estimateInterval);
    } else {
      const width = webcamRef.current.video.clientWidth;
      const height = webcamRef.current.video.clientHeight;
      const cxt = canvasRef.current.getContext('2d');

      cxt.clearRect(0, 0, width, height);
    }
  });

  // 勝敗の決定
  useEffect(() => {
    if (refPoseCounter.current.total >= ESTIMATE_TIMES) {
      // 勝敗の判定
      if (judgeQuestion(refPoseCounter.current, question.hand, question.text)) {
        setIsCorrect(true);
        setGameStore(gameStore => ({
          ...gameStore,
          correct: gameStore.correct + 1
        }));
      } else {
        setIsCorrect(false);
      }
      // 推論の一時停止
      setEstimateReady(false);
      // 解答フラグをON
      setIsAnswered(true);
      // 試行回数のカウント
      setCount(count => count + 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poseCounter]);

  // 問題更新
  useEffect(() => {
    if (isAnswered) {
      if (count >= gameStore.times) {
        setTimeout(() => {
          history.push(appURL.result);
        }, 1000);
      } else {
        setTimeout(() => {
          // じゃんけんの手のカウンターの初期化
          setPoseCounter(poseCounterInit);
          // 問題更新
          setQuestion(generateQuestion());
          // 解答フラグの初期化
          setIsAnswered(false);
          // 推論準備フラグのON
          setEstimateReady(true)
        }, 1000);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswered]);

  return (
    <SwitchFrame>
      <div tw="grid grid-cols-2 h-full">
        <Player
          webcamRef={webcamRef}
          canvasRef={canvasRef}
          currentHand={playerHandName}
        />
        <Question
          text={question.text}
          hand={question.hand}
          key={question.id}
        />
      </div>
      <div tw="absolute" css={`top: 18.5%; left: 34.25%;`}>
        <Judge
          isAnswered={isAnswered}
          isCorrect={isCorrect}
        />
      </div>
    </SwitchFrame>
  );
}

export default GameMain;
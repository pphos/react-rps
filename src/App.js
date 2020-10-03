import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GameTop from './pages/GameTop';
import GameMain from './pages/GameMain';
import GameResult from './pages/GameResult';
import { appURL, timesArr } from './game-config';


const App = () => {
  const [gameStore, setGameStore] = useState({
    times: 0,   // ゲーム数
    correct: 0, // 正解数
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={appURL.top}>
          <GameTop
            timesArr={timesArr}
            gameStore={gameStore}
            setGameStore={setGameStore}
          />
        </Route>
        <Route exact path={appURL.main}>
          <GameMain
            gameStore={gameStore}
            setGameStore={setGameStore}
          />
        </Route>
        <Route exact path={appURL.result}>
          <GameResult
            gameStore={gameStore}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

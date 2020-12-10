import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import SwitchFrame from './layout/SwitchFrame';
import GameTop from './pages/GameTop';
import GameMain from './pages/GameMain';
import GameResult from './pages/GameResult';
import { appURL, timesArr } from './game-config';


const App = () => {
  const gameStoreInit = { times: 0, correct: 0};
  const [gameStore, setGameStore] = useState(gameStoreInit);


  return (
    <SwitchFrame>
      <HashRouter>
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
      </HashRouter>
    </SwitchFrame>
  );
}

export default App;

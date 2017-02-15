import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import { RootContainer } from '../containers/RootContainer'

import { Home } from '../routes/Home'

import { LeaderBoardContainer } from '../containers/LeaderBoardContainer'
import { GameContainer } from '../containers/GameContainer'

export default (
  <Route path="/" component={RootContainer}>
    <IndexRoute component={Home} />

    <Route path="/game" component={ GameContainer } />
    <Route path="/board" component={ LeaderBoardContainer } />

    <Redirect from="*" to="/" />
  </Route>
)

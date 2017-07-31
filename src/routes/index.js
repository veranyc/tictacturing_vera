import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../Containers/template'
import Profile from '../Containers/profile'
import TicTacToe from '../Containers/TicTacToe'



const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
    >
      <IndexRoute
        component={TicTacToe}
      />
      <Route
        path={'/profile'}
        component={Profile}
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes

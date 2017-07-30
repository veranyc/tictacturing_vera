import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../Containers/template'
import Profile from '../Containers/profile'
import Home from '../Containers/home'



const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
    >
      <IndexRoute
        component={Home}
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

// @flow

import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import Helmet from 'react-helmet'
import RedirectWithStatus from 'components/RouterStatus/RedirectWithStatus'
import Menu from 'app/components/Menu/Menu'
import Loading from 'app/components/Loading/Loading'
import Examples from 'app/containers/Examples'
import Hero from 'app/containers/Hero/Hero'
import Home from 'app/containers/Home'
import NotFound from 'app/containers/NotFound'
import config from '../config'
import style from './index.scss'

const App = () => (
  <div>
    <Helmet {...config.head} />
    <Hero />

    <Menu />
    <div className={style.container}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/examples" component={Examples} exact />
        <RedirectWithStatus status={302} from="/home" to="/" />
        <Route path="/shell" component={Loading} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App

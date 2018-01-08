import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import configureStore from 'reducers/configureStore'
import App from 'app'

const supportsHistory = 'pushState' in window.history
const { store } = configureStore(f => f, window.__data)

const renderApp = TheApp =>
  hydrate(
    <AppContainer warnings={false}>
      <Provider store={store} key="provider">
        <BrowserRouter forceRefresh={!supportsHistory}>
          <TheApp />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )

if (module.hot) {
  module.hot.accept('app', () => {
    const theApp = require('app').default
    renderApp(theApp)
  })
}

if ('serviceWorker' in navigator && process.env.ENABLE_SW === 'true') {
  runtime.register()
}

renderApp(App)

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { AppContainer } from 'react-hot-loader'

import rootReducer from './reducers'
import App from './app'

const middleware = [thunk]
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
) || null

const hotRender = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  )
}

hotRender()

if (module.hot) {
  module.hot.accept('./app', () => {
    hotRender()
  })
}

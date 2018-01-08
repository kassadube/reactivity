// @flow

import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { reducer as formReducer } from 'redux-form'
import reducers, { appEpic } from 'app/redux'

export const rootEpic = combineEpics(...appEpic)

export default combineReducers({
  ...reducers,
  form: formReducer
})

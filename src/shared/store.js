import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default (initialState) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )

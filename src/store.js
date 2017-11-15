import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import NOTIFY_API from './utils/Api';
import rootReducer from './reducers'

const initialState = {}
// const middleware = [
//   thunk,
// ]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument({ NOTIFY_API })))
)

export default store

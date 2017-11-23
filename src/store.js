import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import NOTIFY_API from './utils/Api';
import rootReducer from './reducers'


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument({ NOTIFY_API })))
)

export default store

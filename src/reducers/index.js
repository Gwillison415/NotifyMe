import {combineReducers} from 'redux'
import inviteReducer from './invites'

// in order to separate concerns and make unit testing pieces of the application easier as it scales
//I have intentionally created a separate reducer for the MVP invite data so as to highlight best practices

const appReducer = combineReducers({invites: inviteReducer})

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_DATA') {
    state = undefined
    console.log('inside rootReducer', 'state', state);
  }

  return appReducer(state, action)
}

export default rootReducer;

import { combineReducers } from 'redux'
import invites from './invites'

// in order to separate concerns and make unit testing pieces of the application easier as it scales
//I have intentionally created a separate reducer for the MVP invite data so as to highlight best practices

export default combineReducers({
  invites,
})

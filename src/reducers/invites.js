import {
  INVITES_REQUEST_STARTED,
  INVITES_REQUEST_SUCCESS,

} from '../actions'

const initialState = {
  invites: [],
  fetchingInvites: true,
}

export default (state = initialState, action) => {

  switch (action.type) {
    case INVITES_REQUEST_STARTED:
      return {
        ...state,
        fetchingInvites: true,
      }
    case INVITES_REQUEST_SUCCESS:
      return {
        ...state,
        invites: action.invites,
      }
}

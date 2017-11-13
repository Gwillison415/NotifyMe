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
        fetchingInvites: false,
        invites: action.invites,
      }
    default:
      return state
  }
}

function toggleProperty(invites, invite, property) {
  const index = invites.indexOf(invite)
  return [
    ...invites.slice(0, index),
    { ...invite, [property]: !invite[property] },
    ...invites.slice(index + 1),
  ];
}

import {
  INVITES_REQUEST_STARTED,
  INVITES_REQUEST_SUCCESS,
  TOGGLE_BUTTON,
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
    case TOGGLE_BUTTON:
    return {
      ...state,
      invites: toggleProperty(state.invites, action.invite, 'isOpen')
    }
    default:
      return state
  }
}


function toggleProperty(invites, invite, property) {
  console.log(property);
  const index = invites.indexOf(invite)
  return [
    ...invites.slice(0, index),
    { ...invite, [property]: !invite[property] },
    ...invites.slice(index + 1),
  ];
}

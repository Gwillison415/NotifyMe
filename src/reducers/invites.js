import {
  INVITES_REQUEST_STARTED,
  INVITES_REQUEST_SUCCESS,
  TOGGLE_JOIN,
} from '../actions'

const initialState = {
  invites: [],
  invitesById: {},
  fetchingInvites: true,

}
function createState(json, incomingState) {
  const state = incomingState;
  state.invitesById = {};
  json.forEach((invite, idx) => {
    state.ids = state.ids.concat(invite[idx]);
    state.invitesById[invite.idx] = {};
    state.invitesById[invite.idx].invite = invite.invite;
    state.invitesById[invite.idx].sender_id = invite.sender_id;
    state.invitesById[invite.idx].vector = invite.vector;
    state.invitesById[invite.idx].sig_id = invite.sig_id;
    state.invitesById[invite.idx].percentComplete =
    stats.unread / (stats.unread +
    stats.read);

  });
  return { ...state, fetchingInvites: false };
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
    case TOGGLE_JOIN:
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

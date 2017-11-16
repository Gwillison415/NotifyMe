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
    if (state.invitesById[invite.invite_id] !== "null") {
      return;
    } else {

      state.ids = state.ids.concat(invite.invite_id);
      state.invitesById[invite.invite_id] = {};
      state.invitesById[invite.invite_id].invite = invite.invite;
      state.invitesById[invite.invite_id].sender_id = invite.sender_id;
      state.invitesById[invite.invite_id].vector = invite.vector;
      state.invitesById[invite.invite_id].sig_id = invite.sig_id;
      state.invitesById[invite.invite_id].percentComplete = 0;
    }

  });
  return { ...state, fetchingInvites: false };
}


export default (state = initialState, action) => {

  switch (action.type) {
    case INVITES_REQUEST_STARTED:
      return createState(action.response, state);
    case INVITES_REQUEST_SUCCESS:
      return {
        ...state,
        fetchingInvites: false,
        invites: action.invites,
      }
    case TOGGLE_JOIN:
    return {
      ...state,
      invites: toggleProperty(state.invites, action.invite, "someprop")
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

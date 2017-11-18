import {
  INVITES_REQUEST_STARTED,
  INVITES_REQUEST_SUCCESS,
  UPDATE_JSON,
  TOGGLE_JOIN,
} from '../actions'

const initialState = {
  ids: [],
  invites: [],
  // invitesById: {},
  fetchingInvites: true,

}
function createState(json, incomingState) {
  const state = incomingState;
  state.invitesById = {};
  json.forEach((invite, idx) => {
    //maintain backwards compatibility with previos state setup
  // console.log(state.invitesById[invite.invite_id]);
    // dedupe invites
    if (state.invitesById.hasOwnProperty(invite.sig_id)) {
      console.log('inside dedupe');
      return;
    } else {
      state.invites.push(invite)

      state.ids = state.ids.concat(invite.invite_id);
      state.invitesById[invite.sig_id] = {};
      state.invitesById[invite.sig_id].invite = invite.invite;
      state.invitesById[invite.sig_id].sender_id = invite.sender_id;
      state.invitesById[invite.sig_id].status = invite.status;
      state.invitesById[invite.sig_id].vector = invite.vector;
      state.invitesById[invite.sig_id].sig_id = invite.sig_id;
      state.invitesById[invite.sig_id].percentComplete = 0;
      console.log(state.invitesById[invite.sig_id]);
    }

  });
  return { ...state };
}


export default (state = initialState, action) => {

  switch (action.type) {
    case INVITES_REQUEST_STARTED:
      return createState(action.response.invites, state);
    case INVITES_REQUEST_SUCCESS:
      return {
        ...state,
        fetchingInvites: false,
        // invites: action.invites,
      }
    case TOGGLE_JOIN:
    return {
      ...state,
      invites: toggleProperty(state.invites, action.invite, "someprop")
    }
    case UPDATE_JSON:
      return createState(action.response.invites, state);
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

import {invitationsJson as mockJson} from '../static/invitations';
import {invitationsUpdateJson as mockJsonUpdate} from '../static/invitationsUpdate';
export const INVITES_REQUEST_STARTED = "INVITES_REQUEST_STARTED"
export const INVITES_REQUEST_SUCCESS = "INVITES_REQUEST_SUCCESS"
export const UPDATE_JSON = 'UPDATE_JSON'
export const TOGGLE_JOIN = 'TOGGLE_JOIN'
export const RESET_JSON = "RESET_JSON"
export const CLEAR_DATA = "CLEAR_DATA"


//Strings are prefered to symbols and promises because serializable actions enable several
// of Redux's defining features, such as time travel debugging, recording and replaying actions
// we're going to take time to put serializable variables in the global namespace such that we can re-use them
// which speeds up creating any action that may re-use them, and we can now unit test them.


//real world requires a fetch call to an API and I would imagine you'd like to know that I can
// 1 make that asynchronous call
// 2 understand the nuances of dev / production builds within react's standard build configuration
export const getInvites = () => {

  /* if statement utilizing NODE_ENV environmental variable acts as a toggle between environments
such that there is less disruption / bugs / thinking as you move between environments (Dev, test, production) */
  // if (process.env.NODE_ENV === "production") {
  //   console.log("inside produciton build");
  //   return async (dispatch, getState, {NOTIFY_API}) => {
  //     dispatch({type: INVITES_REQUEST_STARTED})
  //     const response = await NOTIFY_API.request(`/moogsoftAPI/invites`)
  //     const json = await response.json()
  //     dispatch({type: INVITES_REQUEST_SUCCESS, invites: json})
  //   }

  return async (dispatch) => {
    let mockJsonCall = await mockJson;
    dispatch({type: INVITES_REQUEST_STARTED, response: mockJsonCall})

    dispatch({type: INVITES_REQUEST_SUCCESS})
  }

}


export const handleUpdates = () => {
  // mockJsonUpdate = await mockJsonUpdate;
  return async (dispatch) => {
    dispatch({type: UPDATE_JSON, response: mockJsonUpdate, isUpdate: true})
    dispatch({type: INVITES_REQUEST_SUCCESS})
  }
}

export const returnToInitialInvites = () => {
  // mockJson = await mockJson;
  return async (dispatch) => {
    dispatch({type: RESET_JSON, response: mockJson, isUpdate: true})
    dispatch({type: INVITES_REQUEST_SUCCESS})
  }
}

export const clearData = () => {
  console.log('clearData');
  return (dispatch) => dispatch({type: CLEAR_DATA})
}

export const toggle = () => {
  return async (dispatch) => {
    dispatch({type: TOGGLE_JOIN, response: mockJson.invites, isUpdate: true})
  }
}

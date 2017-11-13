import {invitationsJson as mockJson} from '../static/assets/invitations';
// import {invitationsUpdateJson as mockJsonUpdate} from '../static/invitations_update';


//Strings are prefered to symbols and promises because serializable actions enable several
  // of Redux's defining features, such as time travel debugging, recording and replaying actions
// we're going to take time to put serializable variables in the global namespace such that we can re-use them
  // which speeds up creating any action that may re-use them, and we can now unit test them.
export const INVITES_REQUEST_STARTED = "INVITES_REQUEST_STARTED"
export const INVITES_REQUEST_SUCCESS = "INVITES_REQUEST_SUCCESS"

//real world requires a fetch call to an API and I would imagine you'd like to know that I can
// 1 make that asynchronous call
// 2 understand the nuances of dev / production builds within react's standard build configuration
export const getInvites = () => {

/* if statement utilizing NODE_ENV environmental variable acts as a toggle between environments
such that there is less disruption / bugs / thinking as you move between environments (Dev, test, production) */
  if (process.env.NODE_ENV === "production") {
    return async (dispatch, getState, { NOTIFY_API }) => {
      dispatch({ type: INVITES_REQUEST_STARTED })
      const response = await NOTIFY_API.request(`/moogsoftAPI/invites`)
      const json = await response.json()
      dispatch({
        type: INVITES_REQUEST_SUCCESS,
        invites: json.invites,
      })
    }
  } else {
    //exersize calls for mock data (provided)
    //TODO expand to react to each mockJson, mockJsonUpdate
    return (dispatch) => {dispatch({
      type: INVITES_REQUEST_SUCCESS,
      invites: mockJson.invites,
    })}
  }

}
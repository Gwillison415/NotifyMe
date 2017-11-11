import {invitationsJson } from '../static/invitations';
import {invitationsUpdateJson } from '../static/invitations_update';
export const INVITES_REQUEST_STARTED = "INVITES_REQUEST_STARTED"
export const INVITES_REQUEST_SUCCESS = "INVITES_REQUEST_SUCCESS"

//real world requires a fetch call to an API and I would imagine you'd like to know that I can
// 1 make that asynchronous call
// 2 understand the nuances of dev / production builds within react's standard build configuration
export const getInvites = () => {

  // if statement utilizing NODE_ENV environmental variable acts as a toggle between environments such that there is
  // less disruption as you move between environments (Dev, test, production)
  if (process.env.NODE_ENV === "production") {
    return async (dispatch) => {
      dispatch({ type: INVITES_REQUEST_STARTED })
      const response = await request(`/moogsoftAPI/invites`)
      const json = await response.json()
      dispatch({
        type: INVITES_REQUEST_SUCCESS,
        invites: json.invites,
      })
    }
  } else {
    //exersize calls for mock data (provided)
    return dispatch({
      type: INVITES_REQUEST_SUCCESS,
      invites: MockJson.invites,
    })
  }

}
async function request(path, method = 'GET', body = null) {
  if (body) body = JSON.stringify(body)
  return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body
  })
}

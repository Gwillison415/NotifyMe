import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {InvitesComponent, mapStateToProps, mapDispatchToProps} from '../components/invites';
import invitationsTest from '../static/invitationsTest';
configure({adapter: new Adapter()});
const state = {
  invites: {
    ids: [
      25121, 23951, 92394, 49120, 10293
    ],
    invites: invitationsTest,
    invitesById: {

      10293: {
        invite: "The Owner has invited you to join Situation 10293 [Mail intermittendly available] Please follow this link to open Situation Room: http://www.moogsoft.com",
        sender_id: "mike",
        subject: "Mail intermittendly available",
        url: "http://www.moogsoft.com",
        invite_id: 5,
        isJoinRequest: true,
        status: "read",
        vector: "Email",
        sig_id: 10293,
        invite_time: 1399292261
      },

      23951: {
        invite: "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system] Please follow this link to open Situation Room: http://www.moogsoft.com",
        sender_id: "andrew",
        subject: "Slow access to Purchasing system",
        url: "http://www.moogsoft.com",
        invite_id: 2,
        isJoinRequest: true,
        status: "read",
        vector: "Email",
        sig_id: 23951,
        invite_time: 1398992261
      },
      25121: {
        invite: "The Owner has invited you to join Situation 25121 [Mail system down] Please follow this link to open Situation Room: http://www.moogsoft.com",
        sender_id: "jeff",
        subject: "Mail system down",
        url: "http://www.moogsoft.com",
        invite_id: 1,
        isJoinRequest: true,
        status: "read",
        vector: "Internal",
        sig_id: 25121,
        invite_time: 1398892261
      },
      49120: {
        invite: "The Owner has invited you to join Situation 49120 [No access to AWS account] Please follow this link to open Situation Room: http://www.moogsoft.com",
        sender_id: "adrian",
        subject: "No access to AWS account",
        url: "http://www.moogsoft.com",
        invite_id: 4,
        isJoinRequest: true,
        status: "unread",
        vector: "Internal",
        sig_id: 49120,
        invite_time: 1399192261
      },
      92394: {
        invite: "The Owner has invited you to join Situation 92394 [End-users reporting no service in London] Please follow this link to open Situation Room: http://www.moogsoft.com",
        sender_id: "neil",
        subject: "End-users reporting no service in London",
        url: "http://www.moogsoft.com",
        invite_id: 3,
        isJoinRequest: true,
        status: "read",
        vector: "Twitter",
        sig_id: 92394,
        invite_time: 1399092261
      }
    },
    statsObj: {}
  }

}

describe('Invites component', () => {
  it('should render a component with props as specified ', () => {
    const retrieveInvites = jest.fn();
    const component = shallow(<InvitesComponent invites={state.invites.invites} invitesById={state.invites.invitesById} ids={state.invites.ids}/>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("map's given State To Props ", () => {
    const expected = {
      ids: state.invites.ids,
      invitesById:state.invites.invitesById,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('clearData');
  });

  it('Should be a Card Deck', () => {
    const component = shallow(<InvitesComponent invites={state.invites.invites} invitesById={state.invites.invitesById} ids={state.invites.ids}/>);
    // console.log('log??????', component.find([width="100%"]));
    expect(component.find('div.container').exists()).toBe(true);
  });
});

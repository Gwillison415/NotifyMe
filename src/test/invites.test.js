import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import {Invites, mapStateToProps, mapDispatchToProps} from '../components/invites';
import invitations from '../static/invitationsTest';
const state = {
  ids: [
    1, 2, 3, 4, 5
  ],
  invites: invitations,
  invitesById: {},
  statsObj = {}

}

describe('Invites component', () => {
  it('should render a component with props as specified ', () => {
    const retrieveInvites = jest.fn();
    const component = shallow(<Invites issuesIds={state.widgets.byId.github.issues.ids} loadingInvites={false} retrieveInvites={retrieveInvites} orgName={state.widgets.byId.github.currentPage.selectedOrgName}/>,);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("map's given State To Props ", () => {
    const expected = {
      issuesByRepo: undefined,
      loadingInvites: false,
      orgName: 'ski-ski',
      userName: 'michaelmurray6298'
    };
    expect(mapStateToProps(state, {widgetId: 'github'})).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveInvites');
  });

  it('Should have a Cart Header in the center', () => {
    const retrieveInvites = jest.fn();
    const component = shallow(<Invites issuesIds={state.widgets.byId.github.issues.ids} loadingInvites={false} retrieveInvites={retrieveInvites} orgName={state.widgets.byId.github.currentPage.selectedOrgName} userName={state.widgets.byId.github.currentPage.userName}/>,);
    expect(component.find('.aligned').exists()).toBe(true);
  });
});

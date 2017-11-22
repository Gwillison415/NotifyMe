import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {returnToInitialInvites, clearData, } from '../actions'
import {
  Navbar,
  NavbarBrand,
  Progress,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col
} from 'reactstrap';
import {handleUpdates} from '../actions';

class NavToolBar extends React.Component {
  // the react community seems to be drifting towards almost exclusively toward
  // functional components but i still wanted to highlight that I can write a class component

  render() {

    let percentRead = Math.round(this.props.percentComplete * 100)
    let percentUnread = Math.round((1 - this.props.percentComplete) * 100)

    return (<div>
      <Navbar color="blue" light="light" expand="md">
        <NavbarBrand href="/">Duplicate Messages: {`${this.props.duplicates}`}</NavbarBrand>
        <Col sm="9" md={{
            size: 6,
            offset: 1
          }}>
          <Progress multi="multi">
            <Progress bar="bar" color="info" value={`${percentRead}`}>
              {`${percentRead}%`}
            </Progress>
            <Progress bar="bar" color="warning" value={`${percentUnread}`}>
              {`${percentUnread}%`}</Progress>

          </Progress>
        </Col>
        <UncontrolledDropdown size="small">
          <DropdownToggle caret="caret" id="branchInput">
            Toggle Me
          </DropdownToggle>
          <DropdownMenu >

            <DropdownItem
              //  an 'anonymizing' Fn prevents strange re-renders in react components
              onClick={() => {
                this.props.handleUpdates()
              }}>
              Trigger Updated invitations JSON</DropdownItem>
            <DropdownItem
              //  an 'anonymizing' Fn prevents strange re-renders in react components
              onClick={() => {
                this.props.returnToInitialInvites()
              }}>
              Trigger Invitation JSON</DropdownItem>
            <DropdownItem
              //  an 'anonymizing' Fn prevents strange re-renders in react components
              onClick={() => {
                this.props.clearData()
              }}>
              Clear Data</DropdownItem>
            <DropdownItem divider="divider"/>
            <DropdownItem >
              <a href="https://github.com/Gwillison415/NotifyMe">Github Repo</a>
            </DropdownItem>
          </DropdownMenu>

        </UncontrolledDropdown>

      </Navbar>
    </div>);
  }
}

export const mapStateToProps = (state, ownProps) => {
  let invites = state.invites.invtes
  let statsObj = state.invites.statsObj;
  console.log(state.invites);
  return {
    statsObj,
    invites
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  handleUpdates,
  returnToInitialInvites,
  clearData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavToolBar);

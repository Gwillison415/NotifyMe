import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {handleUpdates, getInvites} from '../actions';

 class NavToolBar extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="blue" light expand="md">
          <NavbarBrand href="/">NotifyMe</NavbarBrand>
          <UncontrolledDropdown size="small">
            <DropdownToggle caret id="branchInput">
      Change JSON Input
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem> Time since invitation:</DropdownItem>
              <DropdownItem onClick={()=>{handleUpdates()}}> invitations</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem > <a href="https://github.com/Gwillison415/NotifyMe">Github Repo</a></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <div>
            <a href="/" onClick={()=>{this.props.handleUpdates()}}> Update</a>
          </div>
          <div>
            <a href="/" onClick={()=>{this.props.getInvites()}}> Initial</a>
          </div>
        </Navbar>
      </div>
    );
  }
}

// const mapStateToProps = state => ({invites: state.invites})
const mapDispatchToProps = dispatch => bindActionCreators({
  handleUpdates, getInvites
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(NavToolBar);

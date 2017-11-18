import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {handleUpdates} from '../actions';
 class NavToolBar extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="blue" light expand="md">
          <NavbarBrand href="/">NotifyMe</NavbarBrand>
          <UncontrolledDropdown size="small">
            <DropdownToggle caret id="branchInput">

            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem> Time since invitation:</DropdownItem>
              {/* <DropdownItem onClick={()=>{this.props.handleUpdates()}}> Trigger Updated invitations</DropdownItem>
              <DropdownItem divider/> */}
              <DropdownItem > <a href="https://github.com/Gwillison415/NotifyMe">Github Repo</a></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>


        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({invites: state.invites})
const mapDispatchToProps = dispatch => bindActionCreators({
  handleUpdates
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavToolBar);

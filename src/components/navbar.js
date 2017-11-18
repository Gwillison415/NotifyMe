import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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

    return (<div>
      <Navbar color="blue" light="light" expand="md">
        <NavbarBrand href="/">Unread Messages: {`${this.props.duplicates}`}</NavbarBrand>
        <Col sm="9" md={{ size: 8, offset: 1 }}>
          <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value={`${this.props.statsObj}`} />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress>
      {/* */}
          {/* <div class="progress">

            <div className="progress-bar" role="progressbar" style={{
              "width" : "15%"
            }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar bg-success" role="progressbar" style={{
              "width" : "15%"
            }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar bg-info" role="progressbar" style={{
              "width" : "15%"
            }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div> */
          }
        </Col>
        <UncontrolledDropdown size="small">
          <DropdownToggle caret="caret" id="branchInput"></DropdownToggle>
          <DropdownMenu >
            <DropdownItem>
              Time since invitation:</DropdownItem>
            <DropdownItem
              //  an 'anonymizing' Fn prevents strange re-renders in react components
              onClick={() => {
                this.props.handleUpdates()
              }}>
              Trigger Updated invitations</DropdownItem>
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

  let statsObj = state.invites.invites.statsObj;
  return {
    statsObj,
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  handleUpdates
}, dispatch)

export default connect(null, mapDispatchToProps)(NavToolBar);

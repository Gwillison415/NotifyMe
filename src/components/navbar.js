import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
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
            {/* <Progress bar value="15"> </Progress> */}
            {/* <Progress bar color="success" value={`${this.props.statsObj}`} /> */}
            <Progress bar="bar" color="info" value={`${percentRead}`}>
              {`${percentRead}%`}
            </Progress>
            <Progress bar="bar" color="warning" value={`${percentUnread}`}>
              {`${percentUnread}%`}</Progress>

          </Progress>
          {/*  */}
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
          <DropdownToggle caret="caret" id="branchInput">
            Toggle Me
          </DropdownToggle>
          <DropdownMenu >

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

  let statsObj = state.invites.statsObj;
  console.log(state.invites);
  return {statsObj};
}
const mapDispatchToProps = dispatch => bindActionCreators({
  handleUpdates
}, dispatch)

export default connect(null, mapDispatchToProps)(NavToolBar);

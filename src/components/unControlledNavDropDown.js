import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const UCDropdown = ({
    inviteURL,
    elapsedTimeHumanReadable,
}) => {

    return (

        <UncontrolledDropdown size="small">
          <DropdownToggle caret id="branchInput">
            More Info
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem> Time Open:</DropdownItem>
            <DropdownItem>{elapsedTimeHumanReadable}</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem > <a href={inviteURL}>{inviteURL}</a></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

    );

}




const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(UCDropdown);

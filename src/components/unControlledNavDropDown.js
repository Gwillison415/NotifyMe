import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const UCDropdown = ({
    inviteURL,
    elapsedTimeHumanReadable,
}) => {

    return (

        <UncontrolledDropdown size="auto" sm={{push:5, offset: 4}}color="success">
          <DropdownToggle caret id="branchInput">
            More Info
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem> Time since invitation:</DropdownItem>
            <DropdownItem>{elapsedTimeHumanReadable}</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem > <a href={inviteURL}>Message Link</a></DropdownItem>
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

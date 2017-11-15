import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class UCDropdown extends React.Component {
    componentWillMount() {

    }
  render() {
    return (

        <UncontrolledDropdown>
          <DropdownToggle caret id="branchInput">
            Dropdown test
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

    );
  }
}


const mapStateToProps = state => ({

  invites: state.invites.invites,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UCDropdown);

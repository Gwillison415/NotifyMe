import {findDOMNode} from 'react-dom';
import React from 'react';
import $ from 'jquery';

class FullDesc extends React.Component {
 constructor() {
 super();
 }
handleToggle = () => {
 const el = findDOMNode(this.refs.toggle);
 $(el).slideToggle();
 };
render() {
 return (
 <div className="list-group">
  <ul className="profile-info">
   <li>
     <span className="info-title">User Name : </span> Shuvo Habib
   </li>
 </ul>
<ul className="profile-info additional-profile-info-list" ref="toggle">
  <li>
    <span className="info-email">Office Email</span> me@shuvohabib.com
  </li>
 </ul>
  <div className="ellipsis-click" onClick={this.handleToggle}>
    <i className="fa-ellipsis-h"/>
  </div>
 </div>
 );
 }
}
export default FullDesc;

//
// <div class="list-group">
// <a href="#" class="list-group-item pull-right list-group-item-action active">
// Cras justo odio
// </a>
// <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
// <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
// <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
// <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
// </div>

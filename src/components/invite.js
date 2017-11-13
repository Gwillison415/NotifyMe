import React from 'react'
import { Grid, Media, Image } from 'react-bootstrap';
import {imageContent} from '../static/imageSources';
var moment = require('moment');


 const InviteComponent = ({
  sender,
  inviteMsg,
  vector,
  status,
  situationID,
  selected,
}) => {
  return (
    <div>
      <Media>
        <Media.Left align="top">
          <img width={64} height={64} src={imageContent[vector]} alt="placeholder thumbnail" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>{status}</Media.Heading>
          <span>
            <h2>{sender}</h2>
          </span>
          <span>
            <p>{inviteMsg}</p>
          </span>

        </Media.Body>

      </Media>

    </div>

// add popover for inviteMsg



    //
    // <div className={`row message ${status}`}>
    //   <div className="col-xs-1">
    //     <div className="row">
    //       <div className="col-xs-2">
    //         <input
    //           type="checkbox"
    //           checked={ !selected }
    //           readOnly={ true }
    //           // onClick={() => toggleSelect(message)}
    //           />
    //       </div>
    //       {/* <div className="col-xs-2" onClick={() => toggleStar(message)}>
    //         <i className={`star fa ${starClass}`}></i>
    //       </div> */}
    //     </div>
    //   </div>
    //   <div className="col-xs-11">
    //     <Image src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" rounded />
    //     {inviteMsg}
    //     {/* {message.subject} */}
    //   </div>
    // </div>
  )
}
export default InviteComponent

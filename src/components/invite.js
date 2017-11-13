import React from 'react'
import {Grid, Media, Image} from 'react-bootstrap';
import {imageContent} from '../static/imageSources';
import ReactTooltip from 'react-tooltip'
import './invite.css';
var moment = require('moment');

export const createVectorCSSClass = (source) => {
  switch (source) {
    case "Twitter":
      return "fa fa-twitter"
    case "Internal":
      return "fa fa-home"
    case "Email":
      return "fa fa-envelope-o"
    default:
      return "fa fa-chain-broken"
  }
}


export const InviteComponent = ({
  sender,
  inviteKey,
  inviteMsg,
  inviteSubject,
  inviteURL,
  vector,
  status,
  situationID,

}) => {
  let sourceClass = createVectorCSSClass(vector)
  // let messageDetails = createMessageDetailsObject(inviteMsg)

  return (


  <div className="col-lg-12 col-sm-9">
    <div className="card hovercard">
      <div className="card-background">
        <img className="card-bkimg" alt="" src="https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/10347425_10154552968930344_3019511571965366529_n.jpg?oh=589ec00f0630750a24196b15fb0ccd76&oe=5A943FA8"/>
        </div>
        <div className="useravatar">
          <img alt="" src="https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/10347425_10154552968930344_3019511571965366529_n.jpg?oh=589ec00f0630750a24196b15fb0ccd76&oe=5A943FA8"/></div>
          <div className="card-info">
            <span className="card-title">From: {sender}</span>

          </div>
        </div>
        <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <button type="button" className={`btn btn-default ${sourceClass} text-right d-lg-inline-block `} href="#tab3" data-toggle="tab3">

              <span className="  d-lg-inline-block d-sm-none" aria-hidden="true">Source: {vector}</span>


            </button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" id="Info" className="btn btn-default"  data-toggle="tab2">
              <span className="glyphicon glyphicon-heart"  aria-hidden="true"></span>

                <a href={inviteURL} data-tip={inviteSubject}>More Info</a>
                <ReactTooltip key={inviteKey * 100} className='extraClass'  delayHide={1000} effect='solid'/>
            </button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" href="#tab1" data-toggle="tab3">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
              <div className="hidden-xs">Accept</div>
            </button>
          </div>


        </div>


          <div className="tab-content">
            <div className="tab-pane fade in  visible" id="tab1">
              <h3>This is tab 1</h3>
            </div>
            <div className="tab-pane fade in active" id="tab2">
              <h3>This is tab 2</h3>
            </div>
            <div className="tab-pane fade in" id="tab3">
              <h3>This is tab 3</h3>
            </div>
          </div>


      </div>

    )
  }

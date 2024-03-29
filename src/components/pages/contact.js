import React from 'react'
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          gackgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />



      <div className="right-column">
        <div className="contact-bullet-points">
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className='text'>480-695-2151</div>
          </div>

          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className='text'>brandondv93@gmail.com</div>
          </div>

          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className='text'>Greenville, TX</div>
          </div>

        </div>
      </div>
    </div>
  )
}
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


import './Social.css'

export default function Social() {
  return (
    <div className='social-section'>
        <h1 className='social-heading'>Social</h1>
        <div className='social-icons'>
          <span className='icon'><FontAwesomeIcon icon={faTwitter} /></span>
          <span className='icon'><FontAwesomeIcon icon={faInstagram} /></span>
          <span className='icon'><FontAwesomeIcon icon={faGithub} /></span>
          <span className='icon'><FontAwesomeIcon icon={faLinkedin} /></span>
        </div>
  

      
    </div>
  )
}

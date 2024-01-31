import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default function Header() {
  return (
    <div className='firstPage'>
      <h1 className='nameTitle'>Javier Lavin</h1>
      <h2 className='subTitle'>Web Developer</h2>
      <a href='#aboutPage' className='arrow-link'>
        <div className='nextArrow'>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </a>
    </div>
  );
}

import React from 'react';
import './Header.css';

export default function Header() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('nextSection');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header-page'>
      <img src='smoke.jpg' alt='profile' className='bg-image' />
      <h1 className='name-logo'>Javier L.</h1>
      <p className='header-text'>
        Full-stack web developer with a passion for learning and creating.
      </p>
      <div className='scroll-arrow' onClick={scrollToNextSection}>
        <span className="material-symbols-outlined">
          expand_more
        </span>
      </div>
    </div>
  );
}


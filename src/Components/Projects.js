import React, { useEffect, useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const nextSection = document.getElementById('nextSection');
    if (nextSection) {
      const rect = nextSection.getBoundingClientRect();
      const visible = rect.top <= window.innerHeight / 2;
      setIsVisible(visible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='nextSection' className={`projects-page ${isVisible ? 'visible' : ''}`}>
      <h1 className='title-one'>Projects</h1>
      <p className='sub-heading-one'>Projects that I've personally worked on</p>

      <div className={`projects-container ${isVisible ? 'visible' : ''}`}>
        <div className={`project-one ${isVisible ? 'visible' : ''}`}>
          <img src='https://via.placeholder.com/150' alt='project one' className='project-image' />
          <h2 className='project-title'>Project One</h2>
        </div>

        <div className={`project-two ${isVisible ? 'visible' : ''}`}>
          <img src='https://via.placeholder.com/150' alt='project two' className='project-image' />
          <h2 className='project-title'>Project Two</h2>
        </div>

        <div className={`project-three ${isVisible ? 'visible' : ''}`}>
          <img src='https://via.placeholder.com/150' alt='project three' className='project-image' />
          <h2 className='project-title'>Project Three</h2>
        </div>

        <div className={`project-four ${isVisible ? 'visible' : ''}`}>
          <img src='https://via.placeholder.com/150' alt='project four' className='project-image' />
          <h2 className='project-title'>Project Four</h2>
        </div>

        <div className={`project-five ${isVisible ? 'visible' : ''}`}>
          <img src='https://via.placeholder.com/150' alt='project five' className='project-image' />
          <h2 className='project-title'>Project Five</h2>
        </div>
      </div>
    </div>
  );
}

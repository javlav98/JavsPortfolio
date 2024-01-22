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

      <div className={`projects-container ${isVisible ? 'visible' : ''}`}>

        <div className={`project-card ${isVisible ? 'visible' : ''}`}>
          <img src='https://via.placeholder.com/150' alt='project one' className='project-image' />
          <div className='card-content'>
            <h2 className='project-title'>Project One</h2>
            <p className='project-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
        </div>

        <div className={`project-card ${isVisible ? 'visible' : ''}`}>
          <img src='https://via.placeholder.com/150' alt='project two' className='project-image' />
          <div className='card-content'>
            <h2 className='project-title'>Project Two</h2>
            <p className='project-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
        </div>

        <div className={`project-card ${isVisible ? 'visible' : ''}`}>
          <img src='https://via.placeholder.com/150' alt='project three' className='project-image' />
          <div className='card-content'>
            <h2 className='project-title'>Project Three</h2>
            <p className='project-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>

          </div>
        </div>

        <div className={`project-card ${isVisible ? 'visible' : ''}`}>
          <img src='https://via.placeholder.com/150' alt='project four' className='project-image' />
          <div className='card-content'>
            <h2 className='project-title'>Project Four</h2>
            <p className='project-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <div id='nextSection'>
      <div className='projects-page'>
          <h1 className='title-one'>Projects</h1>
          <p className='sub-heading-one'>Projects that I've personally worked on</p>

        <div className='projects-container'>
          <div className='project-one'>
            <img src='https://via.placeholder.com/150' alt='project one' className='project-image' />
            <h2 className='project-title'>Project One</h2>
          </div>

          <div className='project-two'>
            <img src='https://via.placeholder.com/150' alt='project two' className='project-image' />
            <h2 className='project-title'>Project Two</h2>
          </div>

          <div className='project-three'>
            <img src='https://via.placeholder.com/150' alt='project three' className='project-image' />
            <h2 className='project-title'>Project Three</h2>
          </div>

          <div className='project-four'>
            <img src='https://via.placeholder.com/150' alt='project four' className='project-image' />
            <h2 className='project-title'>Project Four</h2>
          </div>

          <div className='project-five'>
            <img src='https://via.placeholder.com/150' alt='project five' className='project-image' />
            <h2 className='project-title'>Project Five</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

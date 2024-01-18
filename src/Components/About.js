import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='about-page'>
      <h1 className='about-title'>About</h1>
      <div className='about-content'>
        <img className='about-img' src='https://i.imgur.com/9QX6Z0V.jpg' alt='about' />
        <p className='about-text'>My skills consist of React, Sass, Tyepscript, Next.js, Redux, Node.js, Docker and Kubernetes, MongoDB and APIs </p>
        <p className='about-text-two'>I am a self-taught developer who is always looking to learn new things and improve my skills. I am currently looking for a job as a developer.</p>
      </div>
    </div>
  );
}

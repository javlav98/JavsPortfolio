import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='about-page'>
      <h1 className='about-title'>About</h1>
      <div className='about-content'>
        <img className='about-img' src='graduation.jpeg' alt='about' />
        <p className='about-text'>Self-taught developer skilled in HTML, CSS/SASS, JavaScript/NextJS, TypeScript, Git, testing, Node.js/Express, and SQL. Eager to contribute expertise to web development. </p>
        
      </div>
      <p className='about-text-two'> I am passionate about continuous learning and pushing the boundaries of my skills. Currently freelancing in web development, I am navigating a transition from a successful career in the automotive industry to embrace my enthusiasm for coding and problem-solving.</p>
      <p className='about-text-three'>I am a graduate of the University of California, Irvine with a degree in History and an interest in Web technoolgies. I also graduated from W3Schools Full Stack Web Development Bootcamp, where I gained experience in building full-stack web applications using the MERN stack.</p>
      <p className='about-text-four'>I enjoy learning and reading about new technology, listsening to Music, and playing guitar</p>
      <p className='about-text-five'>I am currently looking for a full-time position as a Front-End Developer or a Freelancing Gig. Here is my Resume</p>
    </div>
  );
}

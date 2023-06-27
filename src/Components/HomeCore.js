import React from 'react';
import './HomeCore.css';


function Title () {
    return (
        <div style={{
          backgroundImage: `url("bg22.gif")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          color: 'white',
          border: '0.1px solid black',
        }}>
            <h1>Hello, I'm Javier<br></br>Full Stack Developer</h1>
        </div>
    )
}


export default function HomeCore() {
  return (
    <div>
      <Title />
    </div>
  )
}
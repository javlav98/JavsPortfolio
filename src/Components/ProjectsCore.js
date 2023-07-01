import React from 'react'
import './ProjectsCore.css'


export default function ProjectsCore() {
  return (
    <div>
        <h1 className='projectsTitle'>Projects</h1>
    <div className='cardsContainer'>
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="VirtKey.png" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Virtual Keyboard</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn">View</a>
                </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="Dripbox.png" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Drobox Login Clone</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn">View</a>
                </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="newshot.png" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Simplfied Calculator</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn">View</a>
                </div>
        </div>
    </div>
    </div>
  )
}


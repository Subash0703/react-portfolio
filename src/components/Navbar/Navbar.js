import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">
        <a className="navbar-brand logo" href="/">SUBASH</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarTogglerDemo02" 
            aria-controls="navbarTogglerDemo02" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
          </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resume">Resume</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/portfolio">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
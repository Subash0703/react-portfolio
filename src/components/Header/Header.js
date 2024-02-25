import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ReactTyped } from 'react-typed';
import HeaderParticles from './HeaderParticles';

const Header = () => {
  return (
    <div className='header-wrapper'>
        
        <div className='main-info'>
          <HeaderParticles />
           <h1>Front-End Developer</h1>
            <ReactTyped
              className="typed-text"
              strings={["Digital Alchemist", "Code Artisan", "Innovation Weaver", "Pixel Perfector", "Interface Maestro"]}
              typeSpeed={80}
              backSpeed={90}
              loop >
            </ReactTyped>
            <a href='https://drive.google.com/file/d/1EWexjH1LYclwTXDF_7T-3fYvtxGTnJTw/view?usp=sharing' className='btn-main-offer' value="Subash Resume" download={true}>RESUME
              <FontAwesomeIcon icon={faFile} style={{marginLeft: "10px"}}  />
            </a>
        </div>
    </div>
  )
}

export default Header
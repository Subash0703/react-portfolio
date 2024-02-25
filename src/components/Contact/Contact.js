import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import DevImg from'./dev-img.jpg'

const Contact = () => {
    const name = 'Subash S';
    const phoneNumber = '+91-9047629145';
    const email = 'subashrajan2003@gmail.com';
    const linkedin = 'https://www.linkedin.com/in/subash-s-805626273';
    const github = 'https://github.com/subash7-png';
    const description = 'Web Developer passionate about creating amazing user experiences.';
  return (
    <div className="container contact-page">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="contact-img">
          <img
              className='contact-img1'
              src={DevImg}
              alt='Subash'
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <div className="contact-details">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="contact-info">
              <p>
                <strong>Phone:</strong> {phoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
            </div>
            <div className="social-icons">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />linkedin
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

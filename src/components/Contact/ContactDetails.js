import React from 'react';
import Contact from './Contact';

const ContactDetails = () => {
  const contactInfo = {
    name: 'Subash S',
    phoneNumber: '+91-9047629145',
    email: 'subashrajan2003@gmail.com',
    linkedin: 'https://www.linkedin.com/in/subash-s-805626273',
    github: 'https://github.com/subash7-png',
    description: 'Web Developer passionate about creating amazing user experiences.',
  };

  return (
    <div className="container mt-5">
      <Contact {...contactInfo} />
    </div>
  );
};

export default ContactDetails;

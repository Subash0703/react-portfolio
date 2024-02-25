import React from 'react';
import './about.css';
import DevImg from'./dev-img.jpg'
import { LucideArrowDown } from 'lucide-react';

const About = () => {
  return (
    <section className='container py-5 about-wrapper about-cont'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap'>
            <img
              className='profile-img'
              src={DevImg}
              alt='Subash'
            />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='text-uppercase about-heading text-warning'>about me <LucideArrowDown /></h1>
          <h2 className='text-uppercase  about-heading text-info mt-1 '>Front-End Developer</h2>
          <p className='aboutme'>
          Dedicated and detail-oriented Front-End Developer with a passion for creating visually appealing and 
          intuitive user interfaces. A recent graduate equipped with a solid foundation in HTML5, CSS3, and 
          Javascript, complemented by hands-on experience in crafting responsive and dynamic web applications 
          using Bootstrap and React JS. Possesses a keen eye for design, coupled with a commitment to staying 
          abreast of industry trends and emerging technologies. Eager to contribute to innovative projects, 
          leverage technical skills, and collaborate with cross-functional teams to deliver high-quality user 
          experiences.
          </p>
        </div>
        <div className='col-lg-6 col-xm-12 mb-2 mb-lg-0'>
            <h2 className='text-warning heading '>Name : <span className='text-white aboutme'>Subash S</span></h2>
            <h2 className='text-warning heading '>Educational Qualification : <span className='text-white aboutme'>B.Sc Computer Science(8.175CGPA)</span></h2>
            <h2 className='text-warning heading '>Experience : <span className='text-white aboutme'>Fresher</span></h2>
        </div>
        <div className='col-lg-6 col-xm-12'>
            <h2 className='text-warning heading '>DOB : <span className='text-white aboutme'>07-03-2003</span></h2>
            <h2 className='text-warning heading '>City : <span className='text-white aboutme'>Chennai</span></h2>
        </div>
      </div>
    </section>
  )
}

export default About;
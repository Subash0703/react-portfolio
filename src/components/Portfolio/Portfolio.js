import React from 'react'
import './portfolio.css'
import { FaHtml5 } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FcBusiness } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

const Portfolio = () => {
  return (
    <section className='container py-5 about-wrapper portfolio-cont'>
        <div className='row'>
           <div className='col-lg-6 col-xm-12'>
              <h1 className='heading text-uppercase text-warning title'>Technical Skills <span className='text-info'>
              <MdComputer className='icon-port'/></span> : </h1>
           </div>
           <div className='col-lg-6 col-xm-12 content'>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> HTML5 <span className='text-info'>
                   <FaHtml5  className='icon-port'/></span></h1>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> CSS3 <span className='text-info'>
                   <FaCss3Alt className='icon-port'/></span></h1>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> Javascript <span className='text-info'>
                   <IoLogoJavascript className='icon-port'/></span></h1>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> React JS <span className='text-info'>
                   <RiReactjsLine  className='icon-port'/></span></h1>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> Bootstrap <span className='text-info'>
                   <FaBootstrap  className='icon-port'/></span></h1>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> GitHub <span className='text-info'>
                   <FaGithubSquare  className='icon-port'/></span></h1>
           </div>
           
        </div>
        <div className='row skill-info'>
            <div className='col-lg-6 col-xm-12 content-info'>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> Problem Solving <span className='text-info'>
                   <FaHtml5  className='icon-port'/></span></h1>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> Good Communication <span className='text-info'>
                   <FaComment className='icon-port'/></span></h1>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> Adaptability <span className='text-info'>
                   <FaHtml5  className='icon-port'/></span></h1>
                   <h1 className='heading text-white'><FaAnglesRight size="20px"/> Team Work <span className='text-info'>
                   <RiTeamFill  className='icon-port'/></span></h1>
            </div>
            <div className='col-lg-6 col-xm-12'>
              <h1 className='heading text-uppercase text-warning title'>Soft Skills <span className='text-info'>
              <FcBusiness className='icon-port'/></span> : </h1>
            </div> 
        </div>
    </section>
  )
}

export default Portfolio;
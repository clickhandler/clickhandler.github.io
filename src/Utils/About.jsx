import React from 'react'
import "../Style/About.css"
import { FcCommandLine } from "react-icons/fc";
import { Social } from '../Components/Social';
const About = () => {
  return (
    <div className='about'>
      <div className='about_top'>
        <div className='about_info'> 
        Hello There I am <FcCommandLine/> <br/> <span style={{color:"#c672f4",fontSize:"32px"}}>Ajay Chawariya</span><br/>
        Enthusiastic developer with holistic knowledge of software development. Passionate about implementing new technologies.Able to transform business requirements into technical solutions. looking forward to a great journey in corporates.
        </div>
        <div className='about_pic' >
          <img className='picture' src={require("../assets/Profile-pic.jpg")} alt="profile_image" />
        </div>
      </div>
      <Social/>
    </div>
  )
}

export default About
import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { SiGmail } from "react-icons/si"
import "../styles/home.css"

 const Home = () => {

  return (
    <div className='home'>

      <div className='about'>
        <h2>Hello I'm Saif</h2>
        <div className='prompt'>
        <p>A Software Developer with a passion for learning</p>
        <a href='https://github.com/Saif0319' target="_blank" rel="noopener noreferrer"> <DiGithubBadge /> </a>
        <a href='https://www.linkedin.com/in/sa-if-489b6321a/' target="_blank" rel="noopener noreferrer"> <AiFillLinkedin /> </a>
        <a href='https://www.facebook.com/profile.php?id=100009909900018' target="_blank" rel="noopener noreferrer"> <MdFacebook /> </a>
        <a href='mailto: saif031903@gmail.com' target="_blank" rel="noopener noreferrer"> <SiGmail /> </a>
      </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        
        <ul className='list'>
          <li className='items'>
            <h2>Front End</h2>
            <span>ReactJS - Redux - HTML - CSS - Bootstrap - Styled Components - NPM </span>
          </li>

          <li className='items'>
            <h2>Back End</h2>
            <span>NodeJS - ExpressJS - GraphQL - MongoDB</span>
          </li>

          <li className='items'>
            <h2>Languages</h2>
            <span>JavaScript - Java - Familiarity with Python </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home

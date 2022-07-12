import React from 'react'
import "../styles/footer.css"
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { SiGmail } from "react-icons/si"

 const Footer = () => {

  return (
    <div className="footer">
        <div className="socialMedia">
            <a href='https://github.com/Saif0319' target="_blank" rel="noopener noreferrer"> <DiGithubBadge /> </a>
            <a href='https://www.linkedin.com/in/sa-if-489b6321a/' target="_blank" rel="noopener noreferrer"> <AiFillLinkedin /> </a>
            <a href='https://www.facebook.com/profile.php?id=100009909900018' target="_blank" rel="noopener noreferrer"> <MdFacebook /> </a>
            <a href='mailto: saif031903@gmail.com' target="_blank" rel="noopener noreferrer"> <SiGmail /> </a>
        </div>
        <p>© 2022</p>
    </div>
  )
}

export default Footer
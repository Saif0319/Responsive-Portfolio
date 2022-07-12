import React from 'react'
import { useState , useEffect} from 'react';
import { Link , useLocation} from 'react-router-dom'
import "../styles/navbar.css"
import { GoThreeBars } from "react-icons/go";


 const Navbar = () => {
  const [ExpandNavbar, setExpandNavbar] = useState(false)

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className='navbar' id={ExpandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => setExpandNavbar(!ExpandNavbar)}> 
            <GoThreeBars />
             </button>
        </div>

        <div className='links'>
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>Projetcs</Link>
            <Link to={"/experience"}>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar

import React, {useState} from 'react'
import "./Navbar.css"
import {AiOutlineMenu} from "react-icons/ai"
const Navbar = ({setContact}) => {
    const [show, setShow] = useState(false)
    window.addEventListener("click", (e)=>{
        if (show){
            setShow(false)
        }
    })
    const toggleBar = (e) =>{
        e.stopPropagation()
        setShow(!show)
    }
  return (
    <div className='navbar'>
        <div className="nav-in">
            <div className="nav-show">
                <div className="navbar-left">
                    <h3>Abigail Kumar</h3>
                </div>
                <div className="navbar-center del">
                    <span><a href="#projects">PROJECTS</a></span>
                    <span><a href="">RESUME</a></span>
                </div>
                <div className="navbar-right del">
                    <button onClick={()=> setContact(true)}>Contact</button>
                </div>
                <div className="menubar" onClick={toggleBar}><AiOutlineMenu /></div>
            </div>
            <div className={`drop-down ${show && "show"}`}>
                <span><a href="#projects">PROJECTS</a></span>
                <span><a href="">RESUME</a></span>
                <span className="contact"><button onClick={()=> setContact(true)}>Contact</button></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar

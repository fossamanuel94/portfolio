import React, {useState, useEffect, useContext} from 'react'
import {themeContext} from '../App'
import {Link} from 'react-scroll'
import {CgMenu} from 'react-icons/cg'
import {FiMoon, FiSun} from 'react-icons/fi'


export default function NavBar() {


    const {theme, setTheme} = useContext(themeContext)
    const [buttonState, setButtonState] = useState(false);

    const handleResize = () => {
        if(window.innerWidth >= 1024){
            setButtonState(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <div className="container-navbar">
            <div className="navbar-bar">
            <CgMenu className="menu-burger" onClick={()=> setButtonState(!buttonState)}></CgMenu>
                <ul className="navbar-ul" id={!buttonState ? "" : "hidden"}> 
                    <li className="nav-li">Home</li>
                    <li className="nav-li">Projects</li>
                    <li className="nav-li">Skills</li>
                    <li className="nav-li">Contact</li>
                </ul>
                {
                    theme ? <FiMoon className="theme-icon" onClick={()=>setTheme(!theme)} />
                    : <FiSun className="theme-icon" onClick={()=>setTheme(!theme)} />
                }   
            </div>
        </div>
    )
}

/* <div className="navbar">
        <div className="container-nav">
            <ul className="nav-ul">
                <Link
                    className="nav-li"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                >About</Link>
                <Link
                    className="nav-li"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                >Skills</Link>
                <Link
                    className="nav-li"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                >Projects</Link>
                <Link
                    className="nav-li"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                >Contact</Link>
            </ul>
        </div>
    </div> */

import React from 'react'
import {Link} from 'react-scroll'

export default function NavBar() {
    return (
    <div className="navbar">
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
                {/* <Link to="/"  className="link"> 
                    <li className="nav-li">About</li>
                </Link>
                <Link to="/skills" className="link">
                    <li className="nav-li">Skills</li>
                </Link>
                <Link to="/projects" className="link">
                    <li className="nav-li">Projects</li>
                </Link>
                <Link to="/contact" className="link">
                    <li className="nav-li">Contact</li>
                </Link> */}
            </ul>
        </div>
    </div>
    )
}

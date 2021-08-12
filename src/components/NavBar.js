import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
    <div className="navbar">
        <div className="container-nav">
            <ul className="nav-ul">
                <Link to="/"  className="link"> 
                    <li className="nav-li">Home</li>
                </Link>
                <Link to="/about" className="link">
                    <li className="nav-li">About Me</li>
                </Link>
                <Link to="/skills" className="link">
                    <li className="nav-li">Skills</li>
                </Link>
                <Link to="/projects" className="link">
                    <li className="nav-li">Projects</li>
                </Link>
            </ul>
        </div>
    </div>
    )
}

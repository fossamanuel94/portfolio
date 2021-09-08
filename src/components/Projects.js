import React from 'react'
import portfolio2 from "../images/portfolio2.png"
import technews from "../images/technews.png"

export default function Projects() {

    const Submit = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div className="projects-container" id="projects">
            <div className="projects-title">PROJECTS</div>
            <div className="projects-desc-container">
                <img className="project-img" src={technews} />
                <h1>Tech News</h1>
                <div className="button-container">
                    <button className="project-button" onClick={() => Submit("https://technews24.netlify.app")}>Web</button>
                    <button className="project-button" onClick={() => Submit("https://github.com/fossamanuel94/react-project")}>Front Code</button>
                    <button className="project-button" onClick={() => Submit("https://github.com/fossamanuel94/nodejs-app")}>Back Code</button>
                </div>
            </div>
            <div className="projects-desc-container">
                <img className="project-img" src={portfolio2} />
                <h1>Portfolio</h1>
                <div className="button-container">
                    <button className="project-button" onClick={() => Submit("https://github.com/fossamanuel94/portfolio")}>Code</button>
                </div>
            </div>
        </div>
    )
}


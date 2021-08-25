import React from 'react'

export default function Projects() {
    return (
        <div className="projects-container" id="projects">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-frame">
                <div className="project-card">
                    <img className="project-img" src="https://www.onlineprinters.es/blog/wp-content/uploads/2019/08/image-to-pdf.jpg" alt="..."></img>
                    <h3 className="project-title">Tech-Web</h3>
                    <h5 className="project-desc">Web about the latest tech news. Technologies i used for the project: 
                    React, HTML, CSS, NodeJS, Express, MySQL. Uploaded with Heroku and Netlify</h5>
                    <button className="project-btn">Website</button>
                    <button className="project-btn">GitHub Repo</button>
                </div>
                <div className="project-card">
                    <img className="project-img" src="https://www.onlineprinters.es/blog/wp-content/uploads/2019/08/image-to-pdf.jpg" alt="..."></img>
                    <h3 className="project-title">Tech-Web</h3>
                    <h5 className="project-desc">Web about the latest tech news</h5>
                    <button className="project-btn">Website</button>
                    <button className="project-btn">GitHub Repo</button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import {SkillsList} from '../SkillsList'
import "../App.css"

export default function Skills() {
    return (
        <div className="skills-container" id="skills">
            <div className="skills-title">SKILLS</div>
            <div className="skills-desc-container">
                {SkillsList.map((skill)=>{
                    const {skill_id, skill_img, skill_name} = skill
                    return(
                        <div className="skill" key={skill_id}>
                            {skill_img}
                            <p>{skill_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

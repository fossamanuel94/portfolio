import DevIcon from 'devicon-react-svg'
import {SiGmail} from 'react-icons/si'
import './App.css'

export const SkillsList=[
    {
        skill_id:1,
        skill_img:<DevIcon icon="javascript" className="icon-style"/>,
        skill_name: "JavaScript"
    },
    {
        skill_id:2,
        skill_img:<DevIcon icon="html5" className="icon-style"/>,
        skill_name: "HTML5"
    },
    {
        skill_id:3,
        skill_img:<DevIcon icon="css3" className="icon-style"/>,
        skill_name: "CSS3"
    },
    {
        skill_id:4,
        skill_img:<DevIcon icon="react" className="icon-style"/>,
        skill_name: "ReactJs"
    },
    {
        skill_id:15,
        skill_img:<DevIcon icon="bootstrap" className="icon-style"/>,
        skill_name: "Bootstrap"
    },
    {
        skill_id:6,
        skill_img:<DevIcon icon="nodejs" className="icon-style"/>,
        skill_name: "NodeJs"
    },
    {
        skill_id:7,
        skill_img:<h1 className="skill-express">ex</h1>,
        skill_name: "ExpressJS"
    },
    {
        skill_id:8,
        skill_img:<DevIcon icon="mysql" className="icon-style"/>,
        skill_name: "MySQL"
    },
    {
        skill_id:9,
        skill_img:<DevIcon icon="mongodb" className="icon-style"/>,
        skill_name: "MongoDB"
    },
    {
        skill_id:10,
        skill_img:<DevIcon icon="git" className="icon-style"/>,
        skill_name: "Git"
    },
    {
        skill_id:11,
        skill_img:<DevIcon icon="github" className="icon-style"/>,
        skill_name: "GitHub"
    },
    {
        skill_id:12,
        skill_img:<DevIcon icon="heroku" className="icon-style"/>,
        skill_name: "Heroku"
    }

]

export const ContactIcons=[
    {
        contact_id:1,
        contact_img:<DevIcon icon="github" className="contact-icon-style"/>,
        contact_name: "GitHub Profile",
        contact_link: "https://github.com/fossamanuel94"
    },
    {
        contact_id:2,
        contact_img:<DevIcon icon="linkedin" className="contact-icon-style in"/>,
        contact_name: "LinkedIn Profile",
        contact_link: "https://www.linkedin.com/in/manuel-fossa-a5a2a01bb/"
    },
    {
        contact_id:3,
        contact_img:<SiGmail className="contact-icon-style gmail"/>,
        contact_name: "manuelfossa94@gmail.com",
        contact_link: ""
    }
]


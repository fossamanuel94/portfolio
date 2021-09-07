import React from 'react'
import {ContacIcons, ContactIcons} from '../SkillsList'
import '../App.css'

export default function Contact() {

    const Submit = (url) =>{
        if(url!=="")
        window.open(url, '_blank')
    }

    return (
        <div className="contact-container" id="contact">
            <h1 className="contact-title">CONTACT</h1>
            <div className="contact-list">
                    {
                        ContactIcons.map((icon, index)=>{
                            const {contact_id, contact_img, contact_name, contact_link} = icon;
                            return(
                                <div className="contact-desc-container" key={contact_id}>
                                    <div className="contact-icon">
                                        <div className="contact-img" onClick={()=>Submit(contact_link)}>{contact_img}</div>
                                        <p>{contact_name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

import React from 'react'
import "./Contact.css"
import image from "../../images/abigail.avif"
const Contact = ({contact, setContact}) => {
    console.log(contact)
  return (
    <div className={`contact-section ${contact ? "show" : ""}`}>
      <div className="contact">
        <div className="contact-details">
            <div className="contact-image">
                <img src={image} alt="image" />
            </div>
            <div className="contact-info">
                <h4>Abigail Kumar</h4>
                <p>Designer</p>
                <p>Videographer</p>
                <p>Storyteller</p>
            </div>
        </div>
        <div className="contact-bottom">
            <a href="mailto:user@gmail.com?subject=Hey there!">Email</a>
            <a href="www.facebook.com">Facebook</a>
            <a href="www.intagram.com">Instagram</a>
        </div>
        <div className="close" onClick={()=> setContact(false)}>
            close
        </div>
      </div>
    </div>
  )
}

export default Contact

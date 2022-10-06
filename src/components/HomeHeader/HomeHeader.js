import React from 'react'
import "./HomeHeader.css"
import image from "../../images/abigail.avif"
import video from "../../videos/v1.mp4"
const HomeHeader = () => {
  return (
    <div className='home-header'>
      <div className="bg-video">
        <video autoPlay loop muted src={video}></video>
      </div>
      <div className="bg-header"></div>
      <div className="header">
        <div className="header-image">
          <img src={image} alt="image" />
        </div>
        <div className="header-text">
          <h1>Hey, I'm Abigail</h1>
          <p>I'm a multi-disciplinary designer, videographer, and storyteller.<br />Scroll down to see the world through my eyes.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader

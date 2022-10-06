import React from 'react'
import "./Featured.css"
import image from "../../images/f1.jpeg"
import CaseStudy from '../Case study/CaseStudy'
const Featured = () => {
  return (
    <div className='featured'>
      <h2>Featured Case Study</h2>
      <CaseStudy isCase={true} image={image} title="UI/UX, PRODUCT DESIGN" header="Building an AI Conversation Design Tool" desc="We created a tool that allows recruiter admins to give conversational guidelines to an artificial intelligence that talks to job candidates" author="Mya Systems" />
    </div>
  )
}

export default Featured

import React, {useRef} from 'react'
import "./CaseStudy.css"
import { motion } from 'framer-motion'
const CaseStudy = ({image, title, author, header, desc, isCase}) => {
  const element = useRef(null)
  const containerMove = (e) =>{
    let x = (window.innerWidth / 2 - e.clientX) / 50;
    let y = (window.innerHeight / 2 - e.clientY) / 50;
    element.current.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  }
  const containerOut = () =>{
    element.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }
  return (
    <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className={`case-study ${isCase ? "case" : "not-case"}`}>
        <div onMouseMove={containerMove} onMouseOut={containerOut} ref={element} className={`case-study-image ${isCase ? "display" : ""}`}>
            <img src={image} alt="featured" />
        </div>
        <div className="case-study-text">
            <p className='title'>{title}</p>
            <h3 className='header'>{header}</h3>
            <p className='desc'>{desc}</p>
            <p className='author'>{author}</p>
        </div>
    </motion.div>
  )
}

export default CaseStudy

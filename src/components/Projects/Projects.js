import React, {useState} from 'react'
import "./Projects.css"
import data from '../../data'
import CaseStudy from '../Case study/CaseStudy'
import { AnimatePresence, motion } from 'framer-motion'
const Projects = () => {
    const [filteredData, setFilteredData] = useState(data)
    let dataTags = data.map((item) =>{
        return item.tag
    })
    dataTags = ["all", ...new Set(dataTags)]
    const filterItems = (category) =>{
    if (category === "all"){
      return setFilteredData(data)
    }
    const newItems = data.filter((item)=> item.tag === category)
    setFilteredData(newItems)
  }
  return (
    <div className='projects'>
      <div className="projects-head">
        <h2>Selected Projects</h2>
        <p>These are a few of my favorite things</p>
            <div className="tag-buttons">
                <div className="buttons">
                    {dataTags.map((tag, i) =>{
                        return <button onClick={()=> filterItems(tag)} key={i} className='tag'>{tag}</button>
                    })}
                </div>
            </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className="projects-display">
            {filteredData.map((item) =>{
                const {id} = item
                return <CaseStudy key={id} {...item} isCase={false} />
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Projects

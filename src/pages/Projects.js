import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/projects.css"
import { ProjectList } from "../helpers/ProjectList"

 const Projects = () => {

  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>

      <div className='projectList'>
        {ProjectList.map((project, id) => {
            return (<ProjectItem name={project.name} image={project.image} key={id} id={id} />)
        })}
      </div>
      
    </div>
  )
}

export default Projects

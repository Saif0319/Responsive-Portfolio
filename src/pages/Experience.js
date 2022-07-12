import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import "../styles/experience.css"
import {IoMdSchool} from "react-icons/io"


 const Experience = () => {

  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#066531'>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2022' 
        icon={<IoMdSchool />}
        iconStyle={{background:"#066531", color:"#fff"}} >
          
        <h3 className='vertical-timeline-element-title'>High School</h3>
        <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022-' 
        icon={<IoMdSchool />}
        iconStyle={{background:"#066531", color:"#fff"}} >
          
        <h3 className='vertical-timeline-element-title'>Georgian College (Barrie, Ontario)</h3>
        <p>Diploma in Computer Programming</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience

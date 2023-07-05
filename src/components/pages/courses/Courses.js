import React from 'react'
import './courses.css'
import AI from '../../../assets/ai.png'
import ST from '../../../assets/sd.png'
import DG from '../../../assets/dg.png'
import Hacker from '../../../assets/hacking.png'


function Courses() {
const courseData=[
    {
        title:"AI DEVELOPMENT",
        desc:"Master AI Development",
        img: AI,
    },
    {
        title:"DIGITAL MARKETING",
        desc:"Master Digital Marketing",
        img: DG,
    },
    {
        title:"CYBER SECURITY",
        desc:"Master Cyber Security",
        img: Hacker,
    },    
    {
        title:"Software DEVELOPMENT",
        desc:"Master Software Development",
        img: ST,
    },
]

  return ( 
   <div className="container course-container">
    <div className="course-top">
<h2 className='section_title'>
    Our Free Courses
</h2>
<p>The Top Trending Courses With Free Certificates</p>
   </div>
   <div className="course-wrapper">
    

        {courseData.map((set,index)=>(
<div className="course-item" key={index}>
<span className='course-icon'><img src={set.img} alt="" /></span>
<div className="course-content">
    <h4>{set.title}</h4>
    <p>{set.desc}</p>
</div>   </div>

        ))}
     
 

   </div>


   </div>
  )
}

export default Courses
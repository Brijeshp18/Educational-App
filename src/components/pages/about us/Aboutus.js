import React from 'react'
import './aboutus.css'
import mk from '../../../assets/miya.jpg'
function Aboutus() {
  return (
    <div className="container">
     <div className="about-us-container">
       <div className="team-members">
        <h2>Our Team</h2>
        <div className="member-card">
            <div className="imagecard"><img src={mk} alt="musk" /></div>

<h3 className='member-name'><a href="https://en.wikipedia.org/wiki/Elon_Musk
" target="_blank">Miya Helensky</a></h3>
<p className='member-role'>Co-Founder</p>
        </div>
       </div>

       <div className="about-us-description">
        <h1 className='about-us-heading'>About Us</h1>
        <p>With a passion for empowering learners of all ages,our mission is to make education accesible,engaging,and personalized through our cutting-edge educational technology platform.</p>
       </div>






     </div>



    </div>
  )
}

export default Aboutus
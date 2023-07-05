import React from 'react'
import './home.css'
import meta from '../../assets/meta.jpeg'
import { AiOutlineWhatsApp } from "react-icons/ai";
import Courses from './courses/Courses';
import Community from './community/community'
import Plans from './plans/Plans';

function Home() {
    const handleClick =()=>{
        window.open("https://www.google.com","_blank")
    }
  return (
    <>
  <section>
<div className="container">
<div className="home-container">
<div className="home-content">
<h2 className='section_title'>Learn Everything For Free</h2>
<p>Master Trending Technologies With Techlix AI,Invest Your Time and Return skills</p>
<div className="home-buttons">
  <button className='register-btn' onClick={handleClick}>Get Started</button>
  <button className='register-btn'onClick={handleClick}> Watch Now</button>  
</div>
</div>
<div className="home-image">
    <div className="home-imagewrapper">
        <div className="box">
<div className="box-img">
<img src={meta} alt="" />
</div>
        </div>
        <div className="whatsapp">
            <h5>500 + students</h5> < AiOutlineWhatsApp color='green' />
        </div>
<div className="support">
    <h5>Active Support</h5>
</div>
    </div>


</div>




</div>





</div>


  </section>
  <Courses/>
  <Community/>
  <Plans/>
  </>
  )
}

export default Home

import React from 'react'
import './support.css'
import { AiOutlineWhatsApp,AiFillFacebook,AiFillLinkedin  } from 'react-icons/ai'
function Support() {
  return (
   <div className="container">
    <div className="support-container">
        <h1>Support Us</h1>
        <p>If You Have Any Questions or need assistance,feel free to reach out to our support team.We are here to help !!</p>
        <div className="socialicons">
        <p><a href="https://whatsapp.com"target="_blank"><AiOutlineWhatsApp color='green' size='50px'/></a></p>
        <p><AiFillFacebook color='blue' size='50px'/></p>
        <p><AiFillLinkedin color='skyblue' size='50px'/></p>
            </div>
    </div>
   </div>
  )
}

export default Support
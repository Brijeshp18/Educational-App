import React from 'react'
import './footer.css'
import footer from '../../assets/footer.png'
import { Link } from 'react-router-dom'
function Footer() {
   const handlebarUp=()=>{
    window.scrollTo(0,0);  //page melott scroll ayi varan..
   }
  return (
   <footer className='footer'>
<div className="container">
<div className="footer_wrapper">
<div className="footer_box">
   <div className="logo">
   <div className="logo-image">
     <img src={footer} alt="" />
   </div>
   <h2>LEARN FREE</h2>

    </div>
    <p>Embrace the future of innovation and technology with our cutting-edge tech business solutions.</p>    
</div>
<div className="footer_box">
    <h4 className='footer_title'>Company</h4>
    <ul className='footer_links'>
<li><Link to="/courses"  onClick={handlebarUp}>Our Programmes</Link></li>
<li><Link  to='/services'  onClick={handlebarUp}>Become a Member</Link></li>
    </ul>

</div>
<div className="footer_box">
    <h4  className='footer_title'>Ouick Links</h4>
    <ul  className='footer_links'>
        <li><Link to="/aboutus" onClick={handlebarUp}>About Us</Link></li>
        <li><Link to="/contact" onClick={handlebarUp}>Contact us</Link></li>
        <li><Link to="/support" onClick={handlebarUp}>Support</Link> </li>
    </ul>

</div>



</div>




</div>


   </footer>
  )
}

export default Footer
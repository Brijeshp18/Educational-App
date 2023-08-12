import React from 'react'
import Logo from '../../assets/logo.png'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {

const nav_titles =[
    {path:'/',display:"Home" },
    {path:'/services',display:"Services" },
    {path:'/courses',display:"Courses" },
    {path:'/aboutus',display:"About Us" },
]



  return (
   <header className='header'>
    <div className='container'>
     <div className='nav_container'>
      <div className='logo'>
        <div className='logo-image'>
        
        </div>
        <Link to='/'><h2>LEARN FREE </h2></Link>
      </div>
     
     <div className='navigation'>
       <ul className='menu'>
        { nav_titles.map((item)=>( <li className='nav_item'><Link to={item.path}>{item.display}</Link></li>)) }
       

       </ul>
      </div>
      </div>
      
 



     </div>

     

   



   </header>
  )
}

export default Header
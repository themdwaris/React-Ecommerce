import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GotoTop from './GotoTop'

const Footer = () => {
  const year = new Date().getFullYear()
  const [text,setText] = useState()
  const goTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
    <div className='footerContainer '>
      <div className='subs'>
        <div className='substext'>
        <h2>Ready to get started ? <br></br><span className='talk'>Talk to us today</span></h2>
        </div>
        <form className='subsform'>
          <div action='#' method='POST' className='input form'><input type='email' placeholder='Type Mail' required value={text} onChange={(e)=>setText(e.target.value)}/>
          
          </div>
          <div className='btn form'><button onClick={()=>{
            alert(text)
            setText('')
          }}><ion-icon name="send-outline"></ion-icon></button></div>
        </form>
      </div>

      <div className='footermenu'>
        <div className='logo'><NavLink to='/' onClick={goTo}><h2> vite<span>.</span></h2></NavLink></div>
        <div className='menubox'>
          <ul className='ul'>
            <li className='headtitle'>GET CONNECTED</li>
            <li><a href='#'>Connectvity</a></li>
            <li><a href='#'>Dashboard</a></li>
            <li><a href='#'>lot SIM Card</a></li>
            <li><a href='#'>Hologram Hyper</a></li>
            <li><a href='#'>Hologram Nova</a></li>
          </ul>
          <ul className='ul'>
            <li className='headtitle'>RESOURCES</li>
            <li><a href='#'>Connectvity</a></li>
            <li><a href='#'>Dashboard</a></li>
            <li><a href='#'>lot SIM Card</a></li>
            <li><a href='#'>Hologram Hyper</a></li>
            <li><a href='#'>Hologram Nova</a></li>
          </ul>
          <ul className='ul'>
            <li className='headtitle'>PRICING</li>
            <li><a href='#'>Connectvity</a></li>
            <li><a href='#'>Dashboard</a></li>
            <li><a href='#'>lot SIM Card</a></li>
            <li><a href='#'>Hologram Hyper</a></li>
            <li><a href='#'>Hologram Nova</a></li>
          </ul>
          <ul className='ul'>
            <li className='headtitle'>DEVELOPERS</li>
            <li><a href='#'>Connectvity</a></li>
            <li><a href='#'>Dashboard</a></li>
            <li><a href='#'>lot SIM Card</a></li>
            <li><a href='#'>Hologram Hyper</a></li>
            <li><a href='#'>Hologram Nova</a></li>
          </ul>
          <ul className='ul'>
            <li className='headtitle'>SOCIAL PLATFORM</li>
            <div className='sociallinks'>
            <li><a href='#'><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href='#'><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href='#'><ion-icon name="logo-youtube"></ion-icon></a></li>
            <li><a href='#'><ion-icon name="logo-instagram"></ion-icon></a></li>
            </div>
          </ul>

        </div>
      </div>
    </div>
    <GotoTop/>
    <div className='copyright lr-pad'><p>Copyright © {year} vite. <NavLink to='/contact' onClick={goTo}>Contact</NavLink></p></div>
  </>
  )
}

export default Footer
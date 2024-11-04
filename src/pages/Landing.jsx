import React from 'react'
import "./pagesCss/landing.css"
import Header from '../component/header/Header'
import { LuDownload } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { IoLogoYoutube } from "react-icons/io5";

const Landing = () => {
  const toYouTube = () => {
    window.open("https://www.youtube.com/watch?v=MsOaC61cR3U&pp=ygUedGhlIHN0b3J5IG9mIHBpLWNyeXB0b2N1cnJlbmN5", '_blank');
}


  const nav = useNavigate()
  
  return (
    <>
        <div className='landing_body'>
          <Header/>
          <div className='hero_body'>
            <div className='hero_left_container'>
              <h1>The First Digital Currency You Can Mine on Your Phone</h1>
              <p>Start mining Pi cryptocurrency today with our free energy-light mobile app!</p>
              <button className='hero_btn' onClick={()=>nav("validate")}>
                <p>VALIDATE WALLET</p>
                <LuDownload/>
              </button>
            </div>
            <div className='hero_right_container' onClick={toYouTube}>
              <IoLogoYoutube className='youtube'/>
              {/* <img src="https://i.ytimg.com/vi/MsOaC61cR3U/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDljOJ5QN6suNs8vIaUImsqfRgjWA" alt=''/> */}
            </div>
          </div>
        </div>
    </>
  )
}

export default Landing

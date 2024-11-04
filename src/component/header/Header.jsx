import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
// import { LuSearch } from "react-icons/lu";
// import { HiMenuAlt2 } from "react-icons/hi";
import pilogo from "../../assets/pi-logo.png"

const Header = () => {
  return (
    <>
        <div className='header_body'>
            <div className='header_logo_container'>
                <img src={pilogo} alt='logo'/>
            </div>
            <div className='header_link_container'>
                <NavLink to="validate" className="header_link">Validate Wallet</NavLink>
                {/* <div className='header_search_icon'>
                    <p>Search</p>
                    <LuSearch/>
                </div> */}
                {/* <div className="header_menu_icon">
                    <HiMenuAlt2/>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Header

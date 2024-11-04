import React from 'react'
import "./pagesCss/home.css"
import hometoplogo from "../assets/home_top_logo.png"
import homebodylogo from "../assets/home_body_logo.png"
import { AiFillFire } from "react-icons/ai";
import { BiSolidMessageAltDots } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { TbBulb } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import group12 from "../assets/Group 12.png"
import group15 from "../assets/Group 15.png"
import group13 from "../assets/Group 13.png"
import group14 from "../assets/Group 14.png"

const Home = () => {
  const nav = useNavigate()

  return (
    <>
      <div className='home_body'>
        <div className='home_top'>
          <p>Home</p>
          <div className='home_top_logo'>
            <img src={hometoplogo} alt=''/>
          </div>
        </div>
        <div className='home_body_logo_container'>
          <div className='home_body_logo'>
            <img src={homebodylogo} alt=''/>
          </div>
          <p>Welcome to the <span>PI</span> browser</p>
        </div>
        <div className='home_icon_links_container'>
          <div className='home_icon_links' onClick={()=>nav("/unlock-pi-wallet")}>
            <div className='home_icon_link_top'>
              <AiFillFire color='purple' className='home_icon_size'/>
              <BiSolidMessageAltDots size={18} color='#fff' style={{ position: 'absolute', top: '50%', right: '40%' }}/>
            </div>
            <p>FireSide</p>
          </div>
          <div className='home_icon_links' onClick={()=>nav("/unlock-pi-wallet")}>
            <div className='home_icon_link_top'>
              <CiWallet color='purple' className='home_icon_size'/>
            </div>
            <p>Wallet</p>
          </div>
          <div className='home_icon_links' onClick={()=>nav("/unlock-pi-wallet")}>
            <div className='home_icon_link_top'>
              <TbBulb color='purple' className='home_icon_size'/>
            </div>
            <p>Brainstorm</p>
          </div>
          <div className='home_icon_links' onClick={()=>nav("/unlock-pi-wallet")}>
            <div className='home_icon_link_top'>
              <img src={group12} alt='' className='home_icon'/>
            </div>
            <p>Mine</p>
          </div>
          <div className='home_icon_links' onClick={()=>nav("/unlock-pi-wallet")}>
            <div className='home_icon_link_top'>
              <img src={group15} alt='' className='block_chain_icon'/>
            </div>
            <p>Blockchain</p>
          </div>
          <div className='home_icon_links' onClick={()=>nav("/unlock-pi-wallet")}>
            <div className='home_icon_link_top'>
              <RiComputerLine color='purple' className='home_icon_size'/>
            </div>
            <p>Develop</p>
          </div>
          <div className='home_icon_links' onClick={()=>nav("/unlock-pi-wallet")}>
            <div className='home_icon_link_top'>
              <img src={group13} alt='' className='home_icon'/>
            </div>
            <p>KYC</p>
          </div>
          <div className='home_icon_links' onClick={()=>nav("/unlock-pi-wallet")}>
            <div className='home_icon_link_top'>
              <img src={group14} alt='' className='home_icon'/>
            </div>
            <p>Chat</p>
          </div>
          <div className='home_icon_links' onClick={()=>nav("/unlock-pi-wallet")}>
            <div className='home_icon_link_top'>
              <VscAccount color='purple' className='home_icon_size'/>
            </div>
            <p>Profiles</p>
          </div>
        </div>
        <div className='home_btn_container'>
          <button className='home_btn'>Explore the Testnet Ecosystem</button>
        </div>
      </div>
    </>
  )
}

export default Home

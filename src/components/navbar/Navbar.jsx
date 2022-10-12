import React, { useState } from 'react'
import './navbar.css'
import deneme from '../../assets/logo.svg'


const Navbar = () => {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className='navbar'>
      <div className="navbar__logo">
        <img src={deneme} alt="logo" />
      </div>

      <div className='navbar__menu scale-up-center' style={{display: isActive ? 'none' : 'flex'}}>
        <div className="navbar__menu-part1">
          <a href="#">Home</a>
          <a href="#">What is GPT3</a>
          <a href="#">Open AI</a>
          <a href="#">Case Studies</a>
          <a href="#">Library</a>
        </div>
        <div className="navbar__menu-part2">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>

      

      <div className='navbar_menu-icon'>
      <div className="navbar__menu-part2_desktop navbar__menu-part2">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
        <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="50"  className={isActive ? "ham hamRotate ham1" : "ham hamRotate ham1 active"}onClick={handleToggle}>
          <path
            class="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
          <path
            class="line middle"
            d="m 30,50 h 40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>
      </div>

    </div>
  )
}

export default Navbar
import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import Furkan from '../../assets/furkan.png'
const Header = () => {
  return (
    <div className='header'>
      <div className="header__part1">
        <div>
          <h1>Let's Build Something Amazing with GPT-3 OpenAI</h1>
        </div>
        <div>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <div className='header__part1-input'>
          <input type="text" placeholder='Your Email Address' />
          <button>Get Started</button>
        </div>
        <div className="header__part1-people">
          <div>
            <img src={people} alt="" />
          </div>
          <div className='header__part1-people_p'>
            <p>1,600 people requested access in last the 24 hours</p>
          </div>
        </div>
      </div>

      <div className="header__part2 rotate-center">
        <img src={Furkan} alt="" />
      </div>
    </div>
  )
}

export default Header
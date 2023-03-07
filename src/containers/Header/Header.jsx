import React from 'react'
import './Header.css'
import people from'../../assets/people.png'
import ai from'../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className='gpt3__header-contnet'>
        <h1 className='gradient__text'>
          Let's Build Next Gen Tools with GPT-3 by OpenAI
        </h1>

        <p className="gpt3__header-description">
          By the end of this decade, Web3, AI, & AR will 
          a significant part of our daily lives. From commerce
          to entertainment, in restaurants and clinics. Get ahead
          of the curve by getting comfortable with GPT3 and its
          unique value proposition to your life.
        </p>

        <div className='gpt3__haeader-content__input'>
          <input type="email" placeholder="Your Email Address"/>
          <button type="button"> Get Started </button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people in icons"/>
          <p> 1600 people requested access in the last 24 hours</p>
        </div>

        <div className='gpt3__header-image'>
          <img src={ai} alt="ai"/>

        </div>


      </div>
    </div>
  )
}

export default Header

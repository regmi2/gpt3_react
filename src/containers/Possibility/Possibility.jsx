import React from 'react'
import './Possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>

      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="VR wearing woman exploring possibilities" />
      </div>

      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'> The possibilities are Beyond Our Imagination </h1>
        <p> In the coming future, we could see GPT-3 implemented with VR and AR to launch us into a new era of tech possibilities.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility

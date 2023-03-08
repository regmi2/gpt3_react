import React from 'react'
import { Feature } from '../../components'
import './Features.css'

const featuresData = [
  {
    title: 'Generate Valuable Content Instantly',
    text: 'How can you leverage GPT-3 to create value for your community? The right question can return priceless value.'
  },
  {
    title: 'Extend your Mind Beyond your Brain',
    text: 'The chatbot allows you to save your previous chats and follow up at a later time. Reference those fresh ideas without losing the initial context.'
  },
  {
    title: 'Incorporate it Into Your Apps',
    text: "You can use GPT-3's API to turn your app into a GPT-3 powered search engine. What experiences could you craft through this?."
  },
  {
    title: 'Explore Unique Voices',
    text: 'In creating your value, you can ask GPT-3 to share information in a certain tone or voice giving you endless room for creative value communication.'
  }
]

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now.
          Step into the World of AI & Build Your Future</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature 
        title={item.title} 
        text={item.text} 
        key={item.title + index} 
        />
      ))}
    </div>
  </div>
)



export default Features

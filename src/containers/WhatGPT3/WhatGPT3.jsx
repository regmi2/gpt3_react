import React from 'react'
import { Feature } from '../../components'
import './WhatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature 
          title="What is GPT-3" 
          text="GPT-3 (Generative Pre-trained Transformer 3) is a neural network machine learning model. 
          It consumed vast swaths of internet data to understand how to generate all types of text. A small input
          text as a prompt can return a large volume of relevant and sophisticated machine-generated text
          for your personal or business use. It was developed by a US company called OpenAI." />
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library </p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature 
          title="Chatbots"
          text="Anyone can use the chatbot by signing up for an account on chat.openai.com.
          From there, type a prompt to get started. "
        />

        <Feature
          title="Knowledgebase"
          text="Using data from the internet, GPT-3 can bring together disparate and relevant
          information in a matter of seconds with a sufficiently specific prompt.
          "/>

        <Feature 
          title="Education"
          text="GPT-3 has the potential to transform the way we learn and retrieve knowledge.
          Students around the world are already making the most out of it."
                />
      </div>
    </div>
  )
}

export default WhatGPT3

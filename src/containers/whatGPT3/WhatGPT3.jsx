import React from 'react';
import { Feature } from '../../components';
import './whatGPT.css';

const WhatGPT3 = () => {
    return(
        <div className='section__margin gpt3__whatgpt3' id='wgpt3' style={{marginTop : 0}}>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="What is GPT-3" text="GPT-3 (Generative Pre-trained Transformer 3) is a language model developed by OpenAI. It is the third iteration of the GPT series of models. It has over 175 billion parameters, making it one of the largest language models"/>
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                The possibilities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Chatbots" text="Chatbots are designed to simulate human-like conversations and provide helpful responses to users."/>
                <Feature title="Knowledgebase" text=" GPT models are pre-trained on large amounts of text data to learn the patterns and structure of natural language. This allows them to generate coherent and meaningful text."/>
                <Feature title="Education" text="Provides individualized learning experiences to students by understanding their learning needs and preferences. It can generate customized study material, exercises, and quizzes based on the student's learning style and performance."/>
                
            </div>
        </div>
    )
}

export default WhatGPT3;
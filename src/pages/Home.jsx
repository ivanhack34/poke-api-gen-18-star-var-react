import React from 'react'
import FomrHome from '../components/home/FomrHome'
import './style/home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="/images/home/pokedex.png" alt="" />
      <header className='pokedex__header'>
        <h2 className='pokedex__subtitle'>Hi Trainer!</h2>
        <p className='pokedex__text'>Give me your name to see the pokedex</p>
      </header>
      <FomrHome/>
    </article>
  )
}

export default Home
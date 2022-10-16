import React from 'react'
import FomrHome from '../components/home/FomrHome'

const Home = () => {
  return (
    <article className='pokedex'>
      <h1 className='pokedex__title'>Pokedex</h1>
      <h2 className='pokedex__subtitle'>Hi Trainer!</h2>
      <p className='pokedex__text'>Give me your to see the pokedex</p>
      <FomrHome/>
    </article>
  )
}

export default Home
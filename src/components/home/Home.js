import React from 'react'
import './Home.css'
import SearchForm from '../globals/SearchForm'
import Logo from '../globals/Logo'

function Home() {
  return (
    <div className="home-container">
      <Logo />
      <SearchForm />
    </div>
  )
}

export default Home

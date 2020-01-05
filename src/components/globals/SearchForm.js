import React, { useState } from 'react'
import './SearchForm.css'
import SearchIcon from '../../assets/icons/search.svg'
import { useHistory, useParams } from 'react-router-dom'

function Home() {
  let history = useHistory()

  const { user } = useParams()

  const [search, setSearch] = useState(user)

  const handleSubmit = (event) => {
    event.preventDefault()
    history.push(`/` + search)
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="field"
        value={search}
        name="search"
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <button className="submit">
        <img className="icon" src={SearchIcon} alt="Search icon" />
      </button>
    </form>
  )
}

export default Home

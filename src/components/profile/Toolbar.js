import React from 'react'
import './Toolbar.css'
import Logo from '../globals/Logo'
import SearchForm from '../globals/SearchForm'

function Toolbar() {
  return (
    <div className="toolbar-container">
      <Logo small></Logo>
      <SearchForm small />
    </div>
  )
}

export default Toolbar

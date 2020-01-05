import React from 'react'
import './Logo.css'

function Logo(props) {
  let classes = 'title font-anonymous'
  classes += props.small ? ' fs-40' : ' fs-60'
  return (
    <div className="logo-container">
      <h1 className={classes}>
        <strong>Github</strong>
        <i className="font-raleway-extra-light">Search</i>
      </h1>
    </div>
  )
}

export default Logo

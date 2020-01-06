import React from 'react'
import './Repositories.css'
import starIcon from '../../assets/icons/star icon.svg'

function Repositories({ repositories }) {
  console.log(repositories)
  return (
    <div className="repositories-container">
      {repositories.map((el, i) => {
        return (
          <div key={i} className="repository">
            <h2 className="name font-raleway-regular">{el.name}</h2>
            <h3 className="description">{el.description || '-'}</h3>
            <div className="starts">
              <img src={starIcon} alt="Stars" />
              <p className="count">{el.stargazers.totalCount}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Repositories

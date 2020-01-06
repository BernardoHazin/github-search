import React from 'react'
import './Avatar.css'
import followersIcon from '../../assets/icons/followers icon.svg'
import locationIcon from '../../assets/icons/location icon.svg'
import organizationIcon from '../../assets/icons/organization icon.svg'
import repositoriesIcon from '../../assets/icons/repositorie icon.svg'
import starIcon from '../../assets/icons/star icon.svg'

function Avatar(props) {
  return (
    <div className="avatar-container">
      <img
        className="profile-image"
        src={props.user.avatarUrl}
        alt="Profile avatar"
      />
      <h2 className="name">{props.user.name}</h2>
      <h2 className="email">{props.user.email}</h2>
      <p className="bio">{props.user.bio}</p>
      <div className="info" title="Company">
        <img src={organizationIcon} alt="Company" className="icon" />
        <p className="description">{props.user.company || '-'}</p>
      </div>
      <div className="info" title="Location">
        <img src={locationIcon} alt="Location" className="icon" />
        <p className="description">{props.user.location || '-'}</p>
      </div>
      <div className="info" title="Starred Repositories">
        <img src={starIcon} alt="Starred Repositories" className="icon" />
        <p className="description">{props.user.starred || '-'}</p>
      </div>
      <div className="info" title="Repositories">
        <img src={repositoriesIcon} alt="Repositories" className="icon" />
        <p className="description">{props.user.repositories || '-'}</p>
      </div>
      <div className="info" title="Followers">
        <img src={followersIcon} alt="Followers" className="icon" />
        <p className="description">{props.user.followers || '-'}</p>
      </div>
    </div>
  )
}

export default Avatar

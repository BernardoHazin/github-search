import React from 'react'
import './Profile.css'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import Loading from './Loading'
import Avatar from './Avatar'
import Repositories from './Repositories'

const FETCH_USER = (user) => gql`
query {
  user(login: "${user}") {
    name
    email
    bio
    company
    location
    starredRepositories {
      totalCount
    }
    repositories(first: 5, orderBy: {direction: DESC, field: STARGAZERS}) {
      totalCount
      nodes {
        name
        description
        stargazers {
          totalCount
        }
      }
    }
    followers {
      totalCount
    }
    following {
      totalCount
    }
    avatarUrl
  } 
}
`

function Profile() {
  const { user } = useParams()

  const { loading, error, data } = useQuery(FETCH_USER(user))

  if (loading) return <Loading />

  if (error) {
    console.log()
    return error.graphQLErrors &&
      error.graphQLErrors.map(({ type }) => type).includes('NOT_FOUND') ? (
      <NotFound />
    ) : (
      <p>Error :(</p>
    )
  }

  if (!data.user) return <NotFound />

  console.log(data.user)

  const userData = {
    name: data.user.name,
    bio: data.user.bio,
    email: data.user.email,
    company: data.user.company,
    location: data.user.location,
    avatarUrl: data.user.avatarUrl,
    followers: data.user.followers.totalCount,
    starred: data.user.starredRepositories.totalCount,
    repositories: data.user.repositories.totalCount
  }

  return (
    <div className="profile-container">
      <Avatar user={userData} className="avatar" />
      <Repositories
        repositories={data.user.repositories.nodes}
        className="repositories"
      />
    </div>
  )
}

export default Profile

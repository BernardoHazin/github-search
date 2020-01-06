import { MockedProvider } from '@apollo/react-testing'
import QUERY from '../Queries/user'
import Profile from '../components/profile/Profile'
import renderer from 'react-test-renderer'
import React from 'react'

let ExistentUser = 'some user'
let notFoundUser = 'not found user'

const mocks = [
  {
    request: {
      query: QUERY(ExistentUser)
    },
    result: {
      data: {
        user: {
          name: 'User',
          email: 'user@email.com',
          company: 'Some Company',
          bio: 'My awesome bio',
          followers: {
            totalCount: 5
          },
          following: {
            totalCount: 5
          },
          location: 'Some location',
          starredRepositories: {
            totalCount: 10
          },
          repositories: {
            totalCount: 10,
            nodes: [
              {
                name: 'My Repo',
                description: 'A repo i own',
                stargazers: { totalCount: 100000 }
              }
            ]
          }
        }
      }
    }
  },
  {
    request: {
      query: QUERY(notFoundUser)
    },
    error: new Error('NOT FOUND')
  }
]

it('renders without error', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Profile />
    </MockedProvider>
  )

  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

import { Link, routes } from '@redwoodjs/router'

import Profiles from 'src/components/Profiles'

export const QUERY = gql`
  query PROFILES {
    profiles {
      id
      name
      username
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No profiles yet. '}
      <Link to={routes.newProfile()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ profiles }) => {
  return <Profiles profiles={profiles} />
}

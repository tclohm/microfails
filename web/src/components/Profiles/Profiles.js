import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_PROFILE_MUTATION = gql`
  mutation DeleteProfileMutation($id: Int!) {
    deleteProfile(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ProfilesList = ({ profiles }) => {
  const { addMessage } = useFlash()
  const [deleteProfile] = useMutation(DELETE_PROFILE_MUTATION, {
    onCompleted: () => {
      addMessage('Profile deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete profile ' + id + '?')) {
      deleteProfile({ variables: { id }, refetchQueries: ['PROFILES'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{truncate(profile.id)}</td>
              <td>{truncate(profile.name)}</td>
              <td>{truncate(profile.username)}</td>
              <td>{truncate(profile.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.profile({ id: profile.id })}
                    title={'Show profile ' + profile.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProfile({ id: profile.id })}
                    title={'Edit profile ' + profile.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete profile ' + profile.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(profile.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfilesList

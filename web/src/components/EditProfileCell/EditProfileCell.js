import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ProfileForm from 'src/components/ProfileForm'

export const QUERY = gql`
  query FIND_PROFILE_BY_ID($id: Int!) {
    profile: profile(id: $id) {
      id
      name
      username
      userId
    }
  }
`
const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfileMutation($id: Int!, $input: UpdateProfileInput!) {
    updateProfile(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ profile }) => {
  const { addMessage } = useFlash()
  const [updateProfile, { loading, error }] = useMutation(
    UPDATE_PROFILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.profiles())
        addMessage('Profile updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    updateProfile({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Profile {profile.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProfileForm
          profile={profile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}

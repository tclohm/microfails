import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ProfileForm from 'src/components/ProfileForm'

const CREATE_PROFILE_MUTATION = gql`
  mutation CreateProfileMutation($input: CreateProfileInput!) {
    createProfile(input: $input) {
      id
    }
  }
`

const NewProfile = () => {
  const { addMessage } = useFlash()
  const [createProfile, { loading, error }] = useMutation(
    CREATE_PROFILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.profiles())
        addMessage('Profile created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    createProfile({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Profile</h2>
      </header>
      <div className="rw-segment-main">
        <ProfileForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProfile

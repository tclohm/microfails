import { Link, routes } from '@redwoodjs/router'
import AuthenticationLayout from 'src/layouts/AuthenticationLayout'

const SigninPage = () => {
  return (
    <AuthenticationLayout>
      <div>
        <div>
          <p>Not a member? <Link to={routes.signup()}>Sign up now</Link></p>
        </div>
      </div>
      <div>
        <div>
          <h3>Sign in to Microfails</h3>
          <button>Sign In</button>
        </div>
      </div>
    </AuthenticationLayout>
  )
}

export default SigninPage

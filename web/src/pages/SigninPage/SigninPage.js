import { Link, routes } from '@redwoodjs/router'
import AuthenticationLayout from 'src/layouts/AuthenticationLayout'

const SigninPage = () => {
  return (
    <AuthenticationLayout>
      <p>Not a member?</p><Link to={routes.signup()}>Sign up now</Link>
      <div className="rightside">
        <h3>Sign in to Microfails</h3>
        <button>Sign In</button>
      </div>
    </AuthenticationLayout>
  )
}

export default SigninPage

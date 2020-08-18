import { Link, routes } from '@redwoodjs/router'
import AuthenticationLayout from 'src/layouts/AuthenticationLayout'

const SignupPage = () => {
  return (
    <AuthenticationLayout>
      <p>Already a member?</p><Link to={routes.signin()}>Sign In</Link>
      <div className="rightside">
        <h3>Sign up to Microfails</h3>
        <button>Create Account</button>
      </div>
    </AuthenticationLayout>
  )
}

export default SignupPage

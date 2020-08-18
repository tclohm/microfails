import { Link, routes } from '@redwoodjs/router'

const SignupPage = () => {
  return (
    <>
      <p>Already a member?</p><a href="#">Sign In</a>
      <div className="leftside">
        <a href="#">Microfails</p>
        <p>Discover the new opportunities to hopefully better yourself</p>
      </div>
      <div className="rightside">
        <h3>Sign up to Microfails</h3>
        <button>Create Account</button>
      </div>
    </>
  )
}

export default SignupPage

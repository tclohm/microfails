import { Link } from '@redwoodjs/router'

const SigninPage = () => {
  return (
    <>
      <p>Not a member?</p><a href="#">Sign up now</a>
      <div className="leftside">
        <a href="#">Microfails</p>
        <p>Discover the new opportunities to hopefully better yourself</p>
      </div>
      <div className="rightside">
        <h3>Sign in to Microfails</h3>
        <button>Create Account</button>
      </div>
    </>
  )
}

export default SigninPage

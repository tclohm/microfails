import { Link } from '@redwoodjs/router'

const SignupPage = () => {
  return (
    <>
      <h1>SignupPage</h1>
      <p>Find me in "./web/src/pages/SignupPage/SignupPage.js"</p>
      <p>
        My default route is named "signup", link to me with `
        <Link to="signup">routes.signup()</Link>`
      </p>
    </>
  )
}

export default SignupPage

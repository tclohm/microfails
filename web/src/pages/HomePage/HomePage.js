import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <div className="banner">
        <h1>Build new habits and celebrate the fails</h1>
        <p>Microfails is the leading destination to find and create new habit building opportunities</p>
        <button>
          <Link to={routes.signup()}>
            Sign up
          </Link>
        </button>
        <img src="#" />
      </div>
    </>
  )
}

export default HomePage

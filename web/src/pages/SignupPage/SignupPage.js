import { Link, routes } from '@redwoodjs/router'
import AuthenticationLayout from 'src/layouts/AuthenticationLayout'
import styled from 'styled-components'

const SignupPage = () => {

  const Content = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    width: 30rem;
  `

  const AuthNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 0;
    padding: 30px 30px 0;
  `

  const AuthLink = styled.p`
    margin: 0;
    flex-grow: 1;
    text-align: right;
  `

  const AuthContent = styled.div`
    padding: 30px 60px 0;
    margin: 0;
  `


  return (
    <AuthenticationLayout>
      <Content>
        <AuthNav>
          <p>Already a member? <Link to={routes.signin()}>Sign In</Link></p>
        </AuthNav>
        <AuthContent>
          <h3>Sign up to Microfails</h3>
          <button>Create Account</button>
        </AuthContent>
      </Content>
    </AuthenticationLayout>
  )
}

export default SignupPage

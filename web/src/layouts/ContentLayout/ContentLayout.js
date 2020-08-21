import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

import { Button } from 'src/styled'

const Header = styled.header`
	width: 100vw;
	display: flex;
	justify-content: space-between;
`

const Nav = styled.nav`
	width: 15rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

const ContentLayout = ({ children }) => {
  return ( 
  	<>
  		<Header>
  			<h3 style={{ margin: '1rem 0 1rem 2rem', fontFamily: 'Gilbert' }}>microfails</h3>
  			<Nav>
          <Link to={routes.signin()} className='auth' style={{ color: 'gray', margin: '0 0 0 3rem' }}>
    				Sign in
  				</Link>
  				<Link to={routes.signup()} className="auth" style={{ width: '0rem', height: '2.5rem', margin: '0 7rem 0 0'}}>
            <Button
            inputHeight='2.5rem'
            inputWidth='5rem'
            inputColor='white'
            inputBGColor='#FFC843'
            inputBorder='#FFC843'
            inputHoverColor='#F7D380'
            >
              Sign up
            </Button>
          </Link>
  			</Nav>
  		</Header>
  		<main>{children}</main>
  	</>
  )
}

export default ContentLayout

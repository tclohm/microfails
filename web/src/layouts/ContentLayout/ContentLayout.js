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
  				<Button
  					inputBGColor='transparent'
  					inputBorder='transparent'
  					inputHoverColor='transparent'
  				>
  					<Link to={routes.signin()} className='auth'>Sign in</Link>
  				</Button>
  				<Button
  					inputHeight='2.5rem'
  					inputBGColor='#FFC843'
  					inputBorder='#FFC843'
  				>
  					<Link to={routes.signup()} className="auth">Sign up</Link>
  				</Button>
  			</Nav>
  		</Header>
  		<main>{children}</main>
  	</>
  )
}

export default ContentLayout

import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

const AuthenticationLayout = ({ children }) => {

	const MainContainer = styled.div`
		display: flex;
		flex-direction: row;
		overflow: hidden;
	`

	const AuthSideBar = styled.section`
    	background: #4d4891;
    	color: #fff;
    	height: 100vh;
    	width: 32.1rem;
  	`

  	const SidebarContent = styled.div`
	    display: flex;
	    flex-direction: column;
	    justify-content: space-between;
    `

    const Artwork = styled.div`
    	display: flex;
    	flex-direction: column;
    	justify-content flex-end;
    	flex-grow: 1;
    `

    const Header = styled.header`
    	padding: 4rem 4rem 5rem;
    	max-width: 100%;
    	margin: 0;
    	text-align: left;
    `

	return (
		<MainContainer>
			<AuthSideBar>
				<SidebarContent>
					<Header>
						<Link to={routes.home()} style={{ fontFamily: 'Gilbert color', fontSize: '5rem' }}>microfails</Link>
		    			<h1>Fail. Together. 🤦‍♀️</h1>
					</Header>
					<Artwork />
				</SidebarContent>
	    	</AuthSideBar>
			<main>{children}</main>
		</MainContainer>
  )
}

export default AuthenticationLayout

import { Link, routes } from '@redwoodjs/router'
import { 
	MainContainer,
	AuthSideBar,
	SidebarContent,
	Artwork,
	Header,
	Subtitle 
} from "src/styled"


const AuthenticationLayout = ({ children, sidebarColor, subtitleColor }) => {

	return (
		<MainContainer>
			<AuthSideBar inputSidebarColor={sidebarColor}>
				<SidebarContent>
					<Header>
						<Link to={routes.home()} className="logo">microfails</Link>
		    			<Subtitle inputFontColor={subtitleColor}>Fail. Together. 🤦‍♀️</Subtitle>
					</Header>
					<Artwork />
				</SidebarContent>
	    	</AuthSideBar>
			<main>{children}</main>
		</MainContainer>
  )
}

export default AuthenticationLayout

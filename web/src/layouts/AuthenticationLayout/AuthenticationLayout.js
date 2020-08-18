const AuthenticationLayout = ({ children }) => {
  return (
  	<>
  		<div className="leftside">
        	<a href="#">microfails</a>
        	<p>Discover the new opportunities to hopefully better yourself</p>
      	</div>
  		<main>{children}</main>
  	</>
  )
}

export default AuthenticationLayout

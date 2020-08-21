import { Link, routes } from '@redwoodjs/router'
import ContentLayout from 'src/layouts/ContentLayout'
import styled from 'styled-components'
import { Button } from 'src/styled'
import placeholder from '../../../public/placeholder.png'

const HomePage = () => {

  return (
    <ContentLayout>
      <div className='banner'>
        <div className='banner-left'>
          <h1 style={{ margin: '0 0 0 0', fontSize: '3rem' }}>Celebrate the fails with others.</h1>
          <p style={{ fontSize: '1.2rem' }}>Microfails is the leading destination to try new things and fail with bravado</p>
          <Link to={routes.signup()} className="auth" style={{ width: '5rem', height: '2.5rem' }}>
            <Button
              inputMargin='0'
              inputHeight='2.5rem'
              inputWidth='5rem'
              inputColor='white'
              inputBGColor='#FFC843'
              inputBorder='2px solid #FFC843'
              inputHoverColor='#F7D380'
            >
              Sign up
            </Button>
          </Link>       
        </div>
        <img src={placeholder} alt='skateboarder fall' style={{ width: '30rem', height: '30rem' }} />
      </div>
    </ContentLayout>
  )
}

export default HomePage

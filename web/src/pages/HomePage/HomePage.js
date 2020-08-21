import { Link, routes } from '@redwoodjs/router'
import ContentLayout from 'src/layouts/ContentLayout'
import styled from 'styled-components'
import { Button } from 'src/styled'

const HomePage = () => {



  return (
    <ContentLayout>
      <div className="banner">
        <h1>Build new habits and celebrate the fails</h1>
        <p>Microfails is the leading destination to find and create new habit building opportunities</p>
      </div>
    </ContentLayout>
  )
}

export default HomePage

import { Link, routes } from '@redwoodjs/router'
import { Form, TextField } from '@redwoodjs/forms'
import AuthenticationLayout from 'src/layouts/AuthenticationLayout'

import styled from 'styled-components'

import { Content, 
  AuthNav, 
  AuthContent, 
  Button, 
  HRDivider, 
  AuthFormSignupForm, 
  FormFieldGroup, 
  FormField 
} from 'src/styled'

const SigninPage = () => {
  return (
    <AuthenticationLayout sidebarColor='#FFFB7D' subtitleColor='black'>
      <Content>
        <AuthNav>
          <p>Not a member? <Link to={routes.signup()} className='auth'>Sign Up</Link></p>
        </AuthNav>
        <AuthContent>
          <h2>Sign up to Microfails</h2>
          <Button
            inputWidth='74.7%'
            inputMargin='0 1rem 1rem 0'
            inputBGColor='#4285f4'
            inputHoverColor='#fff'
            inputColor='white'
            inputBorder='2px solid #4285f4'
            inputHoverColor='rgb(0, 87, 255)'
          >Sign in with Google<i className='fab fa-google' style={{ 'margin-left': '0.5rem' }}></i></Button>
          <Button
            inputWidth='20%'
            inputMargin='0'
            inputHoverColor='#A0A0A0'
          ><i className='fab fa-twitter'></i></Button>
          <HRDivider/>
          <AuthFormSignupForm>
            <Form>
              <FormField
                inputWidth='100%'
              >
                <label for='user_email'>Email or Username</label>
                  <TextField 
                    name='input' 
                    className='form' 
                    id='email'  
                  />
              </FormField>
              <FormField
                inputWidth='100%'
              >
                <label for='user_login'>Password</label>
                  <TextField 
                    name='input' 
                    className='form' 
                    id='password'  
                  />
              </FormField>
            </Form>
            <Button
              inputMargin='1rem 0'
              inputBGColor='#FFC843'
              inputColor='white'
              inputBorder='2px solid #FFC843'
              inputHoverColor='#F7D380'
            >Sign In</Button>
          </AuthFormSignupForm>
        </AuthContent>
      </Content>
    </AuthenticationLayout>
  )
}

export default SigninPage

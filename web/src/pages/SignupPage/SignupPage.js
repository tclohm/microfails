import { Link, routes } from '@redwoodjs/router'
import { Form, TextField } from '@redwoodjs/forms'
import AuthenticationLayout from 'src/layouts/AuthenticationLayout'
import { Content, 
  AuthNav, 
  AuthContent, 
  Button, 
  HRDivider, 
  AuthFormSignupForm, 
  FormFieldGroup, 
  FormField 
} from 'src/styled'


const SignupPage = () => {

  return (
    <AuthenticationLayout>
      <Content>
        <AuthNav>
          <p>Already a member? <Link to={routes.signin()} className='auth'>Sign In</Link></p>
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
          >Sign up with Google<i className='fab fa-google' style={{ 'margin-left': '0.5rem' }}></i></Button>
          <Button
            inputWidth='20%'
            inputMargin='0'
            inputHoverColor='#A0A0A0'
          ><i className='fab fa-twitter'></i></Button>
          <HRDivider/>
          <AuthFormSignupForm>
            <Form>
              <FormFieldGroup>
                <FormField>
                  <label for='user_name'>Name</label>
                  <TextField 
                    name='input' 
                    className='form' 
                    id='name' 
                  />
                </FormField>
                <FormField>
                  <label for='user_login'>Username</label>
                  <TextField 
                    name='input' 
                    className='form' 
                    id='username'  
                  />
                </FormField>
              </FormFieldGroup>
              <FormField
                inputWidth='100%'
              >
                <label for='user_email'>Email</label>
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
            >Create Account</Button>
          </AuthFormSignupForm>
        </AuthContent>
      </Content>
    </AuthenticationLayout>
  )
}

export default SignupPage

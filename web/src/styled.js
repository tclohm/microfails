// MARK: -- Styled Components
import styled from 'styled-components';


// MARK: -- Authentication Layout
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`


export const AuthSideBar = styled.section`
  background: ${props => props.inputSidebarColor || '#4d4891'};
  color: #fff;
  height: 100vh;
  width: 32.1rem;
`

  
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

  
export const Artwork = styled.div`
  display: flex;
  flex-direction: column;
  justify-content flex-end;
  flex-grow: 1;
`

  
export const Header = styled.header`
  padding: 4rem 4rem 5rem;
  max-width: 100%;
  margin: 0;
  text-align: left;
`

export const Subtitle = styled.h1`
  color: ${props => props.inputFontColor || 'white' }
`

// MARK: -- SigninPage and SignupPage

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  width: 50rem;
`

export const AuthNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 0;
  padding: 3rem 3rem 0;
`

export const AuthLink = styled.p`
  margin: 0;
  flex-grow: 1;
  text-align: right;
`

export const AuthContent = styled.div`
  padding: 3rem 6rem 0;
  margin: 0 0 0 7rem;
  width: 50%;
`

export const HRDivider = styled.hr`
  overflow: visible;
  padding: 0;
  margin-bottom: 1rem;
  border: none;
  border-top: 0.1rem solid #e0e0e0;
  color: #6e6d7a;
  text-align: center;
`

export const AuthFormSignupForm = styled.div`
  width: 100%;
`

export const FormFieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FormField = styled.div`
  position: relative;
  width: ${props => props.inputWidth || '48%'};
  display: flex;
  flex-direction: column;
`

export const Username = styled.fieldset`
  margin: 0;
  padding: 0;
`

export const Button = styled.button`
  display: inline-block;
  border-radius: 0.3rem;
  height: ${props => props.inputHeight || 'auto'};
  width: ${props => props.inputWidth || 'auto'};
  padding: ${props => props.inputPadding || '0.5rem 0'};
  margin: ${props => props.inputMargin || '0 1rem 0 1rem' };
  width: ${props => props.inputWidth || '11rem'};
  background: ${props => props.inputBGColor || 'lightgray'};
  color: ${props => props.inputColor || 'gray'};
  font-size: 0.85rem;
  border: ${props => props.inputBorder || '2px solid lightgray'};

  :hover {
    background: ${props => props.inputHoverColor || 'gray'};
    border-color: ${props => props.inputHoverColor || 'gray'};
    cursor: pointer;
  }
`;
import { render } from '@redwoodjs/testing'

import AuthenticationLayout from './AuthenticationLayout'

describe('AuthenticationLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthenticationLayout />)
    }).not.toThrow()
  })
})

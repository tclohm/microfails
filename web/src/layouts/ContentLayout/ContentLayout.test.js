import { render } from '@redwoodjs/testing'

import ContentLayout from './ContentLayout'

describe('ContentLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContentLayout />)
    }).not.toThrow()
  })
})

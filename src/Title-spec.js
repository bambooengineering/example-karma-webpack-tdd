import React from 'react'
import { Title } from './Title';
import { render } from '@testing-library/react'

describe('<Title />', () => {
  it('renders the title correctly', () => {
    const testTitle = 'Hello World'
    const { getByText } = render(<Title title={testTitle} />)

    expect(getByText(testTitle)).not.toBeNull();
  })
})

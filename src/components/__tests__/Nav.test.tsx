import { render } from '@testing-library/react'
import Nav from '@/components/Nav'

test('renders logo K.', () => {
  const { getByText } = render(<Nav />)
  expect(getByText('K')).toBeInTheDocument()
})

test('renders Hire Me link', () => {
  const { getAllByText } = render(<Nav />)
  expect(getAllByText('Hire Me').length).toBeGreaterThan(0)
})

test('renders all nav links', () => {
  const { getByText } = render(<Nav />)
  expect(getByText('Work')).toBeInTheDocument()
  expect(getByText('Approach')).toBeInTheDocument()
  expect(getByText('Contact')).toBeInTheDocument()
})

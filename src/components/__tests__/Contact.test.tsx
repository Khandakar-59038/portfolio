import { render } from '@testing-library/react'
import Contact from '@/components/Contact'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
}))

test('renders section heading', () => {
  const { getByText } = render(<Contact />)
  expect(getByText('build')).toBeInTheDocument()
})

test('renders email link', () => {
  const { getByText } = render(<Contact />)
  const emailBtn = getByText(/say hello/i)
  expect(emailBtn.closest('a')).toHaveAttribute('href', 'mailto:musannaofficial02@gmail.com')
})

test('renders LinkedIn link', () => {
  const { getByText } = render(<Contact />)
  expect(getByText('LinkedIn')).toBeInTheDocument()
})

test('renders GitHub link', () => {
  const { getByText } = render(<Contact />)
  expect(getByText('GitHub')).toBeInTheDocument()
})

test('renders availability status', () => {
  const { getByText } = render(<Contact />)
  expect(getByText(/available now/i)).toBeInTheDocument()
})

test('renders Copenhagen location', () => {
  const { getAllByText } = render(<Contact />)
  expect(getAllByText(/Copenhagen/i).length).toBeGreaterThan(0)
})

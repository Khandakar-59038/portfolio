import { render } from '@testing-library/react'
import MyApproach from '@/components/MyApproach'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
}))

test('renders section label', () => {
  const { getByText } = render(<MyApproach />)
  expect(getByText(/03 — My Approach/i)).toBeInTheDocument()
})

test('renders all 4 principles', () => {
  const { getByText } = render(<MyApproach />)
  expect(getByText(/AI-augmented/i)).toBeInTheDocument()
  expect(getByText(/Ship early/i)).toBeInTheDocument()
  expect(getByText(/Full-stack/i)).toBeInTheDocument()
  expect(getByText(/Build things/i)).toBeInTheDocument()
})

test('renders quote bar', () => {
  const { getByText } = render(<MyApproach />)
  expect(getByText(/no fancy title/i)).toBeInTheDocument()
})

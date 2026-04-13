import { render } from '@testing-library/react'
import Hero from '@/components/Hero'

// Mock framer-motion since it uses browser APIs
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.HTMLProps<HTMLParagraphElement>) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: React.HTMLProps<HTMLAnchorElement>) => <a {...props}>{children}</a>,
  },
}))

// Mock SpotlightText since it uses browser APIs
jest.mock('@/components/SpotlightText', () => () => <div data-testid="spotlight" />)

test('renders headline words', () => {
  const { container } = render(<Hero />)
  const h1 = container.querySelector('h1')!
  expect(h1.textContent).toContain('Developer.')
  expect(h1.textContent).toContain('Builder.')
  expect(h1.textContent).toContain('Native.')
})

test('renders open to internships badge', () => {
  const { getByText } = render(<Hero />)
  expect(getByText(/open to internships/i)).toBeInTheDocument()
})

test('renders View My Work CTA', () => {
  const { getByText } = render(<Hero />)
  expect(getByText('View My Work')).toBeInTheDocument()
})

test('renders social links', () => {
  const { getByText } = render(<Hero />)
  expect(getByText('GitHub')).toBeInTheDocument()
  expect(getByText('LinkedIn')).toBeInTheDocument()
  expect(getByText('Email')).toBeInTheDocument()
})

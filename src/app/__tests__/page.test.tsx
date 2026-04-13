import { render } from '@testing-library/react'
import Page from '@/app/page'

jest.mock('@/components/GalaxyCanvas', () => () => <canvas data-testid="galaxy" />)
jest.mock('@/components/CustomCursor', () => () => <div data-testid="cursor" />)
jest.mock('@/components/SpotlightText', () => () => <div data-testid="spotlight" />)
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
}))

test('renders all sections', () => {
  const { container } = render(<Page />)
  // Hero renders
  expect(container.querySelector('h1')).toBeTruthy()
  // WhatIBuild renders
  expect(container.querySelector('#work')).toBeTruthy()
  // MyApproach renders
  expect(container.querySelector('#approach')).toBeTruthy()
  // Contact renders
  expect(container.querySelector('#contact')).toBeTruthy()
})

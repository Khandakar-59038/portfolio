import { render } from '@testing-library/react'
import GalaxyCanvas from '@/components/GalaxyCanvas'

test('renders a canvas element', () => {
  const { container } = render(<GalaxyCanvas />)
  const canvas = container.querySelector('canvas')
  expect(canvas).toBeInTheDocument()
})

test('canvas has correct fixed positioning', () => {
  const { container } = render(<GalaxyCanvas />)
  const canvas = container.querySelector('canvas')
  expect(canvas).toBeInTheDocument()
  // Check style attribute contains position:fixed
  expect(canvas?.getAttribute('style')).toContain('fixed')
})

import { render } from '@testing-library/react'
import CustomCursor from '@/components/CustomCursor'

test('renders all four cursor elements', () => {
  const { getByTestId } = render(<CustomCursor />)
  expect(getByTestId('cursor-h')).toBeInTheDocument()
  expect(getByTestId('cursor-v')).toBeInTheDocument()
  expect(getByTestId('cursor-dot')).toBeInTheDocument()
  expect(getByTestId('cursor-ring')).toBeInTheDocument()
})

test('cursor elements have pointer-events none', () => {
  const { getByTestId } = render(<CustomCursor />)
  const el = getByTestId('cursor-h')
  expect(el.style.pointerEvents).toBe('none')
})

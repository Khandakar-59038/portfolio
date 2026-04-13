import { render } from '@testing-library/react'
import SpotlightText from '@/components/SpotlightText'

test('renders keyword spans', () => {
  const { container } = render(<SpotlightText />)
  const spans = container.querySelectorAll('span')
  expect(spans.length).toBeGreaterThan(20)
})

test('contains PHP keyword', () => {
  const { getAllByText } = render(<SpotlightText />)
  expect(getAllByText('PHP').length).toBeGreaterThan(0)
})

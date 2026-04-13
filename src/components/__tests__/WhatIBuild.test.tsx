import { render } from '@testing-library/react'
import WhatIBuild from '@/components/WhatIBuild'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}))

test('renders section heading', () => {
  const { getByText } = render(<WhatIBuild />)
  expect(getByText(/real things/i)).toBeInTheDocument()
})

test('renders Student Course Hub project', () => {
  const { getByText } = render(<WhatIBuild />)
  expect(getByText('Student Course Hub')).toBeInTheDocument()
})

test('renders tech tags for featured project', () => {
  const { getAllByText } = render(<WhatIBuild />)
  expect(getAllByText('PHP').length).toBeGreaterThan(0)
  expect(getAllByText('MySQL').length).toBeGreaterThan(0)
})

test('renders skills strip', () => {
  const { getByText } = render(<WhatIBuild />)
  expect(getByText(/tech i work with/i)).toBeInTheDocument()
})

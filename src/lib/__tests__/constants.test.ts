import { colors, SPOTLIGHT_KEYWORDS } from '@/lib/constants'

test('accent color is warm amber', () => {
  expect(colors.accent).toBe('#d4943a')
})

test('bg color is near-black', () => {
  expect(colors.bg).toBe('#0c0c0b')
})

test('spotlight keywords includes key tech terms', () => {
  expect(SPOTLIGHT_KEYWORDS).toContain('PHP')
  expect(SPOTLIGHT_KEYWORDS).toContain('AI')
  expect(SPOTLIGHT_KEYWORDS.length).toBeGreaterThan(20)
})

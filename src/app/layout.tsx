import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khandakar Musanna — AI-Augmented Developer',
  description:
    'BSc CS student at De Montfort University (via Niels Brock, Copenhagen). Full-stack developer building real things with PHP, JavaScript, Python and AI. Open to internships.',
  keywords: ['portfolio','developer','PHP','JavaScript','AI','Copenhagen','internship','full-stack'],
  authors: [{ name: 'Khandakar Musanna' }],
  openGraph: {
    title: 'Khandakar Musanna — AI-Augmented Developer',
    description: 'Building real things with AI as a core tool. Open to internships in Copenhagen.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

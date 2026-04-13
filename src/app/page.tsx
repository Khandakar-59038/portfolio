'use client'
import dynamic from 'next/dynamic'
import Nav           from '@/components/Nav'
import Hero          from '@/components/Hero'
import WhatIBuild    from '@/components/WhatIBuild'
import MyApproach    from '@/components/MyApproach'
import Contact       from '@/components/Contact'

const GalaxyCanvas = dynamic(() => import('@/components/GalaxyCanvas'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })

export default function Page() {
  return (
    <>
      {/* Global layers */}
      <GalaxyCanvas />
      <CustomCursor />

      {/* Page */}
      <Nav />
      <main>
        <Hero />
        <WhatIBuild />
        <MyApproach />
        <Contact />
      </main>
    </>
  )
}

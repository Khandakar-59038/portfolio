import GalaxyCanvas  from '@/components/GalaxyCanvas'
import CustomCursor  from '@/components/CustomCursor'
import Nav           from '@/components/Nav'
import Hero          from '@/components/Hero'
import WhatIBuild    from '@/components/WhatIBuild'
import MyApproach    from '@/components/MyApproach'
import Contact       from '@/components/Contact'

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

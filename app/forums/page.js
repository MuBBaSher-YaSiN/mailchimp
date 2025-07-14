import React from 'react'
import SignUpFormHero from './SignUpFormHero'
import PopupPerformanceDashboard from './PopupPerfomanceDashboard'
import ConnectSiteSection from './ConnectSiteSection'
import Header from './Header'

function page() {
  return (
    <div>
      <Header />
      <div className=''>
        <SignUpFormHero />
        <PopupPerformanceDashboard />
        <ConnectSiteSection />
      </div>

    </div>
  )
}

export default page
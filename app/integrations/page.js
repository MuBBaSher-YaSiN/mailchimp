import React from 'react'

import FilterPanel from './FilterPanel'

import IntegrationCards from './IntegrationCards'
import WixIntegration from './WixIntegration'
import Header from './Header'

function page() {
  return (
    <div className='w-full'>
      <Header/>
      <div className='max-w-[1232px] mx-auto lg:flex'>
        <div>
          <FilterPanel />
        </div>
        <div>
          <WixIntegration />
          <IntegrationCards />
        </div>

        {/* <AppIntegrationHeader/> */}
      </div>
    </div>
  )
}

export default page
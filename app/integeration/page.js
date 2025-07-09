import React from 'react'

import FilterPanel from './FilterPanel'

import IntegrationCards from './IntegrationCards'
import WixIntegration from './WixIntegration'

function page() {
  return (
    <div className='w-full'>
      <div className='max-w-6xl mx-auto lg:flex'>
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
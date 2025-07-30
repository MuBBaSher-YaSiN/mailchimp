import React from 'react'

import FilterPanel from './FilterPanel'

import IntegrationCards from './IntegrationCards'
import WixIntegration from './WixIntegration'
import Header from './Header'

function page() {
  return (
    <div className='w-full bg-white'>
      <Header/>
      <div className='max-w-[1232px] bg-white mx-auto lg:flex px-6 2xl:px-0 mt-4'>
        <div>
          <FilterPanel />
        </div>
        <div className='px-10'>
          <WixIntegration />
          <IntegrationCards />
        </div>

        {/* <AppIntegrationHeader/> */}
      </div>
    </div>
  )
}

export default page
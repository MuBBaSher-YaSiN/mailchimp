import React from 'react'
import EmailAnalyticsDashboard from './EmailAnalyticsDashboard'
import ConversionsDashboard from './ConversionsDashboard'
import DeliveryAnalytics from './DeliveryAnalytics'

function page() {
  return (
    <div>
        <EmailAnalyticsDashboard/>
        <ConversionsDashboard/>
        <DeliveryAnalytics/>
        {/* <EmailAnalyticsDashboard2/> */}
    </div>
  )
}

export default page
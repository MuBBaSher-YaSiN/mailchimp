import React from 'react'
import EmailAnalyticsDashboard from './EmailAnalyticsDashboard'
import DateFilterComponent from './DateFilterComponent'
import Header from './Header'

function page() {
  return (
    <div>
      <Header/>
      <DateFilterComponent/>
      <EmailAnalyticsDashboard />
   
    </div>
  )
}

export default page
import React from 'react'
import ContactSummary from './ContactSummary'
import ContactsBreakdown from './ContactsBreakdown'
import SubscriberBreakdown from './SubscriberBreakdown'
import SubscriptionGrowth from './SubscriptionGrowth'

function page() {
    return (
        <div className=''>
            <ContactSummary />
            <div className='flex max-w-6xl mx-auto'>
                <ContactsBreakdown />
                 <SubscriberBreakdown />
            </div>
            <SubscriptionGrowth/>

        </div>
    )
}

export default page
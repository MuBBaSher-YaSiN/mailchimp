import React from 'react'
import MailchimpWixPromo from './MailchimpWixPromo'
import WebsiteCreationOptions from './WebsiteCreationOptions'
import Header from './Header'



function page() {
    return (
        <div>
            <Header/>
            <MailchimpWixPromo />
            <WebsiteCreationOptions/>
        </div>
    )
}

export default page
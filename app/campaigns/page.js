// app/campaigns/page.js
"use client";

import { useState } from 'react';
import CampaignPage from '../../components/campaigns/CampaignPage';
import Header from './Header';

export default function CampaignsPage() {
  return (
    <div>
      <Header/>
      <CampaignPage />
    </div>

  );
}

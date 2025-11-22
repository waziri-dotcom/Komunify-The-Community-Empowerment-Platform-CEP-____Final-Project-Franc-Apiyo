import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import QuickActions from './QuickActions'
import TrendingCommunities from './TrendingCommunities'
import MentorshipSessions from './MentorshipSessions'
import LatestUpdates from './LatestUpdates'
import Card from '../../components/ui/Card'

export default function DashboardHome(){
  return (
    <PageWrapper title="Community Hub">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-komunify-green text-white rounded p-6 shadow"> 
            <h3 className="text-xl font-bold">Welcome back, Paul</h3>
            <p className="mt-2 text-sm">See the latest activity in your communities and projects.</p>
          </div>

          <QuickActions />

          <div className="grid grid-cols-2 gap-4">
            <TrendingCommunities />
            <MentorshipSessions />
          </div>
        </div>
        <aside className="col-span-1">
          <LatestUpdates />
        </aside>
      </div>
    </PageWrapper>
  )
}

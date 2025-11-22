import React from 'react'
import Card from '../../components/ui/Card'
export default function LatestUpdates(){
  return (
    <Card>
      <h4 className="font-semibold mb-3">Latest Updates</h4>
      <div className="space-y-3 text-sm text-gray-700">
        <div>• 30kg rice donation delivered to Mukuru (2 hours ago)</div>
        <div>• 10 micro-loans approved this week (1 day ago)</div>
        <div>• Mentorship session: Funding 101 (3 days ago)</div>
      </div>
    </Card>
  )
}

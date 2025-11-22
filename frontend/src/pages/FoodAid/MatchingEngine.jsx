import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import Card from '../../components/ui/Card'
export default function MatchingEngine(){
  return (
    <PageWrapper title="Donor → Recipient Matching">
      <Card>
        <div className="text-sm">Matching engine UI placeholder. Left donor card, right recipient card, match probability bar, confirm match button.</div>
      </Card>
    </PageWrapper>
  )
}

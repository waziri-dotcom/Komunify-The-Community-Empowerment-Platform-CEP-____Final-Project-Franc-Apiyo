import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import Card from '../../components/ui/Card'
export default function RepaymentTracking(){
  return (
    <PageWrapper title="Repayment Tracking">
      <Card>
        <div className="text-sm">Repayment timeline and upcoming due dates.</div>
      </Card>
    </PageWrapper>
  )
}

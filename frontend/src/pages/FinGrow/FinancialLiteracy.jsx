import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import Card from '../../components/ui/Card'
export default function FinancialLiteracy(){
  const modules = ['Budgeting','Saving','Debt Management','Sales & Marketing']
  return (
    <PageWrapper title="Financial Literacy">
      <div className="grid grid-cols-2 gap-4">
        {modules.map(m=> <Card key={m}><div className="font-semibold">{m}</div><p className="text-sm text-gray-600 mt-2">Short module description.</p></Card>)}
      </div>
    </PageWrapper>
  )
}

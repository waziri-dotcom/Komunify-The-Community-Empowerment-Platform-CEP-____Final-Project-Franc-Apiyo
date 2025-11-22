import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import Card from '../../components/ui/Card'
export default function MpesaWallet(){
  return (
    <PageWrapper title="M-PESA Wallet">
      <Card>
        <div className="text-sm">Wallet balance: <span className="text-komunify-gold font-bold">KES 12,450</span></div>
        <div className="mt-3 flex gap-2"><button className="px-3 py-1 rounded bg-komunify-green text-white">Deposit</button><button className="px-3 py-1 rounded border">Withdraw</button></div>
      </Card>
    </PageWrapper>
  )
}

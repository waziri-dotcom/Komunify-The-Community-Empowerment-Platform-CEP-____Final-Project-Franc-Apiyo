import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
export default function Donate(){
  return (
    <PageWrapper title="Donate">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Kenya Donors</h3>
          <p className="mt-2">Till: <strong>9890075</strong></p>
          <p>Paybill: <strong>247247 Acc 705002</strong></p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">International</h3>
          <p>Bank: DTB</p>
          <p>Account: 5732829003 (USD)</p>
          <p>SWIFTCODE: DTKEKENA</p>
        </div>
      </div>
    </PageWrapper>
  )
}

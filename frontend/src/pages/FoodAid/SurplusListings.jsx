import React, {useEffect, useState} from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import Card from '../../components/ui/Card'
import api from '../../services/api'

export default function SurplusListings(){
  const [items, setItems] = useState([])
  useEffect(()=>{ api.get('/food').then(r=>setItems(r.data)).catch(()=>setItems([])) },[])
  return (
    <PageWrapper title="Surplus Food Listings">
      <div className="grid grid-cols-3 gap-4">
        {items.length===0 && <Card>No listings yet — be the first to donate!</Card>}
        {items.map(it => (
          <Card key={it._id}>
            <div className="font-semibold">{it.title}</div>
            <div className="text-sm text-gray-600">{it.description}</div>
            <div className="mt-2 text-sm text-green-700">Qty: {it.quantity} {it.unit}</div>
            <div className="mt-3 flex justify-between">
              <button className="text-sm px-3 py-1 rounded bg-komunify-gold text-white">Match</button>
              <button className="text-sm px-3 py-1 rounded border">Details</button>
            </div>
          </Card>
        ))}
      </div>
    </PageWrapper>
  )
}

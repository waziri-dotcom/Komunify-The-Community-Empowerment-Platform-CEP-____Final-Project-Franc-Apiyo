import React from 'react'
import Card from '../../components/ui/Card'
export default function TrendingCommunities(){
  const items = [{name:'Mukuru Green',score:92},{name:'Kasarani Farmers',score:88},{name:'Women Bakers Hub',score:85}]
  return (
    <Card>
      <h4 className="font-semibold mb-3">Trending Communities</h4>
      <ul className="space-y-2">
        {items.map(it=> (
          <li key={it.name} className="flex justify-between items-center">
            <div className="font-medium">{it.name}</div>
            <div className="text-sm text-komunify-gold">{it.score}%</div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

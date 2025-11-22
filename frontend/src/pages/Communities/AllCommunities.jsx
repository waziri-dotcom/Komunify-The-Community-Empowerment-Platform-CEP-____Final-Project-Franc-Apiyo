import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import Card from '../../components/ui/Card'
export default function AllCommunities(){
  const list = [{name:'Mukuru Green'},{name:'Kasarani Recyclers'},{name:'Women Bakers'}]
  return (
    <PageWrapper title="All Communities">
      <div className="grid grid-cols-3 gap-4">
        {list.map(c=> <Card key={c.name}><div className="font-semibold">{c.name}</div></Card>)}
      </div>
    </PageWrapper>
  )
}

import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import Card from '../../components/ui/Card'
import { ResponsiveContainer, PieChart, Pie } from 'recharts'

export default function RiskProfile(){
  const data = [{name:'Income',value:40},{name:'Repayment',value:35},{name:'Business',value:25}]
  return (
    <PageWrapper title="Risk Profiling">
      <Card>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={data} dataKey="value" outerRadius={80} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </PageWrapper>
  )
}

import React, {useState} from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

export default function LoanApplication(){
  const [step,setStep] = useState(1)
  return (
    <PageWrapper title="Loan Application">
      <Card>
        <div className="mb-4">Step {step} of 4</div>
        {step===1 && (<div><label className="block">Full name<input className="w-full border p-2 rounded mt-1"/></label></div>)}
        {step===2 && (<div><label className="block">Business details<textarea className="w-full border p-2 rounded mt-1"/></label></div>)}
        {step===3 && (<div><label className="block">Loan amount<input className="w-full border p-2 rounded mt-1"/></label></div>)}
        {step===4 && (<div>Review & Submit</div>)}
        <div className="mt-4 flex gap-2">
          <Button onClick={()=>setStep(s=>Math.max(1,s-1))}>Back</Button>
          <Button onClick={()=>setStep(s=>Math.min(4,s+1))}>Next</Button>
        </div>
      </Card>
    </PageWrapper>
  )
}

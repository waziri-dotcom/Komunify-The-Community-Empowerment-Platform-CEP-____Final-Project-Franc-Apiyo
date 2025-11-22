import React from 'react'
import Button from '../../components/ui/Button'
export default function QuickActions(){
  return (
    <div className="grid grid-cols-4 gap-3">
      <Action label="Create Project" />
      <Action label="Join Community" />
      <Action label="Book Mentor" />
      <Action label="Report Food" />
    </div>
  )
}
function Action({label}){
  return (
    <div className="bg-white rounded shadow p-4 flex items-center justify-between">
      <div>{label}</div>
      <Button>{label}</Button>
    </div>
  )
}

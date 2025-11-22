import React from 'react'
import Card from '../../components/ui/Card'
export default function MentorshipSessions(){
  const sessions = [{title:'Small Biz Basics',date:'Nov 25'},{title:'Bookkeeping 101',date:'Dec 1'}]
  return (
    <Card>
      <h4 className="font-semibold mb-3">Upcoming Mentorship Sessions</h4>
      <ul className="space-y-2">
        {sessions.map(s=> <li key={s.title} className="flex justify-between">{s.title}<span className="text-sm text-gray-500">{s.date}</span></li>)}
      </ul>
    </Card>
  )
}

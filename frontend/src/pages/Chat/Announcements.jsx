import React from 'react'
import { Megaphone } from 'lucide-react'

export default function Announcements({ announcements = [] }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-3 mb-3">
        <Megaphone className="text-amber-500" />
        <h4 className="text-sm font-semibold">Announcements</h4>
      </div>

      <ul className="space-y-3">
        {announcements.length === 0 ? (
          <li className="text-sm text-gray-500">No announcements. Admins can post important updates here.</li>
        ) : (
          announcements.map(a => (
            <li key={a.id} className="border-l-4 border-amber-100 pl-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-medium">{a.title}</div>
                  <div className="text-xs text-gray-500">{a.date}</div>
                  <p className="text-sm text-gray-700 mt-1">{a.body}</p>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}


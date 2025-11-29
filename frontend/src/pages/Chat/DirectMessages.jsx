import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function DirectMessages({ conversations = [], onOpen = () => {} }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold">Direct Messages</h4>
        <button className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700">New</button>
      </div>

      <ul className="space-y-3 max-h-72 overflow-y-auto">
        {conversations.length === 0 ? (
          <li className="text-sm text-gray-500">No messages yet. Start a conversation with a community member.</li>
        ) : (
          conversations.map(conv => (
            <li key={conv.id}>
              <button
                onClick={() => onOpen(conv)}
                className="w-full flex items-center gap-3 p-2 rounded hover:bg-emerald-50"
              >
                <span className={`inline-block w-10 h-10 rounded-full flex items-center justify-center ${conv.online ? 'ring-2 ring-emerald-200' : 'bg-gray-100'}`}>
                  {conv.avatar ? (
                    <img src={conv.avatar} alt={conv.name} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <span className="text-emerald-700 font-semibold">{conv.name.slice(0,1)}</span>
                  )}
                </span>

                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">{conv.name}</div>
                    <div className="text-xs text-gray-400">{conv.lastAt}</div>
                  </div>
                  <div className="text-xs text-gray-500 truncate">{conv.lastMessage}</div>
                </div>

                {conv.unread > 0 && (
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs">{conv.unread}</span>
                )}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}


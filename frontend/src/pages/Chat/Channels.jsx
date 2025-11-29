import React, { useState } from 'react'
import { Search, Plus } from 'lucide-react'

export default function Channels({ channels = [], onSelect = () => {} }) {
  const [query, setQuery] = useState('')
  const filtered = channels.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <aside className="w-full md:w-80 bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Channels</h3>
        <button
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600 text-white text-sm shadow-sm"
          aria-label="Create channel"
        >
          <Plus size={14} /> Create
        </button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 text-gray-400" size={16} />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search channels"
          className="pl-10 pr-3 py-2 w-full rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        />
      </div>

      <nav className="space-y-2 max-h-72 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="text-sm text-gray-500">No channels match your search.</div>
        ) : (
          filtered.map(channel => (
            <button
              key={channel.id}
              onClick={() => onSelect(channel)}
              className="w-full text-left px-3 py-2 rounded hover:bg-emerald-50 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                {channel.name.slice(0,1).toUpperCase()}
              </span>
              <div className="flex-1">
                <div className="text-sm font-medium">{channel.name}</div>
                <div className="text-xs text-gray-500">{channel.meta || 'Public channel'}</div>
              </div>
              {channel.unread > 0 && (
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs rounded-full bg-amber-100 text-amber-800">{channel.unread}</span>
              )}
            </button>
          ))
        )}
      </nav>
    </aside>
  )
}

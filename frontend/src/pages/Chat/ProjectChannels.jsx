import React from 'react'
import { Hash } from 'lucide-react'

export default function ProjectChannels({ project = {}, channels = [], onSelect = () => {} }) {
  return (
    <section className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-3 mb-3">
        <Hash className="text-amber-500" />
        <div>
          <h4 className="text-sm font-semibold">{project.name || 'Project'}</h4>
          <p className="text-xs text-gray-500">Project channels and collaboration space</p>
        </div>
      </div>

      <ul className="space-y-2">
        {channels.length === 0 ? (
          <li className="text-sm text-gray-500">No project channels yet — create one to start collaborating.</li>
        ) : (
          channels.map(ch => (
            <li key={ch.id}>
              <button
                onClick={() => onSelect(ch)}
                className="w-full text-left px-3 py-2 rounded hover:bg-emerald-50 flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-medium">{ch.name}</div>
                  <div className="text-xs text-gray-500">{ch.topic}</div>
                </div>
                {ch.locked && <span className="text-xs text-gray-400">Private</span>}
              </button>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}


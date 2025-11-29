import React, { useRef } from 'react'
import { Upload } from 'lucide-react'

export default function MediaDocs({ files = [], onUpload = () => {} }) {
  const fileRef = useRef(null)

  function handleFiles(e) {
    const selected = Array.from(e.target.files)
    onUpload(selected)
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold">Media & Documents</h4>
        <button
          onClick={() => fileRef.current?.click()}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-600 text-white text-sm"
        >
          <Upload size={14} /> Upload
        </button>
      </div>

      <input ref={fileRef} type="file" className="hidden" multiple onChange={handleFiles} />

      <div className="grid grid-cols-3 gap-3">
        {files.length === 0 ? (
          <div className="col-span-3 text-sm text-gray-500">No files uploaded yet. Upload photos, PDFs or docs for your project.</div>
        ) : (
          files.map(f => (
            <div key={f.id || f.name} className="border rounded p-2 text-xs">
              {f.type?.startsWith('image') ? (
                <img src={f.url || URL.createObjectURL(f)} alt={f.name} className="w-full h-24 object-cover rounded" />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">PDF</div>
                  <div className="truncate">{f.name}</div>
                </div>
              )}
              <div className="mt-2 flex items-center justify-between">
                <div className="text-emerald-700 text-xs">{f.size ? Math.round(f.size/1024) + ' KB' : ''}</div>
                <a href={f.url || '#'} target="_blank" rel="noreferrer" className="text-xs underline">Open</a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}


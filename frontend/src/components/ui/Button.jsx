import React from 'react'
export default function Button({children, onClick, variant='primary'}){
  const base = 'px-4 py-2 rounded text-sm font-semibold';
  const styles = variant === 'primary' ? 'bg-komunify-green text-white' : 'bg-komunify-gold text-white';
  return <button onClick={onClick} className={`${base} ${styles}`}>{children}</button>
}

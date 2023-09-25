import React from 'react'
export default function Button({cls, label, handelOnChange}) {
  return (
       <div onClick={()=> handelOnChange(label)} className={cls}>{label}</div>
  )
}

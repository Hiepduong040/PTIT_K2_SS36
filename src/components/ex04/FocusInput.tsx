import React, { useEffect, useRef } from 'react'

export default function FocusInput() {
    const  SetUseRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        SetUseRef.current?.focus();
    })
  return (
    <div>FocusInput
        <label htmlFor=""></label>
        <input ref={SetUseRef} type="text" />
    </div>
  )
}

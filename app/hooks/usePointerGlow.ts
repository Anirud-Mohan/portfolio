'use client'

import { useState } from 'react'

export function usePointerGlow() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    setPointer({ x, y })
  }

  return {
    pointer,
    handlePointerMove,
  }
}

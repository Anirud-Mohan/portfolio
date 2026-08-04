'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function PointerAura() {
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 120, damping: 28, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 120, damping: 28, mass: 0.4 })

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    if (!media.matches) return

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setVisible(true)
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[40] hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
        background:
          'radial-gradient(circle, rgba(var(--pointer-glow),0.08) 0%, rgba(var(--pointer-glow),0.03) 35%, transparent 70%)',
        transition: 'opacity 0.35s ease',
      }}
    />
  )
}

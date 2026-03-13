'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Node {
  x: number
  y: number
  baseX: number
  baseY: number
  radius: number
  vx: number
  vy: number
}

const ImmersiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const frameIdRef = useRef<number>()
  const scrollRef = useRef(0)

  const createNodes = (width: number, height: number) => {
    const density = width < 768 ? 40 : 70
    return Array.from({ length: density }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      radius: Math.random() * 1.4 + 0.7,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }))
  }

  const handleResize = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    nodesRef.current = createNodes(canvas.width, canvas.height)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    nodesRef.current = createNodes(canvas.width, canvas.height)

    const animate = (timestamp: number) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, 'rgba(4, 10, 24, 0.94)')
      gradient.addColorStop(0.55, 'rgba(5, 11, 26, 0.9)')
      gradient.addColorStop(1, 'rgba(2, 6, 23, 0.96)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current
      const pulse = Math.sin(timestamp * 0.0012) * 0.5 + 0.5
      const scrollShift = scrollRef.current * 0.04

      nodesRef.current.forEach((node, index) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < -20) node.x = canvas.width + 20
        if (node.x > canvas.width + 20) node.x = -20
        if (node.y < -20) node.y = canvas.height + 20
        if (node.y > canvas.height + 20) node.y = -20

        const driftX = Math.sin(timestamp * 0.0003 + index) * 6
        const driftY = Math.cos(timestamp * 0.00025 + index) * 6
        const parallaxY = (node.baseY - scrollShift + canvas.height) % canvas.height
        const drawX = node.x + driftX
        const drawY = parallaxY + driftY

        const distanceToMouse = mouse.active
          ? Math.hypot(mouse.x - drawX, mouse.y - drawY)
          : Number.POSITIVE_INFINITY
        const mouseInfluence = mouse.active ? Math.max(0, 1 - distanceToMouse / 180) : 0

        ctx.beginPath()
        ctx.arc(drawX, drawY, node.radius + mouseInfluence * 1.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(191, 245, 255, ${0.35 + pulse * 0.25 + mouseInfluence * 0.3})`
        ctx.fill()

        nodesRef.current.forEach((otherNode) => {
          if (otherNode === node) return
          const otherDrawX = otherNode.x
          const otherDrawY = (otherNode.baseY - scrollShift + canvas.height) % canvas.height
          const distance = Math.hypot(otherDrawX - drawX, otherDrawY - drawY)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(drawX, drawY)
            ctx.lineTo(otherDrawX, otherDrawY)
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.05 * (1 - distance / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220)
        glow.addColorStop(0, 'rgba(116, 255, 212, 0.14)')
        glow.addColorStop(0.5, 'rgba(96, 165, 250, 0.08)')
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2)
        ctx.fill()
      }

      frameIdRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

export default ImmersiveBackground

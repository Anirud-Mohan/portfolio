'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Star {
  x: number
  y: number
  baseY: number
  z: number
  size: number
  brightness: number
  twinkleSpeed: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  color: string
  trail: { x: number; y: number; size: number }[]
}


const ImmersiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)
  const starsRef = useRef<Star[]>([])
  const shootingStarsRef = useRef<ShootingStar[]>([])
  // const spaceObjectsRef = useRef<SpaceObject[]>([])
  const frameIdRef = useRef<number>()
  const lastShootingStarTimeRef = useRef(0)

  const createStars = (width: number, height: number, count: number) => {
    const stars: Star[] = []
    for (let i = 0; i < count; i++) {
      const y = Math.random() * height
      stars.push({
        x: Math.random() * width,
        y: y,
        baseY: y,
        z: Math.random() * 1000,
        size: Math.random() * 1.5 + 0.5,
        brightness: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.05 + 0.01
      })
    }
    return stars
  }

  const createShootingStar = (width: number, height: number): ShootingStar => {
    const angle = Math.random() * Math.PI * 2 // Full 360-degree angle
    const startX = Math.random() * width
    const startY = Math.random() * height
    return {
      x: startX,
      y: startY,
      length: Math.random() * 150 + 100,
      speed: Math.random() * 300 + 200,
      angle: angle,
      opacity: 1,
      color: getRandomColor(),
      trail: []
    }
  }

  const getRandomColor = () => {
    const colors = ['#FFFFFF', '#FF4500', '#FFA500', '#FFD700', '#00FFFF', '#FF00FF', '#1E90FF']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // const createSpaceObject = (width: number, height: number): SpaceObject => {
  //   const type = Math.random() > 0.5 ? 'planet' : 'spaceship'
  //   const image = new Image()
  //   image.src = type === 'planet' ? '/placeholder.svg?height=50&width=50' : '/placeholder.svg?height=30&width=60'
  //   return {
  //     x: Math.random() * width,
  //     y: Math.random() * height,
  //     type: type,
  //     size: type === 'planet' ? Math.random() * 30 + 20 : Math.random() * 20 + 10,
  //     speed: Math.random() * 0.5 + 0.1,
  //     image: image
  //   }
  // }


  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    })
  }

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  const handleResize = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    starsRef.current = createStars(canvas.width, canvas.height, 200)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    starsRef.current = createStars(canvas.width, canvas.height, 200)
    // spaceObjectsRef.current = Array(5).fill(null).map(() => createSpaceObject(canvas.width, canvas.height))

    const animate = (timestamp: number) => {
      // Create darker gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, 'rgba(5, 5, 25, 0.9)')
      gradient.addColorStop(0.5, 'rgba(10, 5, 30, 0.9)')
      gradient.addColorStop(1, 'rgba(15, 5, 35, 0.9)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add a subtle overlay for depth
      ctx.fillStyle = 'rgba(0, 0, 10, 0.3)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)


      // Draw and animate stars
      starsRef.current.forEach(star => {
        const scrollOffset = (scrollPosition * star.z * 0.01) % canvas.height // Increased parallax factor
        const adjustedY = (star.baseY - scrollOffset + canvas.height) % canvas.height

        const twinkle = Math.sin(timestamp * star.twinkleSpeed) * 0.3 + 0.7
        const adjustedBrightness = star.brightness * twinkle

        ctx.beginPath()
        ctx.arc(star.x, adjustedY, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${adjustedBrightness})`
        ctx.fill()

        // Add subtle horizontal movement based on mouse position
        const mouseOffset = (mousePosition.x - canvas.width / 2) * 0.000001 * star.z
        star.x = (star.x + mouseOffset + canvas.width) % canvas.width
      })

      // Handle shooting stars
      if (timestamp - lastShootingStarTimeRef.current > 5000 && shootingStarsRef.current.length < 3) {
        shootingStarsRef.current.push(createShootingStar(canvas.width, canvas.height))
        lastShootingStarTimeRef.current = timestamp
      }

      shootingStarsRef.current = shootingStarsRef.current.filter(star => {
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        const endX = star.x + Math.cos(star.angle) * canvas.width
        const endY = star.y + Math.sin(star.angle) * canvas.width
        const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY)
        gradient.addColorStop(0, `${star.color}${Math.floor(star.opacity * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `${star.color}00`)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 3
        ctx.lineCap = 'round'
        ctx.stroke()

        // Draw trail with changing sizes
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        star.trail.forEach((point, index) => {
          ctx.lineTo(point.x, point.y)
          const alpha = (star.trail.length - index) / star.trail.length * 0.6
          ctx.strokeStyle = `${star.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`
          ctx.lineWidth = point.size
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
        })

        star.x += Math.cos(star.angle) * star.speed * 0.016
        star.y += Math.sin(star.angle) * star.speed * 0.016
        star.opacity -= 0.005

        star.trail.unshift({ 
          x: star.x, 
          y: star.y, 
          size: Math.random() * 2 + 1
        })
        if (star.trail.length > 50) {
          star.trail.pop()
        }

        return (star.x >= 0 && star.x <= canvas.width && star.y >= 0 && star.y <= canvas.height) && star.opacity > 0
      })

      // // Draw and animate space objects
      // spaceObjectsRef.current.forEach(obj => {
      //   ctx.drawImage(obj.image, obj.x, obj.y, obj.size, obj.size)
      //   obj.y += obj.speed
      //   if (obj.y > canvas.height) {
      //     obj.y = -obj.size
      //     obj.x = Math.random() * canvas.width
      //   }
      // })

      frameIdRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
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

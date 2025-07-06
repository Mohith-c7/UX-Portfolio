"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  targetX: number
  targetY: number
  size: number
  opacity: number
  color: string
  speed: number
}

interface FloatingParticlesProps {
  count?: number
  colors?: string[]
}

export const FloatingParticles = ({
  count = 50,
  colors = ["#a3e635", "#84cc16", "#65a30d", "#bef264"],
}: FloatingParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
        canvasRef.current.width = rect.width
        canvasRef.current.height = rect.height
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      targetX: Math.random() * dimensions.width,
      targetY: Math.random() * dimensions.height,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.02 + 0.01,
    }))

    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
      }
    }

    const animate = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Calculate attraction to mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Attraction force (stronger when closer)
        const maxDistance = 150
        const force = Math.max(0, (maxDistance - distance) / maxDistance)

        if (distance < maxDistance) {
          particle.targetX = particle.x + dx * force * 0.1
          particle.targetY = particle.y + dy * force * 0.1
        } else {
          // Random movement when not near cursor
          particle.targetX += (Math.random() - 0.5) * 2
          particle.targetY += (Math.random() - 0.5) * 2
        }

        // Smooth movement towards target
        particle.x += (particle.targetX - particle.x) * particle.speed
        particle.y += (particle.targetY - particle.y) * particle.speed

        // Keep particles within bounds
        if (particle.x < 0) particle.x = dimensions.width
        if (particle.x > dimensions.width) particle.x = 0
        if (particle.y < 0) particle.y = dimensions.height
        if (particle.y > dimensions.height) particle.y = 0

        // Update target bounds
        particle.targetX = Math.max(0, Math.min(dimensions.width, particle.targetX))
        particle.targetY = Math.max(0, Math.min(dimensions.height, particle.targetY))

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect
        ctx.shadowColor = particle.color
        ctx.shadowBlur = particle.size * 2
        ctx.fill()
        ctx.restore()

        // Draw connections to nearby particles
        particlesRef.current.forEach((otherParticle) => {
          if (particle.id >= otherParticle.id) return

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = ((100 - distance) / 100) * 0.2
            ctx.strokeStyle = particle.color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, count, colors])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  )
}

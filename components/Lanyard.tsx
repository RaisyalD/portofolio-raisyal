"use client"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import ProfileCard from "./ProfileCard"

interface LanyardProps {
  position?: [number, number, number]
  gravity?: [number, number, number]
  fov?: number
  transparent?: boolean
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
}: LanyardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      // Calculate normalized mouse position (-1 to 1)
      const normalizedX = (clientX / windowWidth) * 2 - 1
      const normalizedY = (clientY / windowHeight) * 2 - 1

      setMousePosition({ x: normalizedX, y: normalizedY })

      // Animate the card based on mouse position
      controls.start({
        x: normalizedX * 20,
        y: normalizedY * 20,
        rotateX: -normalizedY * 10,
        rotateY: normalizedX * 10,
        transition: { type: "spring", stiffness: 100, damping: 30 },
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [controls])

  // Simulate lanyard swinging effect
  const swingAnimation = {
    initial: { rotate: -5 },
    animate: {
      rotate: 5,
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center">
      <motion.div
        className="relative"
        initial={swingAnimation.initial}
        animate={swingAnimation.animate}
        style={{ transformOrigin: "top center" }}
      >
        {/* Lanyard string */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-white to-gray-400 rounded-full" />

        {/* Card container */}
        <motion.div animate={controls} className="relative">
          <ProfileCard />
        </motion.div>
      </motion.div>
    </div>
  )
}

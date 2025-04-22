"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function ProfileCard() {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseX = (e.clientX - rect.left) / width - 0.5
      const mouseY = (e.clientY - rect.top) / height - 0.5

      setMouseX(mouseX)
      setMouseY(mouseY)
      setRotateY(mouseX * 20) // Rotate more for more dramatic effect
      setRotateX(-mouseY * 20)
    }

    const handleMouseLeave = () => {
      setRotateX(0)
      setRotateY(0)
    }

    const card = document.getElementById("profile-card")
    if (card) {
      card.addEventListener("mousemove", handleMouseMove)
      card.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-full perspective-1000">
      <motion.div
        id="profile-card"
        className="relative w-72 h-96 rounded-2xl cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Card className="absolute w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm border-2 border-neutral-800 shadow-xl">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#C6F10E] mb-6">
              <img src="/images/profile1.jpeg" alt="Raisyal D" className="w-full h-full object-cover" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Raisyal D</h2>
            <p className="text-[#C6F10E] font-medium mb-4">Front-End Developer</p>

            <div className="text-center text-neutral-300 text-sm">
              <p>Information Technology and Systems Education Student</p>
              <p>Universitas Pendidikan Indonesia</p>
            </div>

            <div className="mt-6 flex space-x-3">
              <div className="px-3 py-1 bg-[#C6F10E]/20 rounded-full text-[#C6F10E] text-xs">React</div>
              <div className="px-3 py-1 bg-[#C6F10E]/20 rounded-full text-[#C6F10E] text-xs">Next.js</div>
              <div className="px-3 py-1 bg-[#C6F10E]/20 rounded-full text-[#C6F10E] text-xs">UI/UX</div>
            </div>
          </div>

          {/* Reflective effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-30"
            style={{
              background: `radial-gradient(circle at ${mouseX * 100 + 50}% ${mouseY * 100 + 50}%, rgba(255, 255, 255, 0.2), transparent 40%)`,
            }}
          />
        </Card>
      </motion.div>
    </div>
  )
}

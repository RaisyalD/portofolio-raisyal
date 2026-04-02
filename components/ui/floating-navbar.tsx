"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  link: string
  icon?: React.ReactNode
}

interface FloatingNavProps extends React.HTMLAttributes<HTMLElement> {
  navItems: NavItem[]
}

export function FloatingNav({ navItems, className, ...props }: FloatingNavProps) {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/30 backdrop-blur-md shadow-lg z-50 px-4 py-2 items-center justify-center space-x-4",
          className,
        )}
        {...props}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 hover:text-[#C6F10E] focus:text-[#C6F10E] focus:outline-none text-sm transition-colors",
            )}
          >
            {navItem.icon && <span className="block sm:hidden">{navItem.icon}</span>}
            <span className="text-sm">{navItem.name}</span>
          </a>
        ))}
      </motion.nav>
    </AnimatePresence>
  )
}

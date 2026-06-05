'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const increment = value / (duration * 60)
    let currentCount = 0
    const interval = setInterval(() => {
      currentCount += increment
      if (currentCount >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(Math.floor(currentCount))
      }
    }, 1000 / 60)
    return () => clearInterval(interval)
  }, [value, duration])

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-5xl md:text-6xl font-bold gradient-text"
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  )
}

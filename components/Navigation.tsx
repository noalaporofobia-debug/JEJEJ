'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { navbarVariants } from './animations'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '#hero-section' },
    { label: 'Ejemplos', href: '#examples-section' },
    { label: 'Acciones', href: '#action-section' },
  ]

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: isScrolled 
          ? 'linear-gradient(180deg, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0.8) 100%)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(59, 130, 246, 0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-bold text-xl"
          style={{ color: '#ffffff' }}
        >
          No a la Aporofobia
        </motion.div>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ y: -2 }}
              className="transition-colors duration-300"
              style={{ color: '#f0f0f0' }}
              onHoverStart={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = '#3b82f6'
              }}
              onHoverEnd={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = '#f0f0f0'
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>


      </div>
    </motion.nav>
  )
}

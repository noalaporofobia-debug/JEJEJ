'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { floatVariants, bounceInVariants, pulseVariants } from '../animations'

// Particulas flotantes
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1})`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Texto animado letra por letra
function AnimatedTitle({ text, gradient = false }: { text: string; gradient?: boolean }) {
  return (
    <span className={gradient ? 'gradient-text' : ''}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.03,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

// Orbes de luz animados
function LightOrbs() {
  return (
    <>
      {/* Orbe principal */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -30, 0, 30, 0],
          scale: [1, 1.2, 1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Orbe secundario */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(30, 58, 138, 0.4) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 40, 0, -40, 0],
          scale: [1, 0.9, 1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Orbe terciario */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -50, 0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </>
  )
}

// Lineas de luz animadas
function LightRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[200vh] w-px"
          style={{
            left: `${20 + i * 15}%`,
            top: '-50%',
            background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.1), transparent)',
            transform: 'rotate(15deg)',
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [0, 100, 200],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const scrollToNext = () => {
    const element = document.getElementById('examples-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-0 overflow-hidden" 
      id="hero-section"
      role="region"
      aria-label="Seccion principal - No a la Aporofobia"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <LightOrbs />
        <LightRays />
        <FloatingParticles />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 15, 15, 0.8) 70%)',
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="text-center max-w-5xl mx-auto z-10"
      >


        {/* Titulo principal con efecto parallax del mouse */}
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            <AnimatedTitle text="No a la " />
            <br className="hidden md:block" />
            <AnimatedTitle text="Aporofobia" gradient />
          </h1>
        </motion.div>

        {/* Subtitulo con efecto de typing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto text-balance"
          style={{ color: '#e5e7eb' }}
        >
          <motion.span
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            La discriminacion economica existe.
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 2 }}
            className="gradient-text font-semibold"
          >
            Aprende que es y como combatirla.
          </motion.span>
        </motion.p>

        {/* Stats mini preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="flex justify-center gap-8 mb-12 flex-wrap"
        >
          {[
            { value: '700M+', label: 'En pobreza extrema' },
            { value: '1/10', label: 'De la poblacion mundial' },
            { value: '2017', label: 'Reconocida en Espana' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.7 + i * 0.2 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm" style={{ color: '#9ca3af' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botones de accion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="button-primary text-lg px-8 py-4 relative overflow-hidden group"
            aria-label="Conocer mas sobre aporofobia"
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%', skewX: '-15deg' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Descubre mas
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>


        </motion.div>


      </motion.div>
    </section>
  )
}

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
    const element = document.getElementById('what-is-section')
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
        {/* Badge animado */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block"
        >
          <motion.span
            className="px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2"
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: '#3b82f6',
            }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(59, 130, 246, 0.4)',
                '0 0 0 10px rgba(59, 130, 246, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-blue-500"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Proyecto de Conciencia Social 2026
          </motion.span>
        </motion.div>

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

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold border border-white/20 text-white/80 hover:text-white transition-all"
          >
            Ver estadisticas
          </motion.button>
        </motion.div>

        {/* Scroll indicator mejorado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="mt-16 md:mt-24 flex flex-col items-center gap-2"
        >
          <motion.span
            className="text-xs uppercase tracking-widest"
            style={{ color: '#6b7280' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll para explorar
          </motion.span>
          <motion.button
            onClick={scrollToNext}
            className="p-3 rounded-full relative"
            style={{
              border: '2px solid rgba(59, 130, 246, 0.3)',
              background: 'rgba(59, 130, 246, 0.05)',
            }}
            whileHover={{ scale: 1.1, borderColor: 'rgba(59, 130, 246, 0.6)' }}
            aria-label="Desplazarse hacia abajo"
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: '2px solid rgba(59, 130, 246, 0.5)' }}
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: '#3b82f6' }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

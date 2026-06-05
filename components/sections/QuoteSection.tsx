'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { revealVariants, floatVariants } from '../animations'

export function QuoteSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  const quote = "La dignidad humana no depende del dinero."

  return (
    <section 
      ref={ref}
      className="relative py-40 md:py-56 flex items-center justify-center overflow-hidden"
      role="region"
      aria-label="Cita destacada"
    >
      {/* Multi-layer animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Central glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        {/* Orbiting circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full"
            style={{
              background: `rgba(59, 130, 246, ${0.3 + i * 0.2})`,
              boxShadow: `0 0 20px rgba(59, 130, 246, ${0.5 + i * 0.1})`,
            }}
            animate={{
              rotate: 360,
              x: Math.cos(i * 2) * (150 + i * 50),
              y: Math.sin(i * 2) * (150 + i * 50),
            }}
            transition={{
              rotate: { duration: 10 + i * 5, repeat: Infinity, ease: 'linear' },
              x: { duration: 8 + i * 3, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 8 + i * 3, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-blue-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50 - Math.random() * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ scale, opacity, rotate }}
        className="text-center max-w-5xl mx-auto px-4 relative"
      >
        {/* Animated quote icon */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="mb-10 inline-block relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="relative p-6 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.1))',
              border: '2px solid rgba(59, 130, 246, 0.3)',
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.2)',
                '0 0 40px rgba(59, 130, 246, 0.4)',
                '0 0 20px rgba(59, 130, 246, 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ color: '#3b82f6' }}
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.25-2-6-2s-6 .75-6 2v10c0 1 0 4 6 4z" />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Quote with letter-by-letter animation */}
        <blockquote className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight">
          <motion.span className="inline-block">
            &quot;
            {quote.split('').map((char, i) => (
              <motion.span
                key={i}
                className="gradient-text inline-block"
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.03,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                style={{
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            &quot;
          </motion.span>
        </blockquote>

        {/* Subtitle with fade in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto"
          style={{ color: '#9ca3af' }}
        >
          Cada persona merece respeto y oportunidades,{' '}
          <motion.span
            className="text-blue-400 font-semibold"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            sin importar su situacion economica.
          </motion.span>
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mt-12 mx-auto w-32 h-1 rounded-full overflow-hidden"
          style={{ background: 'rgba(59, 130, 246, 0.2)' }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

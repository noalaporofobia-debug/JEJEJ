'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainerVariants, staggerCardVariants, slideLeftVariants, slideRightVariants } from '../animations'

export function WhatIsSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const definitions = [
    {
      title: '¿Que es la Aporofobia?',
      description:
        'La aporofobia es la discriminacion, rechazo o fobia hacia las personas pobres o sin recursos economicos. Es un prejuicio basado en la situacion economica de una persona.',
      icon: '🔍',
      color: '#3b82f6',
    },
    {
      title: 'Un Problema Real',
      description:
        'Afecta a millones de personas en todo el mundo. Se manifiesta en la educacion, el trabajo, la salud y el acceso a servicios basicos.',
      icon: '⚠️',
      color: '#f59e0b',
    },
    {
      title: 'Consecuencias Graves',
      description:
        'Perpetua la desigualdad, limita oportunidades y dana la dignidad de las personas. Afecta la salud mental y fisica de quienes la sufren.',
      icon: '💔',
      color: '#ef4444',
    },
    {
      title: 'Combatir Juntos',
      description:
        'La conciencia y educacion son clave. Reconocer nuestros prejuicios es el primer paso para construir una sociedad mas justa e inclusiva.',
      icon: '🤝',
      color: '#10b981',
    },
  ]

  return (
    <section 
      ref={ref}
      id="what-is-section" 
      className="section-container relative overflow-hidden" 
      role="region"
      aria-label="Entendiendo la Aporofobia"
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainerVariants}
      >
        {/* Title with enhanced animation */}
        <motion.div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-5xl mb-4"
          >
            📖
          </motion.span>
          <motion.h2
            variants={staggerCardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: '#ffffff' }}
          >
            Entendiendo la{' '}
            <motion.span 
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Aporofobia
            </motion.span>
          </motion.h2>
          <motion.p
            variants={staggerCardVariants}
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: '#9ca3af' }}
          >
            Conoce el fenomeno que afecta a millones de personas en el mundo
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {definitions.map((item, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideLeftVariants : slideRightVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              className="glass glass-hover p-8 group relative overflow-hidden"
            >
              {/* Animated corner decoration */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${item.color}20, transparent)` }}
              />
              


              {/* Icon with animation */}
              <motion.div 
                className="inline-flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.span
                  className="text-4xl"
                  animate={{ 
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {item.icon}
                </motion.span>
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 relative inline-block" style={{ color: item.color }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed relative z-10" style={{ color: '#e5e7eb' }}>
                {item.description}
              </p>


            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

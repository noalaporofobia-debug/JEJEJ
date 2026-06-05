'use client'

import { motion } from 'framer-motion'
import { staggerContainerVariants, staggerCardVariants, slideLeftVariants, slideRightVariants } from '../animations'
import { timeline } from '@/lib/data'

export function TimelineSection() {
  return (
    <section
      className="section-container"
      role="region"
      aria-label="Línea de tiempo histórica de aporofobia"
    >
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-16"
      >
        <div className="text-center space-y-4">
          <motion.h2 variants={staggerCardVariants} className="text-5xl font-bold" style={{ color: '#ffffff' }}>
            <span className="gradient-text">Línea de Tiempo</span> Histórica
          </motion.h2>
          <motion.p variants={staggerCardVariants} style={{ color: '#f0f0f0' }}>
            Hitos importantes en la lucha contra la aporofobia y la desigualdad
          </motion.p>
        </div>

        <div className="space-y-8 relative">
          {/* Línea vertical animada */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-light via-accent-dark to-transparent opacity-30"></div>

          {timeline.map((event, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideLeftVariants : slideRightVariants}
              className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Punto en la línea */}
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="w-4 h-4 rounded-full bg-accent-light flex-shrink-0 relative"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: ['0 0 10px rgba(59, 130, 246, 0.4)', '0 0 30px rgba(59, 130, 246, 0.8)', '0 0 10px rgba(59, 130, 246, 0.4)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full"
                />
              </motion.div>

              {/* Contenido */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass glass-hover p-6 flex-1"
              >
                <div className="text-accent-light font-bold text-lg mb-2">{event.year}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#ffffff' }}>
                  {event.title}
                </h3>
                <p style={{ color: '#f0f0f0' }} className="mb-3">
                  {event.description}
                </p>
                <p className="text-sm" style={{ color: '#9ca3af' }}>
                  Impacto: {event.impact}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

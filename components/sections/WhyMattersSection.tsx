'use client'

import { motion } from 'framer-motion'
import { scrollScaleVariants, staggerContainerVariants, staggerCardVariants } from '../animations'
import { statistics } from '@/lib/data'

export function WhyMattersSection() {
  return (
    <section 
      className="section-container"
      role="region"
      aria-label="Por qué la aporofobia importa"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainerVariants}
        className="space-y-16"
      >
        <div className="text-center space-y-4 mb-16">
          <motion.h2 variants={staggerCardVariants} className="text-4xl md:text-5xl font-bold" style={{ color: '#ffffff' }}>
            ¿Por qué <span className="gradient-text">importa?</span>
          </motion.h2>
          <motion.p variants={staggerCardVariants} className="text-lg max-w-2xl mx-auto" style={{ color: '#f0f0f0' }}>
            La desigualdad económica es una realidad global que requiere nuestra atención y acción inmediata.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              variants={scrollScaleVariants}
              className="glass glass-hover p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                {stat.number}
              </div>
              <p style={{ color: '#f0f0f0' }} className="font-semibold mb-2">{stat.description}</p>
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                {stat.context}
              </p>
              <motion.a
                href={stat.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-4 inline-block opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: '#3b82f6' }}
              >
                Fuente verificada →
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={staggerCardVariants}
          className="glass glass-hover p-12 mt-12 relative group"
          style={{ borderLeft: '4px solid #3b82f6' }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-light/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>
              La solución está en nosotros
            </h3>
            <p className="leading-relaxed" style={{ color: '#f0f0f0' }}>
              Cada acción cuenta. Desde educarnos sobre estos temas hasta defender a quienes sufren discriminación, todos podemos contribuir a cambiar esta realidad. La conciencia es el primer paso hacia el cambio.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

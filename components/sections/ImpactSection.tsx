'use client'

import { motion } from 'framer-motion'
import { staggerContainerVariants, staggerCardVariants, scaleUpVariants, tilt3DVariants } from '../animations'
import { consequences } from '@/lib/data'

export function ImpactSection() {
  return (
    <section
      id="impact-section"
      className="section-container bg-gradient-to-b from-transparent via-accent-dark/5 to-transparent"
      role="region"
      aria-label="Consecuencias e impacto de la aporofobia"
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
            <span className="gradient-text">Consecuencias</span> Devastadoras
          </motion.h2>
          <motion.p variants={staggerCardVariants} className="text-xl max-w-3xl mx-auto" style={{ color: '#f0f0f0' }}>
            La aporofobia genera un impacto profundo en individuos, comunidades y sociedades
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consequences.map((consequence, index) => (
            <motion.div
              key={index}
              variants={scaleUpVariants}
              whileHover={{ y: -12, scale: 1.05 }}
              className="glass glass-hover p-8 group relative"
              style={{
                perspective: '1000px',
              }}
            >
              {/* Efecto de esquina decorativa */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-accent-light/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="text-accent-light text-4xl mb-4">{index + 1}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#ffffff' }}>
                  {consequence.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#f0f0f0' }}>
                  {consequence.impact}
                </p>
              </div>

              {/* Línea animada inferior */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-light to-accent-dark"
              />
            </motion.div>
          ))}
        </div>

        {/* Callout destacado */}
        <motion.div
          variants={staggerCardVariants}
          className="glass glass-hover p-12 text-center mt-16 relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-accent-light/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-dark/5 rounded-full"
          />

          <div className="relative z-10">
            <motion.h3 variants={staggerCardVariants} className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
              El costo humano es incalculable
            </motion.h3>
            <motion.p variants={staggerCardVariants} className="text-lg max-w-2xl mx-auto" style={{ color: '#f0f0f0' }}>
              Cada día, millones de personas enfrentan discriminación basada en su estatus económico. La aporofobia no solo afecta oportunidades, sino la dignidad y el valor que asignamos a cada vida humana.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

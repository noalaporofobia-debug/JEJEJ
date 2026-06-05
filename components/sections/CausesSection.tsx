'use client'

import { motion } from 'framer-motion'
import { staggerContainerVariants, staggerCardVariants, flipVariants, tilt3DVariants } from '../animations'
import { deepCauses } from '@/lib/data'

export function CausesSection() {
  return (
    <section
      className="section-container bg-gradient-to-b from-transparent via-accent-dark/5 to-transparent"
      role="region"
      aria-label="Causas profundas de la aporofobia"
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
            Raíces <span className="gradient-text">Profundas</span> de la Aporofobia
          </motion.h2>
          <motion.p variants={staggerCardVariants} className="text-xl max-w-3xl mx-auto" style={{ color: '#f0f0f0' }}>
            Comprendiendo los factores estructurales que perpetúan la discriminación económica
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {deepCauses.map((cause, index) => (
            <motion.div
              key={index}
              variants={flipVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="glass glass-hover p-8 relative overflow-hidden h-full"
                variants={tilt3DVariants}
                initial="initial"
                whileHover="whileHover"
              >
                {/* Fondo animado */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(-45deg, #3b82f6, #1e3a8a, #3b82f6)',
                    backgroundSize: '200% 200%',
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-8 -right-8 w-20 h-20 bg-accent-light/10 rounded-full"
                  />

                  <motion.div
                    animate={{ rotateX: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-5xl mb-4"
                  >
                    {index === 0 && '🏷️'}
                    {index === 1 && '📡'}
                    {index === 2 && '⚙️'}
                    {index === 3 && '💰'}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                    {cause.title}
                  </h3>

                  <p className="leading-relaxed" style={{ color: '#f0f0f0' }}>
                    {cause.description}
                  </p>


                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje destacado */}
        <motion.div
          variants={staggerCardVariants}
          className="glass p-12 text-center mt-12 relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-accent-light/5 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg italic max-w-2xl mx-auto leading-relaxed"
              style={{ color: '#f0f0f0' }}
            >
              "La aporofobia no surge del vacío. Es producto de sistemas, narrativas y estructuras que hemos construido colectivamente. Desmantelarla requiere el mismo esfuerzo conjunto."
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

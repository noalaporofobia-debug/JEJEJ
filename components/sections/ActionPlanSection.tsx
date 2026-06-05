'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { staggerContainerVariants, staggerCardVariants, accordionVariants, bounceInVariants } from '../animations'
import { actionPlan } from '@/lib/data'

export function ActionPlanSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section
      id="action-section"
      className="section-container"
      role="region"
      aria-label="Plan de accion contra la aporofobia"
    >
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-16"
      >
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h2 variants={staggerCardVariants} className="text-5xl font-bold" style={{ color: '#ffffff' }}>
            Plan de <span className="gradient-text">Accion</span>
          </motion.h2>
          <motion.p variants={staggerCardVariants} className="text-xl" style={{ color: '#f0f0f0' }}>
            Pasos concretos que podes hacer ahora para combatir la aporofobia en tu comunidad
          </motion.p>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto w-full">
          {actionPlan.map((plan, index) => (
            <motion.div
              key={index}
              variants={staggerCardVariants}
              whileHover={{ scale: 1.02 }}
              className="glass glass-hover overflow-hidden cursor-pointer"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4 text-left">
                  <motion.div
                    animate={{ scale: expandedIndex === index ? 1.2 : 1 }}
                    className="w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-xl font-bold" style={{ color: '#3b82f6' }}>
                      {plan.step}
                    </span>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: '#ffffff' }}>
                      {plan.title}
                    </h3>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      {plan.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#3b82f6' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-8 pb-8 border-t border-white/10"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-4"
                    >
                      <p style={{ color: '#f0f0f0' }} className="text-lg font-semibold">
                        Acciones concretas:
                      </p>
                      <ul className="space-y-3">
                        {plan.actions.map((action, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.15 + i * 0.05 }}
                              className="mt-1 text-accent-light text-xl"
                            >
                              ✓
                            </motion.span>
                            <span style={{ color: '#f0f0f0' }}>{action}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Progreso visual */}
        <motion.div
          variants={staggerCardVariants}
          className="mt-16 p-8 glass text-center"
        >
          <p className="text-sm uppercase tracking-wider mb-6" style={{ color: '#9ca3af' }}>
            Tu progreso en 5 pasos
          </p>
          <div className="flex items-center justify-between gap-4">
            {actionPlan.map((_, i) => (
              <motion.div
                key={i}
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="h-2 flex-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, #3b82f6, #1e3a8a)' }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

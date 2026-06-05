'use client'

import { motion } from 'framer-motion'
import { revealVariants } from '../animations'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0) 0%, rgba(15,15,15,1) 100%)', borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}
      role="contentinfo"
      aria-label="Pie de página"
    >
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="section-container text-center space-y-8 py-16"
      >
        <div className="space-y-2">
          <h3 className="text-3xl font-bold" style={{ color: '#ffffff' }}>
            No a la <span className="gradient-text">Aporofobia</span>
          </h3>
          <p className="text-base" style={{ color: '#f0f0f0' }}>
            Proyecto de conciencia escolar
          </p>
        </div>

        <div className="premium-divider"></div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <motion.a 
            href="#" 
            className="smooth-transition hover:text-accent-light group" 
            style={{ color: '#9ca3af' }}
            whileHover={{ scale: 1.1 }}
          >
            Inicio
          </motion.a>
          <motion.a 
            href="#examples-section" 
            className="smooth-transition hover:text-accent-light group" 
            style={{ color: '#9ca3af' }}
            whileHover={{ scale: 1.1 }}
          >
            Aprende
          </motion.a>
          <motion.a 
            href="#" 
            className="smooth-transition hover:text-accent-light group" 
            style={{ color: '#9ca3af' }}
            whileHover={{ scale: 1.1 }}
          >
            Contacto
          </motion.a>
          <motion.a 
            href="#" 
            className="smooth-transition hover:text-accent-light group" 
            style={{ color: '#9ca3af' }}
            whileHover={{ scale: 1.1 }}
          >
            Privacidad
          </motion.a>
        </div>

        <div className="premium-divider"></div>

        <div className="space-y-2">
          <p className="text-sm" style={{ color: '#9ca3af' }}>
            © {currentYear} No a la Aporofobia. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: '#6b7280' }}>
            Promoviendo conciencia sobre la discriminación económica
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

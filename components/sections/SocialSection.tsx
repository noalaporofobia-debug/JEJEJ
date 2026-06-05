'use client'

import { motion } from 'framer-motion'
import { staggerContainerVariants, staggerCardVariants, buttonHoverVariants } from '../animations'

export function SocialSection() {
  const socials = [
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://www.instagram.com/noalaporofobia/',
    },
    {
      name: 'TikTok',
      icon: '🎵',
      url: 'https://www.tiktok.com/@noalaporofobia',
    },
    {
      name: 'X',
      icon: '𝕏',
      url: 'https://x.com/noalaporofobia',
    },
  ]

  return (
    <section 
      className="section-container bg-gradient-to-b from-transparent via-accent-dark/5 to-transparent"
      role="region"
      aria-label="Siguenos en redes sociales"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainerVariants}
      >
        <motion.div
          variants={staggerCardVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Seguinos en <span className="gradient-text">Redes</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#f0f0f0' }}>
            Seguinos en redes sociales para estar al tanto y ser parte del cambio.
          </p>
        </motion.div>

        <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6 mb-16">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerCardVariants}
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="glass glass-hover px-6 py-3 inline-flex items-center gap-3 group"
            >
              <span className="text-2xl group-hover:scale-130 transition-transform duration-300">
                {social.icon}
              </span>
              <span className="font-semibold text-sm md:text-base" style={{ color: '#ffffff' }}>{social.name}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          variants={staggerCardVariants}
          className="mt-16 p-8 glass glass-hover text-center max-w-2xl mx-auto"
        >
          <p className="text-sm md:text-base" style={{ color: '#d1d5db' }}>
            Comparti tu historia. Aprende de otros. <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>Juntos construimos una sociedad sin aporofobia.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

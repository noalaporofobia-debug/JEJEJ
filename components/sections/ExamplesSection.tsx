'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { staggerContainerVariants, staggerCardVariants } from '../animations'

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set((mouseX / width) - 0.5)
    y.set((mouseY / height) - 0.5)
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <div style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15), transparent 50%)',
          }}
        />
      )}
    </motion.div>
  )
}

export function ExamplesSection() {
  const examples = [
    {
      icon: '🏠',
      title: 'Vivienda',
      description: 'Discriminacion al acceder a un hogar por falta de recursos economicos o historial crediticio.',
      stats: '40%',
      statsLabel: 'sin hogar estable',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: '🎓',
      title: 'Educacion',
      description: 'Estigmatizacion en escuelas por no poder acceder a recursos educativos o materiales caros.',
      stats: '258M',
      statsLabel: 'ninos sin escuela',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: '💼',
      title: 'Empleo',
      description: 'Rechazos en entrevistas basados en apariencia, codigo postal o antecedentes socioeconomicos.',
      stats: '67%',
      statsLabel: 'desempleo juvenil',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: '🏥',
      title: 'Salud',
      description: 'Trato discriminatorio en centros de salud o denegacion de servicios por falta de pago.',
      stats: '400M',
      statsLabel: 'sin atencion medica',
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section 
      id="examples-section"
      className="section-container relative overflow-hidden"
      role="region"
      aria-label="Ejemplos en la vida real"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(59, 130, 246, ${0.05 + i * 0.02}) 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainerVariants}
      >
        {/* Header with floating elements */}
        <motion.div className="text-center mb-16 relative">
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-6xl opacity-20">🌍</span>
          </motion.div>
          
          <motion.h2
            variants={staggerCardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: '#ffffff' }}
          >
            Ejemplos en la{' '}
            <motion.span 
              className="gradient-text inline-block relative"
              whileHover={{ scale: 1.05 }}
            >
              Vida Real
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.span>
          </motion.h2>

          <motion.p
            variants={staggerCardVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: '#9ca3af' }}
          >
            La aporofobia se manifiesta en multiples aspectos de la sociedad
          </motion.p>
        </motion.div>

        {/* Cards with 3D effect */}
        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
          {examples.map((example, index) => (
            <TiltCard
              key={index}
              className="glass glass-hover p-8 relative overflow-hidden cursor-pointer"
            >
              <motion.div
                variants={staggerCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Gradient corner */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${example.gradient} opacity-20 blur-2xl`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                />

                {/* Icon with bounce */}
                <motion.div 
                  className="text-6xl mb-6 relative z-10 inline-block"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  {example.icon}
                </motion.div>

                {/* Stats badge */}
                <motion.div
                  className="absolute top-4 right-4 text-right"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${example.gradient} bg-clip-text text-transparent`}>
                    {example.stats}
                  </div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>
                    {example.statsLabel}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 relative z-10" style={{ color: '#ffffff' }}>
                  {example.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed relative z-10" style={{ color: '#d1d5db' }}>
                  {example.description}
                </p>


              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold text-white relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
              border: '1px solid rgba(59, 130, 246, 0.3)',
            }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Ver mas ejemplos
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

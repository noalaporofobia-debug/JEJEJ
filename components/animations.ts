// ===== BASIC ENTRANCE ANIMATIONS =====
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const slideUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const blurInVariants = {
  hidden: { opacity: 0, filter: 'blur(20px)', y: 20 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const revealVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}



// ===== STAGGER ANIMATIONS =====
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const staggerCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ===== FLOAT & BREATHING ANIMATIONS =====
export const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const floatSmallVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
  },
}

// ===== HOVER & INTERACTION ANIMATIONS =====
export const cardHoverVariants = {
  initial: { y: 0, scale: 1 },
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export const buttonHoverVariants = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
}



// ===== REVEAL & EXPAND ANIMATIONS =====
export const expandVariants = {
  hidden: { opacity: 0, width: 0, height: 0 },
  visible: {
    opacity: 1,
    width: 'auto',
    height: 'auto',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// ===== SCROLL-TRIGGERED ANIMATIONS =====
export const scrollRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const scrollScaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
}

// ===== PARALLAX & DEPTH =====
export const parallaxContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const parallaxChildVariants = (offset = 50) => ({
  hidden: { opacity: 0, y: offset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
})

// ===== WAVE & BOUNCE ANIMATIONS =====
export const waveVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 0.6, repeat: Infinity },
  },
}

export const bounceInVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 8, stiffness: 100 },
  },
}

export const bounceVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' },
  },
}

// ===== FLIP & ROTATE ANIMATIONS =====
export const flipVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const rotateInVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6 },
  },
}

// ===== SLIDE LEFT & RIGHT =====
export const slideLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const slideRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// ===== 3D TILT HOVER =====
export const tilt3DVariants = {
  initial: { rotateX: 0, rotateY: 0 },
  whileHover: {
    rotateX: 5,
    rotateY: -5,
    transition: { duration: 0.3 },
  },
}

// ===== GLOW & PULSING =====
export const pulseVariants = {
  animate: {
    opacity: [1, 0.6, 1],
    transition: { duration: 2, repeat: Infinity },
  },
}

export const glowPulseVariants = {
  animate: {
    boxShadow: [
      '0 0 5px rgba(59, 130, 246, 0.3)',
      '0 0 20px rgba(59, 130, 246, 0.6)',
      '0 0 5px rgba(59, 130, 246, 0.3)',
    ],
    transition: { duration: 2, repeat: Infinity },
  },
}

// ===== LETTER BY LETTER REVEAL =====
export const letterRevealVariants = (index: number) => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 0.5 },
  },
})

// ===== NUMBER COUNTER ANIMATION =====
export const counterVariants = {
  animate: {
    transition: { duration: 2 },
  },
}

// ===== RIPPLE EFFECT =====
export const rippleVariants = {
  animate: {
    scale: [1, 1.5, 2],
    opacity: [1, 0.5, 0],
    transition: { duration: 0.6 },
  },
}

// ===== UNDERLINE ANIMATION =====
export const underlineVariants = {
  initial: { scaleX: 0 },
  whileHover: {
    scaleX: 1,
    transition: { duration: 0.3 },
  },
}

// ===== BACKGROUND SHIFT ANIMATION =====
export const bgShiftVariants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: { duration: 3, repeat: Infinity },
  },
}

// ===== ORBE FLOTANTE =====
export const orbeVariants = (duration = 6, delay = 0) => ({
  animate: {
    y: [0, -30, 0],
    x: [0, 20, 0],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration, repeat: Infinity, delay, ease: 'easeInOut' },
  },
})

// ===== ICON ROTATION =====
export const iconRotateVariants = {
  initial: { rotate: 0 },
  whileHover: {
    rotate: 360,
    transition: { duration: 0.6 },
  },
}

// ===== ACCORDION EXPAND/COLLAPSE =====
export const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3 },
  },
}

// ===== MODAL ANIMATIONS =====
export const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}

export const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: { opacity: 0, scale: 0.9 },
}

// ===== TOOLTIP ANIMATION =====
export const tooltipVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
}

// ===== LOADING SPINNER =====
export const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
}

// ===== PROGRESS BAR =====
export const progressVariants = {
  animate: { scaleX: 1 },
  transition: { duration: 0.8, ease: 'easeOut' },
}

// ===== STAGGER FAST (Para listas grandes) =====
export const staggerFastContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export const staggerFastItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

// ===== TEXT SHIFT COLOR =====
export const textShiftVariants = {
  initial: { color: '#f0f0f0' },
  whileHover: {
    color: '#3b82f6',
    transition: { duration: 0.3 },
  },
}

// ===== SCALE UP CENTER =====
export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// ===== FADE IN BLUR OUT =====
export const fadeBlurVariants = {
  animate: {
    opacity: [0, 1, 0],
    filter: ['blur(10px)', 'blur(0px)', 'blur(10px)'],
    transition: { duration: 3, repeat: Infinity },
  },
}

// ===== MULTI STAGGER (3 COLUMNAS) =====
export const multiStaggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// ===== NAVBAR ANIMATION =====
export const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

// ===== DROPDOWN MENU =====
export const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
}

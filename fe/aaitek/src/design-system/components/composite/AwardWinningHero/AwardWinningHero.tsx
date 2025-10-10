'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

interface Slide {
  id: string
  image: string
  imageAlt: string
  title: string
  subtitle: string
  cta: {
    text: string
    href: string
    variant?: 'primary' | 'secondary'
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

interface AwardWinningHeroProps {
  slides: Slide[]
  autoplay?: boolean
  autoplayDelay?: number
}

export const AwardWinningHero: React.FC<AwardWinningHeroProps> = ({
  slides,
  autoplay = true,
  autoplayDelay = 6000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const previousSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }, [currentSlide])

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(nextSlide, autoplayDelay)
    return () => clearInterval(interval)
  }, [isPlaying, autoplayDelay, nextSlide])

  // Award-winning animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      scale: 0.95,
      opacity: 0
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      scale: 1.05,
      opacity: 0
    })
  }

  const contentVariants = {
    initial: { opacity: 0, y: 60, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 1.05,
      transition: { duration: 0.4 }
    }
  }

  const titleVariants = {
    initial: { opacity: 0, y: 40, rotateX: -15 },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  }

  const subtitleVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  }

  const buttonVariants = {
    initial: { opacity: 0, y: 25, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Slide Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 40 },
              scale: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
              opacity: { duration: 0.6 }
            }}
            className="absolute inset-0"
          >
            {/* Background Image with Parallax Effect */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
              {/* Advanced Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
            </motion.div>

            {/* Content with Advanced Animations */}
            <motion.div
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative z-10 h-full flex items-center"
            >
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-4xl">
                  <motion.h1
                    variants={titleVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    variants={subtitleVariants}
                    className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>

                  <motion.div
                    variants={buttonVariants}
                    className="flex flex-col sm:flex-row gap-6"
                  >
                    <motion.a
                      href={slides[currentSlide].cta.href}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="group relative px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-black font-bold rounded-full overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">{slides[currentSlide].cta.text}</span>
                    </motion.a>

                    {slides[currentSlide].secondaryCta && (
                      <motion.a
                        href={slides[currentSlide].secondaryCta.href}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                      >
                        {slides[currentSlide].secondaryCta.text}
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Navigation Controls */}
      <motion.button
        onClick={previousSlide}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full backdrop-blur-md transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full backdrop-blur-md transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Play/Pause Button */}
      {autoplay && (
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-8 right-8 z-20 p-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full backdrop-blur-md transition-all"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
      )}

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`relative h-3 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'w-8 bg-brand-500 shadow-lg shadow-brand-500/50'
                : 'w-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-brand-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: autoplayDelay / 1000, ease: 'linear' }}
                key={currentSlide}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Animated Progress Bar */}
      {autoplay && isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-400 to-brand-600"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: autoplayDelay / 1000,
              ease: 'linear',
              repeat: Infinity
            }}
            key={currentSlide}
          />
        </div>
      )}

      {/* Floating Elements for Visual Appeal */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-brand-500/10 rounded-full blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-20 w-24 h-24 bg-brand-400/20 rounded-full blur-xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  )
}
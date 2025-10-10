/**
 * Modern HeroCarousel with Framer Motion
 * Award-winning carousel with smooth animations and accessibility
 */

'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { Button } from '../../ui/Button'
import { Typography } from '../../ui/Typography'
import { cn } from '../../../utils/cn'
import { getReducedMotionVariant } from '../../../utils/motion'

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

interface HeroCarouselProps {
  slides: Slide[]
  autoplay?: boolean
  autoplayDelay?: number
  showIndicators?: boolean
  showControls?: boolean
  className?: string
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  autoplay = true,
  autoplayDelay = 5000,
  showIndicators = true,
  showControls = true,
  className,
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

  const togglePlayback = useCallback(() => {
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [isPlaying, autoplayDelay, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          previousSlide()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextSlide()
          break
        case ' ':
          e.preventDefault()
          togglePlayback()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(slides.length - 1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToSlide, nextSlide, previousSlide, togglePlayback, slides.length])

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  const contentVariants = getReducedMotionVariant({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }) as Record<string, { opacity: number; y?: number; transition?: { duration: number; ease: string } }>

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  }

  return (
    <section
      className={cn(
        'relative w-full h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden bg-neutral-900',
        className
      )}
      role="region"
      aria-label="Hero carousel"
      aria-live="polite"
    >
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
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].imageAlt}
                fill
                priority={currentSlide === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content */}
            <motion.div
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative z-10 h-full flex items-center"
            >
              <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="max-w-4xl"
                >
                  <motion.div variants={staggerItem}>
                    <Typography
                      variant="display"
                      className="text-white mb-6 max-w-3xl"
                      color="white"
                    >
                      {slides[currentSlide].title}
                    </Typography>
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <Typography
                      variant="bodyLarge"
                      className="text-neutral-200 mb-8 max-w-2xl leading-relaxed"
                    >
                      {slides[currentSlide].subtitle}
                    </Typography>
                  </motion.div>

                  <motion.div
                    variants={staggerItem}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button
                      variant={slides[currentSlide].cta.variant || 'primary'}
                      size="lg"
                      asChild
                      className="hover:scale-105 transform transition-transform"
                    >
                      <a href={slides[currentSlide].cta.href}>
                        {slides[currentSlide].cta.text}
                      </a>
                    </Button>

                    {slides[currentSlide].secondaryCta && (
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
                      >
                        <a href={slides[currentSlide].secondaryCta.href}>
                          {slides[currentSlide].secondaryCta.text}
                        </a>
                      </Button>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={previousSlide}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm h-12 w-12"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm h-12 w-12"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Play/Pause Button */}
      {autoplay && (
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlayback}
          className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm h-10 w-10"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      )}

      {/* Slide Indicators */}
      {showIndicators && (
        <div
          className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"
          role="tablist"
          aria-label="Slide indicators"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                'focus:outline-none focus-ring',
                index === currentSlide
                  ? 'bg-brand-500 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              )}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoplay && isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <motion.div
            className="h-full bg-brand-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: autoplayDelay / 1000, ease: 'linear' }}
            key={currentSlide}
          />
        </div>
      )}

      {/* Screen Reader Updates */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].title}
      </div>
    </section>
  )
}
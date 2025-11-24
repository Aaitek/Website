'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  variant?: 'fade' | 'slide' | 'scale' | 'typewriter';
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
  variant = 'fade'
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const letterVariants = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }
    },
    slide: {
      hidden: { x: -20, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      }
    },
    scale: {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: 'backOut'
        }
      }
    },
    typewriter: {
      hidden: { width: 0 },
      visible: {
        width: 'auto',
        transition: {
          duration: 0.05,
          ease: 'linear'
        }
      }
    }
  };

  if (variant === 'typewriter') {
    return (
      <motion.div
        className={`inline-block overflow-hidden ${className}`}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: { width: 0 },
          visible: {
            width: 'auto',
            transition: {
              duration: text.length * 0.05,
              ease: 'linear'
            }
          }
        }}
      >
        {text}
        <motion.span
          className="inline-block w-0.5 h-1em bg-[#FBD506] ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={`inline-block ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants[variant]}
          className="inline-block"
          style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Gradient text animation
interface GradientTextProps {
  text: string;
  className?: string;
  animate?: boolean;
}

export function GradientText({ text, className = '', animate = true }: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-[#FBD506] via-[#F4A607] to-[#FBD506] bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: animate ? '200% 200%' : '100% 100%'
      }}
      animate={animate ? {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      } : {}}
      transition={animate ? {
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      } : {}}
    >
      {text}
    </motion.span>
  );
}

// Typing effect with cursor
interface TypingEffectProps {
  texts: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

export function TypingEffect({
  texts,
  className = '',
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 2000
}: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      }, typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, texts, typeSpeed, deleteSpeed, delayBetween]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span
        className={`inline-block w-0.5 h-1em bg-[#FBD506] ml-1 transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
}

// Word reveal animation
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WordReveal({ text, className = '', delay = 0 }: WordRevealProps) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateX: -90
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
          style={{ perspective: '1000px' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
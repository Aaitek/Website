'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  glow?: boolean;
  tilt?: boolean;
  onClick?: () => void;
}

export default function ModernCard({
  children,
  className = '',
  href,
  glow = true,
  tilt = true,
  onClick
}: ModernCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    initial: { scale: 1, rotateX: "0deg", rotateY: "0deg" },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 0.4, transition: { duration: 0.2 } }
  };

  const Component = href ? 'a' : 'div';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`group relative cursor-pointer ${className}`}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        style={{ rotateX: tilt ? rotateX : 0, rotateY: tilt ? rotateY : 0 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full bg-gradient-to-br from-[#1E1E1E] to-[#262626] rounded-2xl border border-gray-800 overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:border-[#FBD506]/30"
      >
        {/* Glow effect */}
        {glow && (
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            className="absolute inset-0 bg-gradient-to-r from-[#FBD506]/20 via-transparent to-[#F4A607]/20 rounded-2xl"
            style={{
              background: `linear-gradient(135deg,
                rgba(251, 213, 6, 0.1) 0%,
                rgba(244, 166, 7, 0.05) 25%,
                transparent 50%,
                rgba(251, 213, 6, 0.05) 75%,
                rgba(244, 166, 7, 0.1) 100%
              )`
            }}
          />
        )}

        {/* Mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='rgba(251, 213, 6, 0.05)' /%3E%3Cstop offset='100%25' stop-color='transparent' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23g)' /%3E%3C/svg%3E")`
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 h-full">
          {children}
        </div>

        {/* Border shine effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#FBD506]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>
      </motion.div>
    </Component>
  );
}

// Preset card variants
export function BlogCard({ children, className, ...props }: ModernCardProps) {
  return (
    <ModernCard
      className={`h-full transform transition-all duration-300 hover:scale-[1.02] ${className}`}
      glow={true}
      tilt={true}
      {...props}
    >
      {children}
    </ModernCard>
  );
}

export function FeatureCard({ children, className, ...props }: ModernCardProps) {
  return (
    <ModernCard
      className={`h-full bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] ${className}`}
      glow={true}
      tilt={false}
      {...props}
    >
      {children}
    </ModernCard>
  );
}

export function GlassCard({ children, className, ...props }: ModernCardProps) {
  return (
    <ModernCard
      className={`h-full bg-white/5 backdrop-blur-xl border-white/10 ${className}`}
      glow={false}
      tilt={true}
      {...props}
    >
      {children}
    </ModernCard>
  );
}
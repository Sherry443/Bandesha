"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface SlideItem {
  src: string;
  stat: string;
  label: string;
  sub: string;
  accent: string;
}

const slides: SlideItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=90',
    stat: '$5M+',
    label: 'Revenue Generated',
    sub: 'Across all client portfolios',
    accent: '#f0a500',
  },
  {
    src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1400&q=90',
    stat: '300+',
    label: 'Stores Launched',
    sub: 'From concept to conversion',
    accent: '#e05c5c',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=90',
    stat: '200+',
    label: 'Projects Delivered',
    sub: 'On time, every time',
    accent: '#5ce0c0',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=90',
    stat: '50+',
    label: 'Brands Scaled',
    sub: 'Identity to influence',
    accent: '#a78bfa',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=90',
    stat: '8+ Yrs',
    label: 'Industry Experience',
    sub: 'Deep domain expertise',
    accent: '#f97316',
  },
  {
    src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&q=90',
    stat: '500+',
    label: 'Product Launches',
    sub: 'Memorable market entries',
    accent: '#34d399',
  },
  {
    src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=90',
    stat: '98%',
    label: 'Client Satisfaction',
    sub: 'Long-term partnerships',
    accent: '#60a5fa',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=90',
    stat: '12+',
    label: 'Countries Reached',
    sub: 'Global brand presence',
    accent: '#f43f5e',
  },
];

// ─── Individual slide component ───────────────────────────────────────────────
// Hooks are called at component top-level — never inside a .map() loop
function FocusSlide({
  slide,
  index,
  totalSlides,
  slideSize,
  scrollYProgress,
}: {
  slide: SlideItem;
  index: number;
  totalSlides: number;
  slideSize: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start     = index * slideSize;
  const end       = start + slideSize;
  const enterEnd  = start + slideSize * 0.3;
  const exitStart = end   - slideSize * 0.3;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + slideSize * 0.15, exitStart, end],
    [0, 1, 1, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    [0.88, 1, 1, 1.06],
  );
  const textY = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    [40, 0, 0, -40],
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [start + slideSize * 0.15, enterEnd, exitStart, end - slideSize * 0.1],
    [0, 1, 1, 0],
  );
  const lineWidth = useTransform(
    scrollYProgress,
    [start + slideSize * 0.2, enterEnd],
    ['0%', '100%'],
  );

  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: '4vh 6vw',
        scale,
        opacity,
        zIndex: 10 + index,
        borderRadius: '20px',
        overflow: 'hidden',
        willChange: 'transform, opacity',
        boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
      }}
    >
      {/* Background image */}
      <img
        src={slide.src}
        alt={slide.label}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        draggable={false}
      />

      {/* Gradient overlays — static, no animation cost */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.25) 45%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Slide badge */}
      <div style={{
        position: 'absolute', top: '2rem', right: '2rem',
        background: 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '100px',
        padding: '0.35rem 1rem',
        color: 'rgba(255,255,255,0.55)',
        fontSize: '0.72rem',
        letterSpacing: '0.15em',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {String(index + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>

      {/* Animated text block */}
      <motion.div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '3rem 3.5rem',
        y: textY,
        opacity: textOpacity,
      }}>
        {/* Accent line */}
        <div style={{ overflow: 'hidden', marginBottom: '1.25rem' }}>
          <motion.div style={{
            height: '2px',
            width: lineWidth,
            background: slide.accent,
            borderRadius: '2px',
          }} />
        </div>

        {/* Sub label */}
        <p style={{
          color: slide.accent,
          fontSize: '0.68rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          marginBottom: '0.5rem',
          opacity: 0.9,
        }}>
          {slide.sub}
        </p>

        {/* Big stat */}
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          lineHeight: 0.9,
          color: '#ffffff',
          letterSpacing: '0.02em',
          marginBottom: '0.6rem',
          textShadow: `0 0 60px ${slide.accent}50`,
        }}>
          {slide.stat}
        </p>

        {/* Label */}
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
          fontWeight: 300,
          letterSpacing: '0.08em',
          fontFamily: "'DM Sans', sans-serif",
          fontStyle: 'italic',
        }}>
          {slide.label}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Individual dot component ─────────────────────────────────────────────────
function DotItem({
  index,
  slideSize,
  scrollYProgress,
  accent,
}: {
  index: number;
  slideSize: number;
  scrollYProgress: MotionValue<number>;
  accent: string;
}) {
  const start = index * slideSize;
  const end   = start + slideSize;

  const dotScale = useTransform(
    scrollYProgress,
    [start, start + slideSize * 0.25, end - slideSize * 0.25, end],
    [1, 1.8, 1.8, 1],
  );
  const dotOpacity = useTransform(
    scrollYProgress,
    [start, start + slideSize * 0.25, end - slideSize * 0.25, end],
    [0.3, 1, 1, 0.3],
  );

  return (
    <motion.div
      style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: accent,
        scale: dotScale,
        opacity: dotOpacity,
      }}
    />
  );
}

// ─── Scroll hint ──────────────────────────────────────────────────────────────
function ScrollHint({
  scrollYProgress,
  slideSize,
}: {
  scrollYProgress: MotionValue<number>;
  slideSize: number;
}) {
  const opacity = useTransform(scrollYProgress, [0, slideSize * 0.5], [1, 0]);
  return (
    <motion.div
      style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.68rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        fontFamily: "'DM Sans', sans-serif",
        pointerEvents: 'none',
      }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))',
        }}
      />
      Scroll
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function CinematicScrollGallery(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out jitter — high stiffness = fast response, damping prevents overshoot
  const scrollYProgress = useSpring(rawProgress, {
    stiffness: 400,
    damping: 45,
    restDelta: 0.0005,
  });

  const totalSlides = slides.length;
  const slideSize   = 1 / totalSlides;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;1,9..40,300&display=swap');
        .cinematic-root * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div
        className="cinematic-root"
        ref={containerRef}
        style={{
          height: `${totalSlides * 100}vh`,
          background: '#080808',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Sticky viewport */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}>
          {/* Slides — each is a separate component so hooks are valid */}
          {slides.map((slide, i) => (
            <FocusSlide
              key={i}
              slide={slide}
              index={i}
              totalSlides={totalSlides}
              slideSize={slideSize}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Progress dots */}
          <div style={{
            position: 'absolute',
            right: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            zIndex: 999,
          }}>
            {slides.map((slide, i) => (
              <DotItem
                key={i}
                index={i}
                slideSize={slideSize}
                scrollYProgress={scrollYProgress}
                accent={slide.accent}
              />
            ))}
          </div>

          {/* Scroll hint */}
          <ScrollHint scrollYProgress={scrollYProgress} slideSize={slideSize} />
        </div>
      </div>
    </>
  );
}

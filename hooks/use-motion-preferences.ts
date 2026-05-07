'use client'

import { useEffect, useState } from 'react'

/**
 * Hook to detect user's motion preferences
 * Returns whether user prefers reduced motion
 */
export function useMotionPreferences() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Check if device is mobile/touch device
    const isTouchDevice = () => {
      return (
        (typeof window !== 'undefined' &&
          ('ontouchstart' in window ||
            (navigator as any).maxTouchPoints > 0 ||
            (navigator as any).msMaxTouchPoints > 0)) ||
        false
      )
    }

    setIsMobile(isTouchDevice())

    // Also check for small screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768 || isTouchDevice())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    prefersReducedMotion,
    isMobile,
    shouldReduceMotion: prefersReducedMotion || isMobile,
  }
}

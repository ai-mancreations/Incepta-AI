'use client'

import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  prefix?: string
  durationMs?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  durationMs = 1600,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const reduce = window.matchMedia(
              '(prefers-reduced-motion: reduce)',
            ).matches
            if (reduce) {
              setDisplay(value)
              return
            }
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / durationMs, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, durationMs])

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { EASE } from "../lib/motion"

// Extra scroll (px of wheel/touch delta) required at the bottom before navigating
const THRESHOLD = 450

/**
 * Shows a "keep scrolling" pill when the user reaches the bottom of the page.
 * Scrolling further past the bottom fills the progress bar and then navigates
 * to the next page automatically.
 */
export default function ScrollToNext({ to, label }) {
  const navigate = useNavigate()
  const [atBottom, setAtBottom] = useState(false)
  const [progress, setProgress] = useState(0)
  const acc = useRef(0)
  const fired = useRef(false)
  const touchY = useRef(null)

  useEffect(() => {
    const isAtBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24

    const reset = () => {
      acc.current = 0
      setProgress(0)
    }

    const bump = (delta) => {
      if (fired.current || !isAtBottom()) return
      acc.current = Math.min(acc.current + delta, THRESHOLD)
      setProgress(acc.current / THRESHOLD)
      if (acc.current >= THRESHOLD) {
        fired.current = true
        navigate(to)
      }
    }

    const onWheel = (e) => {
      if (e.deltaY > 0) bump(e.deltaY)
      else reset()
    }
    const onScroll = () => {
      const b = isAtBottom()
      setAtBottom(b)
      if (!b) reset()
    }
    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY
    }
    const onTouchMove = (e) => {
      if (touchY.current == null) return
      const dy = touchY.current - e.touches[0].clientY
      touchY.current = e.touches[0].clientY
      if (dy > 0) bump(dy * 2)
    }

    window.addEventListener("wheel", onWheel, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
    }
  }, [navigate, to])

  return (
    <AnimatePresence>
      {atBottom && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="pointer-events-none fixed bottom-5 left-1/2 z-[90] w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 sm:w-auto"
        >
          <div className="relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-line bg-paper/90 py-2.5 pl-5 pr-3 shadow-lg shadow-black/5 backdrop-blur-xl">
            {/* Progress fill */}
            <div
              className="absolute inset-y-0 left-0 w-full origin-left bg-accent/12 transition-transform duration-150 ease-out"
              style={{ transform: `scaleX(${progress})` }}
              aria-hidden="true"
            />

            <span className="relative truncate font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
              Keep scrolling — next:{" "}
              <span className="font-semibold text-accent-ink">{label}</span>
            </span>

            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

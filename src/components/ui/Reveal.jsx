import { motion, useReducedMotion } from "framer-motion"
import { EASE } from "../../lib/motion"

/**
 * Scroll-triggered reveal. Fires once, respects prefers-reduced-motion,
 * and animates transform/opacity only so it stays on the compositor.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  as = "div",
  once = true,
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div

  if (reduce) return <Tag className={className}>{children}</Tag>

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.65, ease: EASE, delay }}
      className={className}
    >
      {children}
    </Tag>
  )
}

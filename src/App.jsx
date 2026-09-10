import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar"
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import Portfolio from "./components/Pages/Portfolio"
import Home from "./components/Pages/Home"
import { EASE } from "./lib/motion"

// Jump to the top whenever the route changes (e.g. after auto scroll-to-next-page)
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])
  return null
}

/* Cross-fade between routes — short enough to never feel like a delay */
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28, ease: EASE }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-paper">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App

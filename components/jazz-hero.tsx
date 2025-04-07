"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLinkType = "home" | "about" | "music" | "tour" | "videos" | "contact"

interface JazzHeroProps {
  activeLink?: NavLinkType
}

export function JazzHero({ activeLink }: JazzHeroProps) {
  const pathname = usePathname()

  // Determine active link from pathname if not explicitly provided
  const determineActiveLink = (): NavLinkType => {
    if (activeLink) return activeLink

    if (pathname === "/") return "home"
    if (pathname === "/about") return "about"
    if (pathname === "/music") return "music"
    if (pathname === "/tour") return "tour"
    if (pathname === "/videos") return "videos"
    if (pathname === "/contact") return "contact"

    return "home"
  }

  const currentActiveLink = determineActiveLink()

  return (
    <section className="flex flex-col items-center justify-center min-h-screen relative">
      {/* Navigation bar */}
      <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-6 bg-[#1e1e1e] rounded-full px-6 py-2">
        <NavLink href="/" label="Home" isActive={currentActiveLink === "home"} />
        <NavLink href="/about" label="About" isActive={currentActiveLink === "about"} />
        <NavLink href="/music" label="Music" isActive={currentActiveLink === "music"} />
        <NavLink href="/tour" label="Tour" isActive={currentActiveLink === "tour"} />
        <NavLink href="/videos" label="Videos" isActive={currentActiveLink === "videos"} />
        <NavLink href="/contact" label="Contact" isActive={currentActiveLink === "contact"} />
      </nav>

      {/* Main content */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          Jag
        </motion.h1>
        <motion.p
          className="text-[#828282] mb-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          A dev, I'm just like that.
        </motion.p>
        <motion.button
          className="bg-transparent border border-[#454545] text-[#ffffff] px-4 py-2 rounded-full text-sm hover:bg-[#1e1e1e] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Watch
        </motion.button>
      </motion.div>
    </section>
  )
}

interface NavLinkProps {
  href: string
  label: string
  isActive?: boolean
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-xs ${isActive ? "text-white" : "text-[#828282]"} hover:text-white transition-colors`}
    >
      {label}
      {isActive && <motion.div className="h-[2px] bg-white mt-1" layoutId="activeNavIndicator" />}
    </Link>
  )
}


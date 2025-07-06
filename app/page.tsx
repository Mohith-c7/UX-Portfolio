"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Linkedin, Twitter, Instagram, Star, Zap } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { motion, useScroll, useTransform } from "framer-motion"
import GlassNav from "@/components/GlassNav"
import LogoM from "@/components/LogoM"
import { BackgroundBeams } from "@/components/ui/background-beams"
import Link from "next/link"
import Footer from "@/components/Footer"
// import { FloatingParticles } from "@/components/ui/floating-particles"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  // Experience timeline scroll progress
  const experienceRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"]
  })
  const timelineFillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  // Social icon hover preview state
  const [hoveredSocial, setHoveredSocial] = useState<null | "linkedin" | "github" | "behance">(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll();
  const scrollRotate = useTransform(scrollY, [0, 1000], [0, 180]);
  // Modal state for project messages
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Enhanced parallax effect for hero background
      if (heroRef.current && parallaxRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50

        parallaxRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.1)`
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Skip link for accessibility */}
      <a href="#hero" className="skip-link" onClick={(e) => {
        e.preventDefault()
        document.getElementById('hero')?.focus()
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
      }}>
        Skip to main content
      </a>
      
      {/* Navigation */}
      <GlassNav />

      {/* Hero Section with Interactive Background and Floating Particles */}
      <section
        id="hero"
        ref={heroRef}
        className="relative overflow-hidden pt-[120px] md:pt-[192px] pb-16 md:pb-28 min-h-screen"
        tabIndex={-1}
      >
        {/* Official Aceternity UI AuroraBackground */}
        <AuroraBackground className="absolute inset-0 w-full h-full z-0 md:z-0" showRadialGradient={true} style={{ opacity: 1, pointerEvents: 'none' }}>
          <div></div>
        </AuroraBackground>
        {/* Content */}
        <div className="relative w-full px-4 md:px-8 z-10">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="flex flex-col md:flex-row items-start gap-8 justify-center px-4 md:px-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                visible: { transition: { staggerChildren: 0.25 } },
                hidden: {},
              }}
            >
              {/* Left Side - Profile Section */}
              <motion.div
                className="w-full md:w-[35%] space-y-6 md:space-y-8"
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
                  {/* Profile Photo with animated ring */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                    {/* Profile Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 bg-white flex items-center justify-center">
                      <Image src="/profile.jpg" alt="Mohith Kumar" width={96} height={96} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-black mb-1">Mohith Kumar</h3>
                    <p className="text-[14px] md:text-[16px] text-gray-600 font-bold">UI/UX designer, developer</p>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center md:justify-start space-x-3 mt-2">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/mohith-kumar-chadalawada-37a90b2a1/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="w-9 h-9 md:w-10 md:h-10 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005983] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0077B5]"
                    onMouseEnter={e => { setHoveredSocial("linkedin"); setCursorPos({ x: e.clientX, y: e.clientY }) }}
                    onMouseMove={e => setCursorPos({ x: e.clientX, y: e.clientY })}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 448 448" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24.09 53.7-53.6 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.5s1.2-243.1 0-268.1h92.4v38c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a
                    href="https://github.com/Mohith-c7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                    className="w-9 h-9 md:w-10 md:h-10 bg-[#181717] rounded-full flex items-center justify-center hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-[#181717]"
                    onMouseEnter={e => { setHoveredSocial("github"); setCursorPos({ x: e.clientX, y: e.clientY }) }}
                    onMouseMove={e => setCursorPos({ x: e.clientX, y: e.clientY })}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  {/* Behance */}
                  <a
                    href="https://www.behance.net/mohith07" target="_blank" rel="noopener noreferrer" aria-label="Behance"
                    className="w-9 h-9 md:w-10 md:h-10 bg-[#1769ff] rounded-full flex items-center justify-center hover:bg-[#1558c0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1769ff]"
                    onMouseEnter={e => { setHoveredSocial("behance"); setCursorPos({ x: e.clientX, y: e.clientY }) }}
                    onMouseMove={e => setCursorPos({ x: e.clientX, y: e.clientY })}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="6" fill="none" />
                      <text x="6" y="23" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="18" fill="white">Bē</text>
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Right Side - Main Content */}
              <motion.div
                className="w-full md:w-[65%] space-y-6 md:space-y-8"
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
              >
                {/* Main Heading */}
                <motion.div
                  className="space-y-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.18 } },
                    hidden: {},
                  }}
                >
                  <motion.h1
                    className="text-[32px] sm:text-[40px] md:text-[64px] lg:text-[72px] leading-[1.1] font-semibold text-black text-center md:text-left"
                    variants={{
                      hidden: { opacity: 0, y: 40, scale: 0.96 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
                    }}
                  >
                    Hi! I'm Mohith
                  </motion.h1>

                  <motion.div
                    className="flex flex-col md:flex-row md:flex-wrap items-center gap-2 md:gap-4 text-center md:text-left"
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                    }}
                  >
                    <span className="text-[32px] sm:text-[40px] md:text-[64px] lg:text-[72px] leading-[1.05] md:leading-[1.1] font-bold text-black">a</span>
                    <motion.span
                      className="modern-badge px-4 py-2 md:px-6 md:py-3 text-[20px] sm:text-[24px] md:text-[40px] font-bold rounded-full shadow-xl cursor-pointer relative overflow-hidden border border-lime-300"
                      style={{ display: 'inline-block' }}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
                      }}
                      whileHover={{
                        scale: 1.04,
                        rotate: -3,
                        boxShadow: "0 8px 32px 0 #a3e63599, 0 2px 16px 0 #000",
                        background: "linear-gradient(90deg, #a3e635, #65a30d, #a3e635)",
                        transition: { type: "spring", stiffness: 220, damping: 16 }
                      }}
                    >
                      <span className="relative z-10">User Experience Designer</span>
                      <span className="badge-shine" />
                    </motion.span>
                    <motion.h2
                      className="text-[32px] sm:text-[40px] md:text-[64px] lg:text-[72px] leading-[1.05] md:leading-[1.1] font-bold text-black"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                      }}
                    >
                      turning your ideas into pixel-perfect realities
                    </motion.h2>
                  </motion.div>
                </motion.div>

                {/* Description */}
                <motion.div
                  className="relative text-center md:text-left"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                  }}
                >
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 leading-relaxed max-w-[600px] font-bold mx-auto md:mx-0">
                    I'm dedicated to crafting websites that bring your ideas to life, combining design and development
                    to deliver fast, impactful results.
                  </p>
                  {/* Years Experience positioned absolutely */}
                  <div className="absolute left-[-59%] top-1 pl-4 hidden md:block">
                    <span className="text-[20px] text-gray-500 font-bold">(2024 - present)</span>
                  </div>
                  {/* Mobile version of years experience */}
                  <div className="block md:hidden mt-4">
                    <span className="text-[16px] text-gray-500 font-bold">(2024 - present)</span>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="pt-6 md:pt-8 text-center md:text-left"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  <Button 
                    className="bg-lime-400 text-black hover:bg-lime-500 rounded-full px-8 py-4 md:px-10 md:py-5 text-[16px] md:text-[18px] font-bold h-auto group shadow-lg"
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See what i can do
                    <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="about" className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-8"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-5"></div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.05)_0%,transparent_50%)]"></div>
        </div>

        <motion.div
          className="relative z-50 max-w-[1400px] mx-auto px-4 md:px-8"
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-12 px-4 md:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-lime-400 inline-block"></span>
              <span className="text-gray-500 text-[20px] font-medium">{`{01}`} — My Story</span>
            </div>
            <motion.h2
              className="text-[48px] md:text-[72px] font-bold leading-[1.05] mb-8 md:mb-12 mt-4 md:mt-8 text-white drop-shadow-[0_0_32px_rgba(163,230,53,0.5)]"
              initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Designing stories,<br />building brands
            </motion.h2>
            <motion.div
              className="space-y-4 md:space-y-8 text-[16px] md:text-[18px] leading-[1.8] text-gray-300 relative z-50"
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.22 } },
                hidden: {},
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                <>I never thought I'd end up in <span className="text-lime-400 font-semibold">Design.</span> Back then, I was a tech enthusiast fascinated more by how things work than how they look. But one day, while struggling to navigate a cluttered government website, I found myself confused and unsure of what to click or where to go. That moment made me think how do <span className="text-white font-semibold">digital experiences</span> make users feel.</>,
                <>Curious to understand more, I began researching UI/UX and <span className="text-lime-400 font-semibold">Google UX Design Course </span>became my starting point, introducing me to the world of user research, empathy, design thinking, and the power of intuitive interfaces.</>,
                <>Designing my first app—a movie streaming platform—taught me how important consistency and feedback are in interfaces.Today, I approach every design problem with empathy, curiosity, and a love for <span className="text-white font-semibold">simplicity.</span> My goal is always the same: create experiences that feel effortless.</>,
                <>My <span className="text-white font-semibold">developement</span> background gives me the ability to bring those ideas to life without losing sight of the real humans behind the screen. Blending design with code lets me create not just beautiful interfaces—but <span className="text-lime-400 font-semibold">meaningful</span> and usable ones that truly help.</>
              ].map((content, idx) => (
                <motion.p
                  key={idx}
                  className="relative z-50 text-gray-300"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                  }}
                >
                  {content}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-lime-400 inline-block"></span>
              <span className="text-gray-500 text-[20px] font-medium">{`{02}`} — Featured projects</span>
            </div>
              <h2 className="text-[48px] md:text-[72px] font-bold leading-[1.05] mb-12 text-black">I blend creativity with<br/>technical expertise</h2>
            <Button 
              className="bg-lime-400 text-black hover:bg-lime-500 rounded-full px-10 py-5 text-[18px] font-bold h-auto group shadow-lg mb-16"
              onClick={() => window.location.href = 'mailto:iammohithkumar@gmail.com'}
            >
              Become a client
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-gray-300">
            {[
              {
                title: "VIT-AP University Website",
                category: "Informational UI",
                date: "13/05/2025",
                desc: "Website Design",
                image: "/vitapweb.png?height=320&width=480",
                link: "#",
              },
              {
                title: "AVY : AI-Powered Safety and Vigilance System",
                category: "Neomorphism",
                date: "28/12/2024",
                desc: "Website & App Design",
                image: "/avy.png?height=320&width=480",
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={
                  `flex flex-col justify-between border-b-2 border-r-2 border-gray-300 p-10 min-h-[420px] transition-colors duration-200 hover:bg-gray-50 cursor-pointer` +
                  (index === 0 ? '' : '')
                }
                onClick={() => {
                  setModalMessage("Case Study will update soon")
                  setShowModal(true)
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lime-400 font-bold text-[18px]">{'{'} {project.category} {'}'}</span>
                    <span className="text-gray-500 text-[16px]">{project.date}</span>
                  </div>
                  <h3 className="text-[36px] font-bold mb-1 text-black">{project.title}</h3>
                  <div className="text-gray-600 text-[18px] mb-4">{project.desc}</div>
                </div>
                <motion.div
                  className="overflow-hidden rounded-2xl mb-4"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-[200px] md:h-[320px] object-cover" />
                </motion.div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-l-2 border-r-2 border-gray-300">
            {/* First project */}
            <div 
              className="flex flex-col justify-between border-r-0 md:border-r-2 border-gray-300 p-6 md:p-10 min-h-[420px] transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                setModalMessage("Case Study will update soon")
                setShowModal(true)
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lime-400 font-bold text-[18px]">{'{'} Transactional UI {'}'}</span>
                  <span className="text-gray-500 text-[16px]">18/03/2025</span>
                </div>
                <h3 className="text-[28px] font-bold mb-1 text-black">Rotaract Hub- Job Portal</h3>
                <div className="text-gray-600 text-[16px] mb-4">Website design</div>
              </div>
              <motion.div
                className="overflow-hidden rounded-2xl mb-4"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <img src="/rotaract.png?height=320&width=480" alt="Rotaract Hub- Job Portal" className="w-full h-[200px] md:h-[320px] object-cover" />
              </motion.div>
            </div>
            {/* Second project */}
            <div 
              className="flex flex-col justify-between border-r-0 md:border-r-2 border-gray-300 p-6 md:p-10 min-h-[420px] transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                setModalMessage("Case Study will update soon")
                setShowModal(true)
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lime-400 font-bold text-[18px]">{'{'} Informational UI {'}'}</span>
                  <span className="text-gray-500 text-[16px]">28/04/2025</span>
                </div>
                <h3 className="text-[28px] font-bold mb-1 text-black">VTBIF</h3>
                <div className="text-gray-600 text-[16px] mb-4">Website Design & Development</div>
              </div>
              <motion.div
                className="overflow-hidden rounded-2xl mb-4"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <img src="/vtbif.png?height=320&width=480" alt="VTBIF" className="w-full h-[200px] md:h-[320px] object-cover" />
              </motion.div>
            </div>
            {/* View all projects lime box */}
            <motion.div
              initial={{ borderRadius: 24 }}
              whileHover={{ borderRadius: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-full h-full flex items-center justify-center border-r-0 md:border-r-2 border-gray-300 min-h-[420px] bg-lime-400 cursor-pointer text-center group"
              onClick={() => {
                setModalMessage("All projects will be added soon")
                setShowModal(true)
              }}
            >
              <span className="flex items-center gap-4 text-black text-[20px] font-medium max-w-full">
                View all projects
                <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-0 -rotate-45" />
                </span>
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 md:py-32 bg-black text-white overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8" ref={experienceRef}>
          <div className="mb-12 px-4 md:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-lime-400 inline-block"></span>
              <span className="text-gray-500 text-[18px] md:text-[20px] font-medium">{`{03}`} — Experience</span>
            </div>
            <h2 className="text-[48px] md:text-[72px] font-bold leading-[1.05] mb-16 md:mb-20 text-white">
              The Journey So Far : <br/>In Pixels & Progress
            </h2>
          </div>
          
          {/* Mobile Timeline Layout */}
          <div className="block md:hidden space-y-8 relative">
            {/* Constant gray line (full height) */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700 z-0" style={{height: '100%'}}></div>
            {/* Animated white line (fills on scroll) */}
            <motion.div
              className="absolute left-6 top-0 w-0.5 bg-white z-10"
              style={{ height: timelineFillHeight }}
            />
            {/* Mobile Timeline Items - use same content as desktop */}
            {/* 1 */}
            <motion.div className="relative z-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <div className="flex items-start gap-4">
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-pink-300 flex items-center justify-center flex-shrink-0">
                  <Image src="/vitap.png" alt="VIT-AP University Logo" width={32} height={32} className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="flex-1 bg-gray-900 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-[20px] font-bold text-white">VIT-AP University</h3>
                    <span className="text-[14px] text-lime-400 font-semibold">Nov 2024 - present</span>
                  </div>
                  <h4 className="text-[18px] font-bold text-lime-400 mb-4">UI/UX Designer & Team Lead</h4>
                  <ul className="text-[14px] text-gray-300 space-y-2 list-disc pl-4">
                    <li>Leading a cross-functional team to maintain streamlining collaboration between designers and developers.</li>
                    <li>Redesigned the university website to ensure consistency, navigation, and organized content hierarchy, enhancing user experience.</li>
                    <li>Improved content discoverability and accessibility by organizing complex academic and administrative information into well-defined sections, reducing user confusion.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* 2 */}
            <motion.div className="relative z-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
              <div className="flex items-start gap-4">
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-gray-700 flex items-center justify-center flex-shrink-0">
                  <Image src="/syv.jpeg" alt="SYV" width={32} height={32} className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="flex-1 bg-gray-900 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-[20px] font-bold text-white">Sri Yantra Vidya Intelligent Systems</h3>
                    <span className="text-[14px] text-lime-400 font-semibold">May 2025 - June 2025</span>
                  </div>
                  <h4 className="text-[18px] font-bold text-lime-400 mb-4">UI/UX Designer</h4>
                  <ul className="text-[14px] text-gray-300 space-y-2 list-disc pl-4">
                    <li>Designed and built a workforce management website from the ground up — starting with user research and wireframes to final UI.</li>
                    <li>Created a scalable design system to maintain consistency across components and ensured the platform was fully accessible, following WCAG guidelines</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* 3 */}
            <motion.div className="relative z-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}>
              <div className="flex items-start gap-4">
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center flex-shrink-0">
                  <Image src="/soul.gif" alt="Easy Food Logo" width={32} height={32} className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="flex-1 bg-gray-900 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-[20px] font-bold text-white">SOUL : Sense Our Ultimate Link</h3>
                    <span className="text-[14px] text-lime-400 font-semibold">Jun 2024 - Aug 2024</span>
                  </div>
                  <h4 className="text-[18px] font-bold text-lime-400 mb-4">User Experience Designer</h4>
                  <ul className="text-[14px] text-gray-300 space-y-2 list-disc pl-4">
                    <li>Designed an end-to-end chatting application as the sole UI/UX designer</li>
                    <li>Collaborated closely with stakeholders to understand user needs and with developers to ensure seamless handoff and implementation.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Timeline Layout */}
          <div className="hidden md:block relative flex w-full min-h-[900px]">
            {/* Timeline vertical line with scroll fill */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-700 rounded-full z-0 overflow-hidden"
              style={{ top: 40, bottom: 40 }}
            >
              <motion.div
                className="absolute left-0 top-0 w-full bg-white rounded-full"
                style={{ height: timelineFillHeight }}
              />
            </motion.div>
            <div className="flex flex-col gap-32 w-full z-10">
              {/* Experience Item 1 */}
              <motion.div
                className="flex items-center w-full min-h-[300px]"
                initial={{ opacity: 0, y: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Left: Card */}
                <div className="w-[45%] bg-black border border-gray-700 rounded-xl p-10 ml-0 relative">
                  <h3 className="text-[28px] font-bold mb-6">UI/UX Designer & Team Lead</h3>
                  <ul className="text-gray-300 text-[20px] space-y-4 list-disc pl-6">
                    <li>Leading a cross-functional team to maintain streamlining collaboration between designers and developers.</li>
                    <li>Redesigned the university website to ensure consistency, navigation, and organized content hierarchy, enhancing user experience.</li>
                    <li>Improved content discoverability and accessibility by organizing complex academic and administrative information into well-defined sections, reducing user confusion.</li>
                  </ul>
                </div>
                {/* Center: Timeline node */}
                <div className="flex flex-col items-center w-[10%] relative">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-pink-300 flex items-center justify-center z-10 overflow-hidden">
                    <Image src="/vitap.png" alt="VIT-AP University Logo" width={64} height={64} className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                {/* Right: Company & Time */}
                <div className="w-[45%] flex flex-col items-start pl-10">
                  <span className="text-[28px] font-bold mb-2">VIT-AP University</span>
                  <span className="text-[20px] text-gray-400 mb-2">Nov 2024 - present</span>
                </div>
              </motion.div>
              {/* Experience Item 2 */}
              <motion.div
                className="flex items-center w-full min-h-[300px]"
                initial={{ opacity: 0, y: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="w-[45%] flex flex-col items-end pr-10">
                  <span className="text-[28px] font-bold mb-2">Sri Yantra Vidya Intelligent Systems</span>
                  <span className="text-[20px] text-gray-400 mb-2">May 2025 - June 2025</span>
                </div>
                <div className="flex flex-col items-center w-[10%] relative">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-700 flex items-center justify-center z-10">
                    <Image src="/syv.jpeg" alt="SYV" width={64} height={64} className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                <div className="w-[45%] bg-black border border-gray-700 rounded-xl p-10 mr-0 relative">
                  <h3 className="text-[28px] font-bold mb-6">UI/UX Designer</h3>
                  <ul className="text-gray-300 text-[20px] space-y-4 list-disc pl-6">
                    <li>Designed and built a workforce management website from the ground up — starting with user research and wireframes to final UI.</li>
                    <li>Created a scalable design system to maintain consistency across components and ensured the platform was fully accessible, following WCAG guidelines</li>
                  </ul>
                </div>
              </motion.div>
              {/* Experience Item 3 */}
              <motion.div
                className="flex items-center w-full min-h-[300px]"
                initial={{ opacity: 0, y: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="w-[45%] bg-black border border-gray-700 rounded-xl p-10 ml-0 relative">
                  <h3 className="text-[28px] font-bold mb-6">User Experience Designer</h3>
                  <ul className="text-gray-300 text-[20px] space-y-4 list-disc pl-6">
                    <li>Designed an end-to-end chatting application as the sole UI/UX designer</li>
                    <li>Collaborated closely with stakeholders to understand user needs and with developers to ensure seamless handoff and implementation.</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center w-[10%] relative">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center z-10">
                    <Image src="/soul.gif" alt="Easy Food Logo" width={64} height={64} className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                <div className="w-[45%] flex flex-col items-start pl-10">
                  <span className="text-[28px] font-bold mb-2">SOUL : Sense Our Ultimate Link</span>
                  <span className="text-[20px] text-gray-400 mb-2">Jun 2024 - Aug 2024</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process & The Craft Behind Every Click Section */}
      <section className="py-32 text-white relative overflow-hidden" style={{ background: "#0A0A0A" }}>
        <BackgroundBeams className="absolute inset-0 w-full h-full z-0" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="mb-12 px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-lime-400 inline-block"></span>
              <span className="text-gray-500 text-[20px] font-medium">{`{04}`} — Design Process</span>
            </div>
            <h2 className="text-[48px] md:text-[72px] font-bold leading-[1.05] mb-[64px] text-white">The Craft Behind Every Click</h2>
          </div>
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Understand & Ideate",
                  desc: "I begin by understanding the user's needs through research, interviews, and empathy mapping. I then define clear problem statements and brainstorm ideas to address real user pain points.",
                },
                {
                  step: "02",
                  title: "Design & Prototype",
                  desc: "Using Figma, I create wireframes, mockups, and interactive prototypes. My focus is on usability, hierarchy, and accessibility, ensuring designs are user-centered and visually consistent.",
                },
                {
                  step: "03",
                  title: "Test & Iterate",
                  desc: "I conduct usability testing to identify pain points and gather feedback. I then refine the designs through iterations, improving the overall user flow and experience based on real insights.",
                },
                {
                  step: "04",
                  title: "Handoff & Collaborate",
                  desc: "I prepare developer-friendly design specs, style guides, and components. I work closely with developers to ensure accurate implementation and maintain design consistency across the product.",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 group text-center md:text-left"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.12 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-lime-400 text-black rounded-full flex items-center justify-center font-bold text-[16px] md:text-[20px] group-hover:scale-110 transition-transform">
                      {process.step}
                    </div>
                  </div>
                  <div className="space-y-4 pt-0 md:pt-2">
                    <h3 className="text-[24px] md:text-[28px] font-bold group-hover:text-lime-400 transition-colors leading-tight">
                      {process.title}
                    </h3>
                    <p className="text-gray-400 text-[16px] md:text-[18px] leading-relaxed max-w-[600px]">{process.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1000px] mx-auto px-8 text-center">
          {/* Follow my journey card (social icons with hover preview) */}
          <div className="bg-lime-400 rounded-3xl p-8 md:p-12 text-black relative max-w-[600px] mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Star className="w-8 h-8 md:w-10 md:h-10 text-lime-400" />
            </div>
            <h3 className="text-[24px] md:text-[28px] font-bold mb-3 md:mb-4">Follow my journey</h3>
            <p className="text-[16px] md:text-[18px] mb-6 md:mb-8 opacity-80">Stay updated with my latest projects and design insights</p>
            {/* Social media links with enlarged, official logos */}
            <div className="flex justify-center gap-6 md:gap-8 mt-6 md:mt-8">
              {/* LinkedIn Official Logo */}
              <a
                href="https://www.linkedin.com/in/mohith-kumar-chadalawada-37a90b2a1/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-[#0077B5] shadow-md hover:shadow-lg transition-all w-14 h-14 md:w-16 md:h-16 flex items-center justify-center group hover:bg-[#005983] focus:outline-none focus:ring-2 focus:ring-[#0077B5]"
                onMouseEnter={e => { setHoveredSocial("linkedin"); setCursorPos({ x: e.clientX, y: e.clientY }) }}
                onMouseMove={e => setCursorPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <svg className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 448 448" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24.09 53.7-53.6 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.5s1.2-243.1 0-268.1h92.4v38c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              {/* GitHub Official Logo */}
              <a
                href="https://github.com/Mohith-c7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full bg-[#181717] shadow-md hover:shadow-lg transition-all w-14 h-14 md:w-16 md:h-16 flex items-center justify-center group hover:bg-[#000] focus:outline-none focus:ring-2 focus:ring-[#181717]"
                onMouseEnter={e => { setHoveredSocial("github"); setCursorPos({ x: e.clientX, y: e.clientY }) }}
                onMouseMove={e => setCursorPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <svg className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              {/* Behance Official Logo */}
              <a
                href="https://www.behance.net/mohith07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="rounded-full bg-[#1769ff] shadow-md hover:shadow-lg transition-all w-14 h-14 md:w-16 md:h-16 flex items-center justify-center group hover:bg-[#1558c0] focus:outline-none focus:ring-2 focus:ring-[#1769ff]"
                onMouseEnter={e => { setHoveredSocial("behance"); setCursorPos({ x: e.clientX, y: e.clientY }) }}
                onMouseMove={e => setCursorPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <svg className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="none" />
                  <text x="6" y="23" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="18" fill="white">Bē</text>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating preview image on hover */}
      {hoveredSocial && (
        <img
          src={
            hoveredSocial === "linkedin"
              ? "/linkedinpre.png"
              : hoveredSocial === "github"
              ? "/githubpre.png"
              : "/behancepre.png"
          }
          alt="Preview"
          style={{
            position: "fixed",
            left: cursorPos.x + 24,
            top: cursorPos.y + 24,
            width: 120,
            height: 72,
            pointerEvents: "none",
            zIndex: 1000,
            borderRadius: 12,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
            background: "white",
            objectFit: "cover"
          }}
        />
      )}

      {/* Project Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-black mb-4">
              Coming Soon
            </h3>
            <p className="text-[16px] md:text-[18px] text-gray-600 mb-8">
              {modalMessage}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-lime-400 text-black hover:bg-lime-500 rounded-full px-8 py-3 text-[16px] font-bold transition-colors"
            >
              Got it
            </button>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  )
}

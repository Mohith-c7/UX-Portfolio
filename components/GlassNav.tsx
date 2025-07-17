'use client'
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoM from "./LogoM"
import Link from "next/link"

function getScrollProgress() {
  if (typeof window === "undefined") return 0;
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  return docHeight > 0 ? scrollTop / docHeight : 0;
}

export default function GlassNav() {
  const [minimized, setMinimized] = useState(false);
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false); // <-- Move useRef here

  useEffect(() => {
    const updateProgress = () => {
      setProgress(getScrollProgress());
      setMinimized(window.scrollY > 64);
      ticking.current = false;
    };
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateProgress);
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateProgress);
    window.addEventListener("load", updateProgress);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("load", updateProgress);
    };
  }, []);

  // Apple-style glassmorphism
  const glassClass =
    "backdrop-blur-xl bg-white/60 border border-white/30 shadow-lg";

  return (
    <motion.div
      className="fixed z-50 flex justify-center items-center top-0 left-0 w-full pointer-events-none"
      initial={false}
      animate={{
        height: minimized ? 56 : 64,
        paddingTop: 16,
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 32 }}
    >
      <motion.div
        className="pointer-events-auto flex items-center relative"
        initial={false}
        animate={{
          width: minimized ? 56 : "90vw",
          maxWidth: minimized ? 56 : 420,
          height: minimized ? 56 : 64,
          paddingLeft: minimized ? 0 : "16px",
          paddingRight: minimized ? 0 : "16px",
          borderRadius: minimized ? 28 : 32,
          boxShadow: minimized
            ? "0 2px 16px 0 #a3e63533"
            : "0 8px 32px 0 #a3e63533",
          background: "rgba(255,255,255,0.6)",
          border: "1px solid rgba(255,255,255,0.3)",
          justifyContent: minimized ? "center" : "space-between",
          marginTop: minimized ? 0 : 16,
        }}
        style={{
          maxWidth: minimized ? 56 : "min(420px, 90vw)",
          minWidth: minimized ? 56 : 0,
          overflow: "hidden",
          backdropFilter: "blur(24px)",
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      >
        {/* Progress border for minimized state */}
        <AnimatePresence>
          {minimized && (
            <motion.svg
              width="56" height="56"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <circle
                cx="28"
                cy="28"
                r="25"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="4"
              />
              <circle
                cx="28"
                cy="28"
                r="25"
                fill="none"
                stroke="url(#logo-gradient)"
                strokeWidth="4"
                strokeDasharray={2 * Math.PI * 25}
                strokeDashoffset={2 * Math.PI * 25 * (1 - progress)}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.2s linear" }}
              />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="56" y2="56">
                  <stop stopColor="#a3e635" />
                  <stop offset="0.5" stopColor="#65a30d" />
                  <stop offset="1" stopColor="#a3e635" />
                </linearGradient>
              </defs>
            </motion.svg>
          )}
        </AnimatePresence>
        <div className="z-10 flex items-center w-full justify-center">
          <Link href="/" aria-label="Home">
            <span className="inline-block cursor-pointer">
              <LogoM size={36} />
            </span>
          </Link>
        </div>
        <AnimatePresence>
          {!minimized && (
            <motion.div
              className="flex items-center gap-4 md:gap-8 ml-2 md:ml-6"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.18 }}
              style={{ pointerEvents: minimized ? "none" : "auto" }}
            >
              <a href="#portfolio" className="text-[14px] md:text-[16px] font-semibold text-gray-700 hover:text-black transition-colors focus:outline-none">Projects</a>
              <a href="/Mohith_Resume_UX.pdf" download className="text-[14px] md:text-[16px] font-semibold text-gray-700 hover:text-black transition-colors focus:outline-none">Resume</a>
              <a 
                href="#footer" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-lime-400 text-black hover:bg-lime-500 rounded-full px-3 md:px-5 py-2 text-[13px] md:text-[15px] font-bold shadow-md h-auto transition-colors"
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
} 
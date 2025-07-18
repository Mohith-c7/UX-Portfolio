import type { Metadata } from "next"
'use client'
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import GlassNav from "@/components/GlassNav"
import LogoM from "@/components/LogoM"
import Footer from "@/components/Footer"

const projects = [
  {
    title: "VIT-AP University Website",
    desc: "A modern, accessible university website redesign focused on clarity, navigation, and user experience.",
    image: "/placeholder.svg?height=320&width=480",
  },
  {
    title: "AVY: AI-Powered Safety System",
    desc: "A neomorphic web and app design for an AI-powered safety and vigilance platform.",
    image: "/placeholder.svg?height=320&width=480",
  },
  {
    title: "Rotaract Hub - Job Portal",
    desc: "A transactional UI for a job portal, streamlining job search and application processes.",
    image: "/placeholder.svg?height=320&width=480",
  },
  {
    title: "VTBIF",
    desc: "Website design and development for a business incubator, focusing on information clarity and engagement.",
    image: "/placeholder.svg?height=320&width=480",
  },
  {
    title: "SOUL: Sense Our Ultimate Link",
    desc: "End-to-end UI/UX for a chatting application, emphasizing seamless communication and user empathy.",
    image: "/placeholder.svg?height=320&width=480",
  },
  {
    title: "Easy Food",
    desc: "A food delivery platform UI, designed for speed, simplicity, and delightful user experience.",
    image: "/placeholder.svg?height=320&width=480",
  },
]

export const metadata: Metadata = {
  title: "Projects | Mohith Kumar - UI/UX Portfolio",
  description: "Explore a curated selection of UI/UX design projects by Mohith Kumar, showcasing expertise in web design, branding, and user experience.",
  openGraph: {
    title: "Projects | Mohith Kumar - UI/UX Portfolio",
    description: "Explore a curated selection of UI/UX design projects by Mohith Kumar, showcasing expertise in web design, branding, and user experience.",
    url: "https://mohithux.vercel.app/projects",
    siteName: "Mohith Kumar Portfolio",
    images: [
      {
        url: "/profile-photo.png",
        width: 1200,
        height: 630,
        alt: "Mohith Kumar - UI/UX Designer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mohith Kumar - UI/UX Portfolio",
    description: "Explore a curated selection of UI/UX design projects by Mohith Kumar, showcasing expertise in web design, branding, and user experience.",
    images: ["/profile-photo.png"],
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <GlassNav />
      <section className="pt-[192px] pb-28 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-8">
          <h1 className="text-[72px] font-bold leading-[1.05] mb-20 text-black">All Projects</h1>
          <div className="flex flex-col divide-y divide-gray-200">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row items-center group transition-all duration-300 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} py-12`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Text */}
                <div className="w-full md:w-1/2 px-6 md:px-12">
                  <h2 className="text-[36px] font-bold mb-4 text-black group-hover:text-lime-500 transition-colors duration-300">{project.title}</h2>
                  <p className="text-[20px] text-gray-600 mb-6 font-medium">{project.desc}</p>
                  <Button className="bg-lime-400 text-black hover:bg-lime-500 rounded-full px-8 py-4 text-[16px] font-bold h-auto group-hover:scale-105 transition-transform">View Case Study</Button>
                </div>
                {/* Image */}
                <motion.div
                  className="w-full md:w-1/2 flex justify-center items-center overflow-hidden rounded-3xl z-10 transition-transform duration-300"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={480}
                    height={320}
                    className="w-full h-[240px] md:h-[320px] object-cover rounded-3xl transition-shadow duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
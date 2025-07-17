import React from "react"
import Image from "next/image"
import LogoM from "@/components/LogoM"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-[1000px] mx-auto px-8 text-center">
          <div className="mb-12">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gray-700 bg-white flex items-center justify-center">
              <Image src="/profile.jpg" alt="Mohith Kumar" width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <span>
              <a href="mailto:iammohithkumar@gmail.com" className="bg-lime-400 text-black text-[16px] font-medium px-6 py-2 rounded-full inline-block hover:underline focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all">
                iammohithkumar@gmail.com
              </a>
            </span>
          </div>

          <h2 className="text-[48px] md:text-[56px] font-bold leading-[1.1] mb-8 text-center flex flex-col items-center justify-center w-full">
            Let's create something <span className="text-lime-400">extraordinary</span> together.
          </h2>

          <p className="text-[20px] text-gray-400 mb-12 max-w-[700px] mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your project and create something amazing that stands out in the digital landscape and drives real results.
          </p>

          <Button 
            className="bg-lime-400 text-black hover:bg-lime-500 rounded-full px-12 py-6 text-[18px] font-bold group h-auto"
            onClick={() => window.location.href = 'mailto:iammohithkumar@gmail.com'}
          >
            Start a project
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer Bar */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <span className="font-medium text-[18px]">Mohith</span>
            </div>
            <div className="flex items-center justify-center w-full md:justify-end md:w-auto md:space-x-8">
              <div className="text-gray-400 text-[15px] text-center w-full">© 2025 Mohith Kumar. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 
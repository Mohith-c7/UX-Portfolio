import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mohithux.vercel.app'),
  title: "Mohith Kumar - UI/UX Portfolio",
  description:
    "Passionate User Experience Designer, turning your ideas into pixel-perfect realities. Specializing in web design, branding, and user experience.",
  keywords: "UI/UX designer, web design, user experience, portfolio, digital design, Mohith Kumar, UX designer, interface design",
  authors: [{ name: "Mohith Kumar" }],
  creator: "Mohith Kumar",
  publisher: "Mohith Kumar",
  robots: "index, follow",
  manifest: '/manifest.json',
  icons: {
    icon: '/logoM-favicon.png',
    shortcut: '/logoM-favicon.png',
    apple: '/logoM-favicon.png',
  },
  openGraph: {
    title: "Mohith Kumar - UI/UX Portfolio",
    description: "Passionate User Experience Designer, turning your ideas into pixel-perfect realities.",
    type: "website",
    locale: "en_US",
    url: "https://mohithux.vercel.app",
    siteName: "Mohith Kumar Portfolio",
    images: [
      {
        url: "/profile-photo.png",
        width: 1200,
        height: 630,
        alt: "Mohith Kumar - UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohith Kumar - UI/UX Portfolio",
    description: "Passionate User Experience Designer, turning your ideas into pixel-perfect realities.",
    creator: "@mohithkumar",
    images: ["/profile-photo.png"],
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logoM-favicon.png" type="image/png" />
        <link rel="alternate icon" href="/logoM-favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#a3e635" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mohith Portfolio" />
        <meta name="msapplication-TileColor" content="#a3e635" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://mohithux.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="YtsttUeRdfAlluRTx" />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohith Kumar",
              "url": "https://mohithux.vercel.app",
              "image": "https://mohithux.vercel.app/profile-photo.png",
              "sameAs": [
                "mailto:iammohithkumar@gmail.com"
              ],
              "jobTitle": "UI/UX Designer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Passionate User Experience Designer, turning your ideas into pixel-perfect realities. Specializing in web design, branding, and user experience."
            })
          }}
        />
      </head>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  )
}

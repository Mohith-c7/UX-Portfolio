import type { Metadata } from "next";

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
}; 
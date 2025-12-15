import type React from "react"
import type { Metadata } from "next"
import { Lato, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Astra Math Circle | Premium Math Learning for Ambitious Young Thinkers",
  description:
    "A modern Math Circle inspired by global Math Circles and Olympiad traditions. Small mentor-led cohorts, guided exploration, and beautiful problems for Grades 5-10. Build mathematical mastery through curiosity.",
  keywords:
    "math circle, olympiad preparation, AMC, IOQM, RMO, math learning, problem solving, grades 5-10, mentor-led learning, mathematical thinking",
  authors: [{ name: "Astra Math Circle" }],
  creator: "Astra Math Circle",
  publisher: "Astra Math Circle",
  openGraph: {
    title: "Astra Math Circle | Where Curiosity Becomes Mastery",
    description:
      "Premium math learning through mentor-led cohorts, guided exploration, and beautiful problems for Grades 5-10.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astra Math Circle",
    description: "A modern Math Circle for ambitious young thinkers",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}

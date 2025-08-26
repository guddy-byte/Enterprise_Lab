import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const satoshi = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-satoshi",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Enterprise Lab Consulting",
  description: "Empowering SMEs through strategic consulting and financial literacy",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${satoshi.variable}`}>{children}</body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Image from "next/image"

const basePath = process.env.NODE_ENV === "production" ? "/Enterprise_Lab" : "";

export const metadata: Metadata = {
  title: "Enterprise Lab Consulting",
  description: "Empowering SMEs through strategic consulting and financial literacy",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="w-full flex items-center justify-center py-4">
          <Image
            src={`${basePath}/logo_1.jpg`}
            alt="Enterprise Lab Logo"
            className="h-12 w-auto"
            width={120}
            height={48} 
          />
        </header>
        {children}</body>
    </html>
  )
}
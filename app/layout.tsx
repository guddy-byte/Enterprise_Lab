import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
          <img
            src="/Enterprise_Lab/logo_1.jpg"
            alt="Enterprise Lab Logo"
            className="h-12 w-auto"
          />
        </header>
        {children}</body>
    </html>
  )
}
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Balmukund Super Steel",
  description: "Balmukund Super Steel - Leading manufacturer of TMT bars, Sponge Iron, Pig Iron, and Fibre Cement Sheets",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased font-sans`}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

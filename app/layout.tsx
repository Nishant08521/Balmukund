import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Rubik } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Suspense } from "react"

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" })

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${rubik.variable} antialiased`} suppressHydrationWarning>
      <body className={rubik.className} suppressHydrationWarning>
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

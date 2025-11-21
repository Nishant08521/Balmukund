"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ContactBar } from "@/components/site/contact-bar"
import { ChevronDown } from "lucide-react"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { 
    label: "About Us", 
    submenu: [
      { href: "/about/overview", label: "Overview" },
      { href: "/about/at-a-glance", label: "At a Glance" },
      { href: "/about/chairman-message", label: "Chairman Message" },
      { href: "/about/awards", label: "Awards & Acknowledgement" },
      { href: "/about/board-of-directors", label: "Boards of Directors" },
    ]
  },
  { href: "/quality-assurance", label: "Quality Assurance" },
  { href: "/balmukund-superstar", label: "Balmukund SuperStar" },
  { 
    label: "Products", 
    submenu: [
      { href: "/products/sponge-iron", label: "Sponge Iron" },
      { href: "/products/pig-iron", label: "Pig Iron" },
      { href: "/products/tmt-bars", label: "TMT Bar's" },
      { href: "/products/fibre-cement-sheets", label: "Fibre Cement Sheets" },
    ]
  },
  { href: "/compliance", label: "Compliance" },
  { href: "/technology", label: "Technology" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
]

export function Header() {
  const pathname = usePathname() || "/"
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href?: string) => {
    if (!href) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const isHomePage = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* Top contact bar - only show on home page */}
      {isHomePage && (
        <div className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}>
          <ContactBar />
        </div>
      )}

      {/* Brand row */}
      <div className="border-b bg-background w-full">
        <div className="mx-auto max-w-6xl px-4 py-[1px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Balmukund Super Steel - Home">
            <img
              src="/logo.png"
              alt="Balmukund Super Steel logo"
              className="h-22 w-22 "
            />

          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/voice-of-balmukund" className="hover:opacity-80 transition-opacity">
              <img
                src={"/voice.gif?height=32&width=96&query=badge%20quality"}
                alt="voice of balmukund"
                className="h-10 w-34 "
              />
            </Link>
            <img
              src={"/make.png?height=50&width=100&query=make%20in%20india"}
              alt="Make in India badge"
              className="h-12 w-28 "
            />
          </div>
          {/* <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact" aria-label="Get a quote">
                Get a quote
              </Link>
            </Button>
          </div> */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>

        {/* Tabbed navigation bar */}
        <div className="bg-secondary w-full">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="hidden md:flex items-center gap-6 h-12">
              {NAV_ITEMS.map((item) => {
                if (item.submenu) {
                  return (
                    <div 
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={cn(
                          "inline-flex items-center gap-1 text-sm font-medium transition-colors h-12",
                          "text-foreground/80 hover:text-foreground"
                        )}
                      >
                        {item.label}
                        <ChevronDown className="size-4" />
                      </button>
                      <div className={cn(
                        "absolute top-full left-0 mt-0 w-56 bg-background border rounded-md shadow-lg py-2",
                        "transition-all duration-200",
                        openDropdown === item.label ? "opacity-100 visible" : "opacity-0 invisible"
                      )}>
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className={cn(
                              "block px-4 py-2 text-sm hover:bg-secondary transition-colors",
                              isActive(subitem.href) ? "text-accent font-medium" : "text-foreground/80"
                            )}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={cn(
                      "relative text-sm font-medium transition-colors",
                      active ? "text-accent" : "text-foreground/80 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Mobile nav */}
        <div id="mobile-nav" className={cn("md:hidden border-t bg-background", open ? "block" : "hidden")}>
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.label} className="flex flex-col gap-2">
                    <span className="font-medium text-foreground/80">{item.label}</span>
                    <div className="flex flex-col gap-2 pl-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          onClick={() => setOpen(false)}
                          className={cn("py-1 text-sm", isActive(subitem.href) ? "text-accent" : "text-foreground/70")}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setOpen(false)}
                  className={cn("py-1", isActive(item.href) ? "text-accent" : "text-foreground/80")}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button asChild className="mt-2">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get a quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

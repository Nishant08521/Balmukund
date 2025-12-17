"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ContactBar } from "@/components/site/contact-bar"
import { ChevronDown, ChevronRight } from "lucide-react"

type NavMenuItem = {
  label: string
  href?: string
  submenu?: NavMenuItem[]
}

const NAV_ITEMS: NavMenuItem[] = [
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
    label: "Compliance ", 
    submenu: [
      { 
        label: "EC",
        submenu: [
          { href: "https://balmukund.com/wp-content/uploads/2024/07/ModernisationExpansion-of-SMS-RM-.pdf", label: "MODRNISATION AND EXPANSION OF SMS IOB & RM" },
          // { href: "https://balmukund.com/wp-content/uploads/2024/07/EC-SMS-And-IOB.pdf", label: "SMS IOB" },
          { href: "https://balmukund.com/wp-content/uploads/2024/07/EC-MBF-1.pdf", label: "MBF" },
          
        ]
      },
      { 
        label: "EC COMPLIANCE",
        submenu: [
          { 
            label: "MBF",
            submenu: [
              { href: "https://balmukund.com/wp-content/uploads/2025/06/BSIPLMBFECCompl.March25.pdf", label: "March" },
              { href: "/compliance/mbf/september", label: "SEPETMEBER" }
            ]
          },
          { 
            label: "SMS IOB AND IOB",
            submenu: [
              { href: "https://balmukund.com/wp-content/uploads/2025/06/BSIPL-EC-Comp.-Exp.-March25-compressed.pdf", label: "March" },
              { href: "/compliance/mbf/september", label: "SEPETMEBER" }
            ]
          }
        ]
      },
      { href: "https://balmukund.com/wp-content/uploads/2025/06/ES-BSIPL-MEGA-DIV.-FY2024-25.pdf", label: "ENVIROMENT STATEMENT" },
      { 
        label: "REPORTS",
        submenu: [
          { href: "/Sponge_2025.pdf", label: "CSR" },
         
          
        ]
      },
    ]
  },
  
  { href: "#", label: "Compliance(Sponge Iron)" },
  { 
    label: "Products", 
    submenu: [
      { href: "/products/sponge-iron", label: "Sponge Iron" },
      { href: "/products/pig-iron", label: "Pig Iron" },
      { href: "/products/tmt-bars", label: "TMT Bar's" },
      { href: "/products/fibre-cement-sheets", label: "Fibre Cement Sheets" },
    ]
  },
 
  { href: "/technology", label: "Technology" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
]

export function Header() {
  const pathname = usePathname() || "/"
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null)
  const [openThirdLevel, setOpenThirdLevel] = useState<string | null>(null)
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

  const shouldOpenInNewTab = (href?: string) => {
    if (!href) return false
    // Check if it's a PDF file or external URL
    return href.endsWith('.pdf') || href.startsWith('http://') || href.startsWith('https://')
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
              src="/imgi_1.gif"
              alt="Balmukund Super Steel logo"
              className="h-22 w-22"
            />

          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/voice-of-balmukund" className="hover:opacity-80 transition-opacity">
              <img
                src="/voice.gif"
                alt="voice of balmukund"
                className="h-10 w-34"
              />
            </Link>
            <img
              src="/make.png"
              alt="Make in India badge"
              className="h-12 w-28"
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
          <div className="mx-auto max-w-6xl px-1">
            <nav className="hidden md:flex items-center gap-4 h-12 flex-nowrap">
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
                          "inline-flex items-center gap-1 text-sm font-medium transition-colors h-12 whitespace-nowrap",
                          openDropdown === item.label ? "text-orange-500" : "text-foreground/80 hover:text-orange-500"
                        )}
                      >
                        {item.label}
                        <ChevronDown className="size-4" />
                      </button>
                      <div 
                        className={cn(
                          "absolute top-full left-0 mt-0 w-56 bg-background border rounded-md shadow-lg py-2 z-50",
                        "transition-all duration-200",
                        openDropdown === item.label ? "opacity-100 visible" : "opacity-0 invisible"
                        )}
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => {
                          setOpenDropdown(null)
                          setOpenNestedDropdown(null)
                          setOpenThirdLevel(null)
                        }}
                      >
                        {item.submenu.map((subitem, subIndex) => {
                          const hasNestedMenu = subitem.submenu && subitem.submenu.length > 0
                          const itemKey = `${item.label}-${subIndex}`
                          
                          return (
                            <div key={itemKey} className="relative">
                              {hasNestedMenu ? (
                                <div
                                  className="relative"
                                  onMouseEnter={() => setOpenNestedDropdown(itemKey)}
                                  onMouseLeave={() => {
                                    setOpenNestedDropdown(null)
                                    setOpenThirdLevel(null)
                                  }}
                                >
                                  <div className={cn(
                                    "flex items-center justify-between px-4 py-2 text-sm hover:bg-secondary transition-colors cursor-pointer group",
                                    openNestedDropdown === itemKey && "bg-secondary"
                                  )}>
                                    <span className={cn(
                                      openNestedDropdown === itemKey ? "text-orange-500 font-medium" : "text-foreground/80 group-hover:text-orange-500"
                                    )}>
                                      {subitem.label}
                                    </span>
                                    <ChevronRight className="size-4" />
                                  </div>
                                  {subitem.submenu && (
                                    <div className={cn(
                                      "absolute left-full top-0 ml-1 w-56 bg-background border rounded-md shadow-lg py-2 z-50",
                                      "transition-all duration-200",
                                      openNestedDropdown === itemKey ? "opacity-100 visible" : "opacity-0 invisible"
                                    )}>
                                      {subitem.submenu.map((nestedItem, nestedIndex) => {
                                        const hasThirdLevel = nestedItem.submenu && nestedItem.submenu.length > 0
                                        const nestedKey = `${itemKey}-${nestedIndex}`
                                        
                                        return (
                                          <div key={nestedKey} className="relative">
                                            {hasThirdLevel ? (
                                              <div
                                                className="relative"
                                                onMouseEnter={() => setOpenThirdLevel(nestedKey)}
                                                onMouseLeave={() => setOpenThirdLevel(null)}
                                              >
                                                <div className={cn(
                                                  "flex items-center justify-between px-4 py-2 text-sm hover:bg-secondary transition-colors cursor-pointer group",
                                                  openThirdLevel === nestedKey && "bg-secondary"
                                                )}>
                                                  <span className={cn(
                                                    openThirdLevel === nestedKey ? "text-orange-500 font-medium" : "text-foreground/80 group-hover:text-orange-500"
                                                  )}>
                                                    {nestedItem.label}
                                                  </span>
                                                  <ChevronRight className="size-4" />
                                                </div>
                                                {nestedItem.submenu && (
                                                  <div className={cn(
                                                    "absolute left-full top-0 ml-1 w-56 bg-background border rounded-md shadow-lg py-2 z-50",
                                                    "transition-all duration-200",
                                                    openThirdLevel === nestedKey ? "opacity-100 visible" : "opacity-0 invisible"
                                                  )}>
                                                    {nestedItem.submenu.map((thirdItem) => (
                                                      thirdItem.href ? (
                                                        <Link
                                                          key={thirdItem.href}
                                                          href={thirdItem.href}
                                                          target={shouldOpenInNewTab(thirdItem.href) ? "_blank" : undefined}
                                                          rel={shouldOpenInNewTab(thirdItem.href) ? "noopener noreferrer" : undefined}
                                                          className={cn(
                                                            "block px-4 py-2 text-sm hover:bg-secondary transition-colors",
                                                            isActive(thirdItem.href) ? "text-orange-500 font-medium" : "text-foreground/80 hover:text-orange-500"
                                                          )}
                                                        >
                                                          {thirdItem.label}
                                                        </Link>
                                                      ) : (
                                                        <div
                                                          key={thirdItem.label}
                                                          className="block px-4 py-2 text-sm text-foreground/80"
                                                        >
                                                          {thirdItem.label}
                                                        </div>
                                                      )
                                                    ))}
                                                  </div>
                                                )}
                                              </div>
                                            ) : (
                                              nestedItem.href ? (
                                                <Link
                                                  href={nestedItem.href}
                                                  target={shouldOpenInNewTab(nestedItem.href) ? "_blank" : undefined}
                                                  rel={shouldOpenInNewTab(nestedItem.href) ? "noopener noreferrer" : undefined}
                                                  className={cn(
                                                    "block px-4 py-2 text-sm hover:bg-secondary transition-colors",
                                                    isActive(nestedItem.href) ? "text-orange-500 font-medium" : "text-foreground/80 hover:text-orange-500"
                                                  )}
                                                >
                                                  {nestedItem.label}
                                                </Link>
                                              ) : (
                                                <div className="block px-4 py-2 text-sm text-foreground/80">
                                                  {nestedItem.label}
                                                </div>
                                              )
                                            )}
                                          </div>
                                        )
                                      })}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                subitem.href ? (
                                  <Link
                                    href={subitem.href}
                                    target={shouldOpenInNewTab(subitem.href) ? "_blank" : undefined}
                                    rel={shouldOpenInNewTab(subitem.href) ? "noopener noreferrer" : undefined}
                                    className={cn(
                                      "block px-4 py-2 text-sm hover:bg-secondary transition-colors",
                                      isActive(subitem.href) ? "text-orange-500 font-medium" : "text-foreground/80 hover:text-orange-500"
                                    )}
                                  >
                                    {subitem.label}
                                  </Link>
                                ) : (
                                  <div className="block px-4 py-2 text-sm text-foreground/80">
                                    {subitem.label}
                                  </div>
                                )
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                }
                
                if (!item.href) return null
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors whitespace-nowrap",
                      active ? "text-orange-500" : "text-foreground/80 hover:text-orange-500",
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
                      {item.submenu.map((subitem, subIndex) => {
                        if (subitem.submenu) {
                          return (
                            <div key={`${item.label}-${subIndex}`} className="flex flex-col gap-2">
                              <span className="font-medium text-foreground/70 text-sm">{subitem.label}</span>
                              <div className="flex flex-col gap-2 pl-4">
                                {subitem.submenu.map((nestedItem, nestedIndex) => {
                                  if (nestedItem.submenu) {
                                    return (
                                      <div key={`${item.label}-${subIndex}-${nestedIndex}`} className="flex flex-col gap-2">
                                        <span className="font-medium text-foreground/60 text-xs">{nestedItem.label}</span>
                                        <div className="flex flex-col gap-2 pl-4">
                                          {nestedItem.submenu.map((thirdItem) => (
                                            thirdItem.href ? (
                                              <Link
                                                key={thirdItem.href}
                                                href={thirdItem.href}
                                                onClick={() => setOpen(false)}
                                                className={cn("py-1 text-xs", isActive(thirdItem.href) ? "text-accent" : "text-foreground/60")}
                                              >
                                                {thirdItem.label}
                                              </Link>
                                            ) : (
                                              <span key={thirdItem.label} className="py-1 text-xs text-foreground/60">
                                                {thirdItem.label}
                                              </span>
                                            )
                                          ))}
                                        </div>
                                      </div>
                                    )
                                  }
                                  return nestedItem.href ? (
                                    <Link
                                      key={nestedItem.href}
                                      href={nestedItem.href}
                                      onClick={() => setOpen(false)}
                                      className={cn("py-1 text-xs", isActive(nestedItem.href) ? "text-accent" : "text-foreground/60")}
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  ) : (
                                    <span key={`${item.label}-${subIndex}-${nestedIndex}`} className="py-1 text-xs text-foreground/60">
                                      {nestedItem.label}
                                    </span>
                                  )
                                })}
                              </div>
                            </div>
                          )
                        }
                        return subitem.href ? (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            onClick={() => setOpen(false)}
                            className={cn("py-1 text-sm", isActive(subitem.href) ? "text-accent" : "text-foreground/70")}
                          >
                            {subitem.label}
                          </Link>
                        ) : (
                          <span key={`${item.label}-${subIndex}`} className="py-1 text-sm text-foreground/70">
                            {subitem.label}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )
              }
              if (!item.href) return null
              return (
                <Link
                  key={item.label}
                  href={item.href}
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

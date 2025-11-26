import { PhoneCall, Mail } from "lucide-react"
import Link from "next/link"

export function ContactBar() {
  return (
    <div className="bg-foreground text-background text-xs w-full">
      <div className="mx-auto max-w-6xl px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="tel:+913340325000" className="inline-flex items-center gap-2 hover:text-orange-500 transition-colors ml-8">
            <PhoneCall className="size-4" aria-hidden />
            <span>+91 3340325000</span>
          </a>
          <a href="mailto:balmukundsponge@gmail.com" className="inline-flex items-center gap-2 hover:text-orange-500 transition-colors ml-10">
            <Mail className="size-4" aria-hidden />
            <span>balmukundsponge@gmail.com</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/news-media" className="hover:text-orange-500 transition-colors">
            News &amp; Media
          </Link>
          <Link href="/careers" className="hover:text-orange-500 transition-colors">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-orange-500 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  )
}


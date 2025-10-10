import { PhoneCall, Mail } from "lucide-react"

export function ContactBar() {
  return (
    <div className="bg-foreground text-background text-xs w-full">
      <div className="mx-auto max-w-6xl px-4 h-9 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="tel:+913340325000" className="inline-flex items-center gap-2 hover:opacity-90">
            <PhoneCall className="size-4" aria-hidden />
            <span>+91 3340325000</span>
          </a>
          <a href="mailto:balmukundsponge@gmail.com" className="inline-flex items-center gap-2 hover:opacity-90">
            <Mail className="size-4" aria-hidden />
            <span>balmukundsponge@gmail.com</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#news" className="hover:opacity-90">
            News &amp; Media
          </a>
          <a href="#careers" className="hover:opacity-90">
            Careers
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  )
}


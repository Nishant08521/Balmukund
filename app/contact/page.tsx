import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/steel-i-beams-warehouse.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Get in touch with us for inquiries, quotes, or support
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              {/* Head Office */}
              <div className="bg-secondary rounded-xl p-6 mb-6 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Head Office</h3>
                    <p className="text-foreground/80">
                      18- R.N.Mukherjee Road<br />
                      1st Floor, Kolkata 700 001<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pl-16">
                  <div className="flex items-center gap-3">
                    <Phone className="size-5 text-accent" />
                    <a href="tel:03322486304" className="text-foreground/80 hover:text-accent transition-colors">
                      033 2248 6304
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-5 text-accent" />
                    <a href="mailto:balmukundsponge@gmail.com" className="text-foreground/80 hover:text-accent transition-colors">
                      balmukundsponge@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Branch Office */}
              <div className="bg-secondary rounded-xl p-6 mb-6 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Branch Office</h3>
                    <p className="text-foreground/80">
                      Luv Kush Tower 702<br />
                      Exhibition Road, Patna 800001<br />
                      Bihar, India
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pl-16">
                  <div className="flex items-center gap-3">
                    <Phone className="size-5 text-accent" />
                    <a href="tel:06122322488" className="text-foreground/80 hover:text-accent transition-colors">
                      0612 232 2488
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="size-5 text-accent" />
                    <a href="tel:+918709475535" className="text-foreground/80 hover:text-accent transition-colors">
                      +91 8709 475 535
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="size-8 flex-shrink-0" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-2 pl-12">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6 bg-secondary rounded-xl p-8 shadow-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="size-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
            <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
              Our team is ready to help you with product inquiries, quotations, technical support, and dealer partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+913340325000" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                <Phone className="size-5" />
                Call Us Now
              </a>
              <a href="mailto:balmukundsponge@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                <Mail className="size-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' })
        e.currentTarget.reset()
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/contact.jpg"
            alt="Contact Us"
            width={1920}
            height={283}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl  mb-2">Call Us
             </h2>
             <h2 className="text-5xl font-bold mb-8 "> or fill the form</h2>
              
              {/* Head Office */}
              <div className="bg-secondary rounded-xl p-6 mb-6 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Head Office</h3>
                    <p className="text-foreground/80">
                    18- R.N.Mukherjee Road 1st Floor, Kolkata 700 001 
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
                      Luv Kush Tower
                      <br />
                      Exhibition Rd, Salimpur Ahra,
                      <br />
                      Golambar, Patna, Bihar 800001
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
                    <span>Monday - Saturday:</span>
                    <span className="font-semibold">10:30 AM - 7:00 PM</span>
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
              <form onSubmit={handleSubmit} className="space-y-6 bg-secondary rounded-xl p-8 shadow-lg">
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
                    Company
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Company"
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

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="size-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="w-full">
        <div className="w-full h-[500px] md:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3139616109127!2d85.13648057521631!3d25.611445583691616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed587c8c40e371%3A0x45e15b8ff103b57f!2sLuv%20Kush%20Tower%2C%20Exhibition%20Rd%2C%20Salimpur%20Ahra%2C%20Golambar%2C%20Patna%2C%20Bihar%20800001!5e0!3m2!1sen!2sin!4v1732850400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Branch Office - Luv Kush Tower, Patna"
          ></iframe>
        </div>
      </section>
    </div>
  )
}


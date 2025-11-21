"use client"

import { useState } from "react"
import Image from "next/image"
import { Briefcase, Users, Lightbulb, Heart, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
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
      address: formData.get('address'),
    }

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your application has been submitted successfully.' })
        e.currentTarget.reset()
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to submit application. Please try again.' })
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
            src="/overview.jpg"
            alt="Careers"
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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Section - Company Information */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Join Our Team</h1>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Balmukund Super Steel, we believe in nurturing talent and fostering a work culture that promotes growth, innovation, and excellence. We are always looking for passionate individuals who share our vision and values.
                </p>
                
                <p>
                  Our company values are built on the pillars of <strong>honesty</strong>, <strong>integrity</strong>, <strong>community</strong>, <strong>knowledge</strong>, and <strong>innovation</strong>. We create a progressive environment where every team member can thrive and contribute to our collective success.
                </p>
                
                <p>
                  Whether you're an experienced professional or a fresh graduate, we offer opportunities across various departments including production, quality assurance, engineering, sales, marketing, and administration.
                </p>
                
                <p className="font-bold text-lg text-blue-900">
                  Come, join us and make a difference to the Balmukund Super Steel Family as well as to your career.
                </p>
              </div>

              {/* Values Section */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="size-6 text-accent" />
                    <h3 className="font-bold text-blue-900">Our Values</h3>
                  </div>
                  <p className="text-sm text-gray-600">Honesty, Integrity, Community</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="size-6 text-accent" />
                    <h3 className="font-bold text-blue-900">Innovation</h3>
                  </div>
                  <p className="text-sm text-gray-600">Continuous learning and growth</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="size-6 text-accent" />
                    <h3 className="font-bold text-blue-900">Team Culture</h3>
                  </div>
                  <p className="text-sm text-gray-600">Collaborative environment</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="size-6 text-accent" />
                    <h3 className="font-bold text-blue-900">Career Growth</h3>
                  </div>
                  <p className="text-sm text-gray-600">Opportunities to excel</p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-900">Contact Me</h2>
              <form onSubmit={handleSubmit} className="space-y-6 bg-secondary rounded-xl p-8 shadow-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
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
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 text-accent" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
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
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter your address"
                  />
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
                <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>

              {/* Contact Information */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="size-5 text-accent" />
                  <a href="tel:+913340325000" className="hover:text-accent transition-colors">
                    +91 3340325000
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="size-5 text-accent" />
                  <a href="mailto:balmukundsponge@gmail.com" className="hover:text-accent transition-colors">
                    balmukundsponge@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="size-5 text-accent" />
                  <span>18, R.N. Mukherjee Road, 1st Floor, Kolkata 700001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


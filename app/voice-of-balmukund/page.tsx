"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function VoiceOfBalmukundPage() {
  const statistics = [
    { percentage: 96, label: "HIGHLY SATISFIED" },
    { percentage: 89, label: "OUTSTANDING SERVICE" },
    { percentage: 95, label: "SUPERIOR QUALITY" },
    { percentage: 91, label: "ON-TIME DELIVERY" },
    { percentage: 99, label: "VERY TRUSTWORTHY" },
    { percentage: 82, label: "COMMENDABLE PROGRAMS" },
  ]

  const [animatedValues, setAnimatedValues] = useState<number[]>(
    statistics.map(() => 0)
  )
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    statistics.forEach((stat, index) => {
      let currentStep = 0
      const increment = stat.percentage / steps

      const interval = setInterval(() => {
        currentStep++
        const newValue = Math.min(
          Math.round(increment * currentStep),
          stat.percentage
        )

        setAnimatedValues((prev) => {
          const newValues = [...prev]
          newValues[index] = newValue
          return newValues
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)
    })
  }, [isVisible])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/voice.jpg"
            alt="Voice of Balmukund"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-start">
            {/* Left Section - Title and Description */}
            <div className="max-w-md">
              <h1 className="mb-6">
                <span className="text-4xl md:text-5xl font-semibold text-primary">Voice of</span>
                <span className="text-5xl md:text-6xl font-bold text-primary block mt-2">Balmukund</span>
              </h1>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Experience the power of Balmukund Super Steel through the voices of industrial professionals and partners like engineers, contractors, masons and builders. Hear them out to know their experience in using Balmukund Super Steel products and choose excellence for your construction needs.
              </p>
            </div>

            {/* Right Section - Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      {animatedValues[index]}%
                    </span>
                  </div>
                  <p className="text-xs md:text-sm font-medium text-foreground/70 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 transition-all duration-2000 ease-out"
                      style={{ width: `${animatedValues[index]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery and Text Blocks Section */}
      <section className="py-8 md:py-16 bg-white w-full">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.6fr_1fr_1.6fr] xl:grid-cols-[1fr_1.8fr_1fr_1.8fr] gap-x-0.5 md:gap-x-0.5 lg:gap-x-0.5 gap-y-4 md:gap-y-6 max-w-[1920px] mx-auto">
            {/* Left Video Gallery */}
            <div className="space-y-3 md:space-y-4 lg:space-y-4 lg:mr-0.5 xl:mr-0.5">
              {[
                { id: 1, thumbnail: "/steel-i-beams-warehouse.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Testimonial 1" },
                { id: 2, thumbnail: "/closeup-of-tmt-steel-bars-bundled.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Testimonial 2" },
              ].map((video) => (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <div className="group relative aspect-[4/5] md:aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-black border-0">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                      <iframe
                        src={video.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {/* First Text Block */}
            <div className="bg-primary text-white p-6 md:p-8 lg:p-8 xl:p-10 flex flex-col justify-between rounded-lg min-h-[400px] md:min-h-[450px] lg:min-h-[500px] lg:ml-0.5 xl:ml-0.5">
              <div>
                <h3 className=" md:text-3xl lg:text-4xl xl:text-5xl  text-orange-500 mb-4 md:mb-6">
                  Balmukund - The Epitome of Quality
                </h3>
                <p className="text-white/90 leading-relaxed mb-6 md:mb-8 text-sm md:text-base lg:text-lg">
                  At Balmukund Super Steel, we believe that our dealers, customers, contractors, and masons are our true brand ambassadors. Their trust and satisfaction drive our commitment to excellence.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors w-fit text-sm md:text-base lg:text-lg">
                View more
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Center Video Gallery */}
            <div className="space-y-3 md:space-y-4 lg:space-y-4 lg:mr-0.5 xl:mr-0.5">
              {[
                { id: 3, thumbnail: "/sponge-iron-pellets-macro.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Testimonial 3" },
                { id: 4, thumbnail: "/pig-iron-ingots-stacked.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Testimonial 4" },
              ].map((video) => (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <div className="group relative aspect-[4/5] md:aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-black border-0">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                      <iframe
                        src={video.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {/* Second Text Block */}
            <div className="bg-primary text-white p-6 md:p-8 lg:p-8 xl:p-10 flex flex-col justify-between rounded-lg min-h-[400px] md:min-h-[450px] lg:min-h-[500px] lg:ml-0.5 xl:ml-0.5">
              <div>
                <h2 className=" md:text-3xl lg:text-4xl xl:text-5xl  text-orange-500 mb-4 md:mb-6">
                  Guarantee of High Grade Construction Products
                </h2>
                <p className="text-white/90 leading-relaxed mb-6 md:mb-8 text-sm md:text-base lg:text-lg">
                  Our steel and cement derivative products are the foundation of your dream projects. Hear from our dealers, customers, and partners about their experience with Balmukund Super Steel.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors w-fit text-sm md:text-base lg:text-lg">
                View more
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


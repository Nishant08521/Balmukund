"use client"

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ThumbsUp, Lightbulb, LineChart, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    src: "/hot-rolled-steel-mill-with-glowing-billets.jpg",
    alt: "Hot-rolled steel mill with glowing billets",
  },
  {
    src: "/workers-inspecting-steel-rebar-bundles.jpg",
    alt: "Workers inspecting steel rebar bundles",
  },
  {
    src: "/steel-i-beams-warehouse.jpg",
    alt: "Steel I-beams stacked in a warehouse",
  },
]

const overlayItems = [
  {
    icon: ThumbsUp,
    title: "Guaranteed Success",
    desc: "Partnership with us will ensure a profitable business model for you and our constant handholding support.",
  },
  {
    icon: Lightbulb,
    title: "Brand Equity & Benefits",
    desc: "Our Association will offer you an established brand equity & you will inherit an already established customer base.",
  },
  {
    icon: LineChart,
    title: "Exponential Growth",
    desc: "All product marketing have been already developed, you simply have to handle operations and enhance revenue.",
  },
  {
    icon: Users,
    title: "Focus on our clients",
    desc: "Client focus refers to the strategies you can use to prioritize clients' needs and improve their experience with a brand.",
  },
]

export function Hero() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }))

  return (
    <section className="relative">
      <div className="relative">
        <Carousel opts={{ loop: true }} plugins={[autoplay.current as any]} className="relative" aria-label="Hero showcase">
          <CarouselContent className="rounded-none border-0">
            {slides.map((s) => (
              <CarouselItem key={s.src} className="p-0">
                <div className="relative h-[60vh] md:h-[75vh] w-full bg-secondary">
                  <img
                    src={s.src || "/placeholder.svg?height=800&width=1600&query=steel+industry+banner"}
                    alt={s.alt}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/20" aria-hidden="true" />
                  
                  {/* Hero Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-4 inline-block rounded-lg bg-yellow-400 px-6 py-3">
                        <h1 className="text-2xl md:text-3xl font-bold text-red-600">
                          बालमुकुन्द सुपर स्टील
                        </h1>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Building the Future with Steel
                      </h2>
                      <p className="text-lg md:text-xl mb-6 max-w-2xl">
                        We Develop Industrial Applications & Products!
                      </p>
                      <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-background/80 backdrop-blur hover:bg-background absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="bg-background/80 backdrop-blur hover:bg-background absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>

      {/* Overlay cards: positioned over the hero image */}
      <div
        className="pointer-events-auto absolute left-1/2 w-full -translate-x-1/2 z-10"
        style={{ bottom: '-220px' }}
        aria-hidden="true"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-0 overflow-hidden rounded-xl border bg-white/95 backdrop-blur-sm shadow-2xl md:grid-cols-4">
            {overlayItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={item.title} 
                  className={cn(
                    "p-6 sm:p-8",
                    index < 3 && "border-r border-gray-200"
                  )}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-8 w-8 text-accent" aria-hidden />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

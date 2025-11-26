"use client"

import Autoplay from "embla-carousel-autoplay"
import { useRef, useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { ThumbsUp, Lightbulb, LineChart, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    src: "/banner1.jpg",
    alt: "Building the Future with Steel",
    title: "",
    subtitle: "",
    buttonText: "",
  },
  {
    src: "/banner.jpg",
    alt: "Quality Steel Manufacturing",
    title: "",
    subtitle: "",
    buttonText: "",
  },
  {
    src: "/banner3.jpg",
    alt: "Innovation in Steel Industry",
    title: "Bulding the feature with steel",
    subtitle: "We develop industrial Applications & Products!",
    buttonText: "Learn More",
  },
  {
    src: "/banner4.jpg",
    alt: "Innovation in Steel Industry",
    title: "",
    subtitle: "",
    buttonText: "",
  },
]

const overlayItems = [
  {
    icon: ThumbsUp,
    title: ["Guaranteed", "Success"],
    desc: "Partnership with us will ensure a profitable business model for you and our constant handholding support.",
  },
  {
    icon: Lightbulb,
    title: ["Brand Equity", "& Benefits"],
    desc: "Our Association will offer you an established brand equity & you will inherit an already established customer base.",
  },
  {
    icon: LineChart,
    title: ["Exponential", "Growth"],
    desc: "All product marketing have been already developed, you simply have to handle operations and enhance revenue.",
  },
  {
    icon: Users,
    title: ["Focus on our", " clients"],
    desc: "Client focus refers to the strategies you can use to prioritize clients' needs and improve their experience with a brand.",
  },
]

export function Hero() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }))
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative pb-48 md:pb-0">
      <div className="relative">
        <Carousel 
          opts={{ loop: true }} 
          plugins={[autoplay.current as any]} 
          className="relative" 
          aria-label="Hero showcase"
          setApi={setApi}
        >
          <CarouselContent className="rounded-none border-0">
            {slides.map((s, index) => (
              <CarouselItem key={s.src} className="p-0">
                <div className="relative h-[60vh] md:h-[75vh] w-full bg-secondary">
                  <img
                    src={s.src || "/placeholder.svg?height=800&width=1600&query=steel+industry+banner"}
                    alt={s.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/20" aria-hidden="true" />
                  
                  {/* Animated Hero Text Overlay */}
                  <AnimatePresence mode="wait">
                    {current === index && (
                      <motion.div
                        key={`slide-${index}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-start px-4 md:px-8 lg:px-12"
                      >
                        <div className="text-left text-white max-w-4xl">
                          {/* <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="mb-4 inline-block rounded-lg bg-yellow-400 px-6 py-3"
                          > */}
                            {/* <h1 className="text-2xl md:text-3xl font-bold text-red-600">
                              बालमुकुन्द सुपर स्टील
                            </h1> */}
                          {/* </motion.div> */}
                          {s.title && (
                            <motion.h2
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                              className="text-xl md:text-4xl lg:text-5xl font-bold mb-4"
                            >
                              {s.title}
                            </motion.h2>
                          )}
                          {s.subtitle && (
                            <motion.p
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                              className="text-sm md:text-xl mb-6 max-w-2xl"
                            >
                              {s.subtitle}
                            </motion.p>
                          )}
                          {s.buttonText && (
                            <motion.button
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                              className="bg-white text-black px-4 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                              {s.buttonText}
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-background/80 backdrop-blur hover:bg-background absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="bg-background/80 backdrop-blur hover:bg-background absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>

      {/* Overlay cards: positioned over the hero image on desktop, at bottom on mobile */}
      <div
        className="pointer-events-auto absolute left-1/2 w-full -translate-x-1/2 z-10"
        style={{ bottom: '-260px' }}
        aria-hidden="true"
      >
        <div className="mx-auto max-w-6xl px-4">
          {/* Desktop: 4 cards in a row */}
          <div className="hidden md:grid gap-0 overflow-hidden rounded-xl border bg-white/95 backdrop-blur-sm shadow-2xl md:grid-cols-4">
            {overlayItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index} 
                  className={cn(
                    "p-6 sm:p-8",
                    index < 3 && "border-r border-gray-200"
                  )}
                >
                  <div className="flex flex-col items-start text-left">
                    <div className="mb-4">
                      <Icon className="h-[50px] w-[50px] text-orange-500 hover:text-black transition-colors duration-300 cursor-pointer" aria-hidden />
                    </div>
                    <h3 className="mb-3 font-medium text-foreground" style={{ fontSize: '26px' }}>
                      {item.title[0]}
                      <br />
                      {item.title[1]}
                    </h3>
                    <p className="leading-relaxed text-foreground/70" style={{ fontSize: '16px' }}>{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Mobile: 4 cards in 2x2 grid at bottom */}
          <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-xl border bg-white/95 backdrop-blur-sm shadow-2xl md:hidden ">
            {overlayItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index} 
                  className={cn(
                    "p-4",
                    index < 2 && "border-b border-gray-200",
                    index % 2 === 0 && index < 3 && "border-r border-gray-200"
                  )}
                >
                  <div className="flex flex-col items-start text-left">
                    <div className="mb-2">
                      <Icon className="h-[30px] w-[30px] text-orange-500 hover:text-black transition-colors duration-300 cursor-pointer" aria-hidden />
                    </div>
                    <h3 className="mb-1 font-medium text-foreground" style={{ fontSize: '26px' }}>
                      {item.title[0]}
                      <br />
                      {item.title[1]}
                    </h3>
                    <p className="leading-relaxed text-foreground/70 line-clamp-2" style={{ fontSize: '16px' }}>{item.desc}</p>
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

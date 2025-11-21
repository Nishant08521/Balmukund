"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight, Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function GalleryPage() {

  const galleryItems = [
    {
      title: "Event",
      image: "/ga1.jpg",
      href: "/event-gallery"
    },
    {
      title: "Products",
      image: "/g2.jpg",
      href: "/product-gallery"
    },
    {
      title: "Mason Meet",
      image: null, // Gray background
      href: "/mason-meet-gallery"
    }
  ]

  // Sample video data - replace with actual video URLs
  const videos = [
    { id: 1, title: "Video 1", thumbnail: "/steel-i-beams-warehouse.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Video 2", thumbnail: "/closeup-of-tmt-steel-bars-bundled.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Video 3", thumbnail: "/sponge-iron-pellets-macro.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, title: "Video 4", thumbnail: "/pig-iron-ingots-stacked.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 5, title: "Video 5", thumbnail: "/workers-inspecting-steel-rebar-bundles.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 6, title: "Video 6", thumbnail: "/hot-rolled-steel-mill-with-glowing-billets.jpg", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Balmukund Gallery</h1>

          {/* Gallery Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/5] relative">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300"></div>
                  )}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                      {item.title === "Mason Meet" && (
                        <div className="w-12 h-0.5 bg-orange-500"></div>
                      )}
                    </div>
                    
                    {/* View More Button */}
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors w-fit"
                    >
                      View more
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dreams Do Come True / Let's Grow Together Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Left Column - White Background */}
          <div className="bg-white p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dreams Do Come True
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Balmukund Super Steel
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Indulge into the visual experience of grand world-wide foreign tour programmes arranged by Balmukund Super Steel for the dealers and partners along with their families! Who says dreams don't come true!
            </p>
          </div>

          {/* Right Column - Orange Background */}
          <div className="bg-orange-500 p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Let's Grow
              </h2>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Together
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Balmukund Super Steel for the dealers and partners along with their families! Who says dreams don't come true!
              </p>
              
              {/* View More Button */}
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                View More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Video Grid - 6 Videos */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {videos.map((video) => (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <button
                      className="group relative aspect-video overflow-hidden rounded-lg border-2 border-orange-400 hover:border-white transition-all cursor-pointer"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-orange-500 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </button>
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
          </div>
        </div>
      </section>
    </div>
  )
}


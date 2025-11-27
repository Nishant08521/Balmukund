"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function VoiceOfBalmukundGalleryPage() {
  const videos = [
    { id: 1, videoUrl: "https://www.youtube.com/embed/KRNOqB3zUi4?start=15", title: "Testimonial 1" },
    { id: 2, videoUrl: "https://www.youtube.com/embed/3QeH4umtdyo", title: "Testimonial 2" },
    { id: 3, videoUrl: "https://www.youtube.com/embed/0t66czBDc_s", title: "Testimonial 3" },
    { id: 4, videoUrl: "https://www.youtube.com/embed/pDSAheZmA1Y?start=1", title: "Testimonial 4" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      {/* <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/voice-of-balmukund"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Voice of Balmukund</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Voice of</span>
            <span className="text-primary block mt-2">Balmukund Gallery</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl">
            Experience the power of Balmukund Super Steel through the voices of industrial professionals and partners like engineers, contractors, masons and builders.
          </p>
        </div>
      </section> */}

          <section className="relative">
        <div className="relative w-full">
          <img
            src="/voicgallery.webp"
            alt="Voice of Balmukund"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-8 bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={video.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


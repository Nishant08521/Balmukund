"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function EventGalleryPage() {

  // Sample event images - replace with actual event images
  const eventImages = [
    { id: 1, src: "/steel-i-beams-warehouse.jpg", title: "Event 1", description: "Grand opening ceremony" },
    { id: 2, src: "/closeup-of-tmt-steel-bars-bundled.jpg", title: "Event 2", description: "Product launch event" },
    { id: 3, src: "/sponge-iron-pellets-macro.jpg", title: "Event 3", description: "Annual dealer meet" },
    { id: 4, src: "/pig-iron-ingots-stacked.jpg", title: "Event 4", description: "International tour" },
    { id: 5, src: "/workers-inspecting-steel-rebar-bundles.jpg", title: "Event 5", description: "Factory visit" },
    { id: 6, src: "/hot-rolled-steel-mill-with-glowing-billets.jpg", title: "Event 6", description: "Award ceremony" },
    { id: 7, src: "/steel-i-beams-warehouse.jpg", title: "Event 7", description: "Customer appreciation" },
    { id: 8, src: "/closeup-of-tmt-steel-bars-bundled.jpg", title: "Event 8", description: "Partnership event" },
    { id: 9, src: "/sponge-iron-pellets-macro.jpg", title: "Event 9", description: "Trade show participation" },
    { id: 10, src: "/pig-iron-ingots-stacked.jpg", title: "Event 10", description: "Community event" },
    { id: 11, src: "/workers-inspecting-steel-rebar-bundles.jpg", title: "Event 11", description: "Training session" },
    { id: 12, src: "/hot-rolled-steel-mill-with-glowing-billets.jpg", title: "Event 12", description: "Celebration event" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/steel-i-beams-warehouse.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4">
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Gallery</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Gallery</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Explore our memorable events, celebrations, and special moments
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eventImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="aspect-square relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                          <p className="text-sm text-white/80">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-black border-0">
                  <div className="relative w-full h-[80vh]">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                      <p className="text-white/90">{image.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


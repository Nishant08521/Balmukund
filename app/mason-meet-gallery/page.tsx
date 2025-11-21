"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MasonMeetGalleryPage() {

  // Sample mason meet images - replace with actual mason meet images
  const masonMeetImages = [
    { id: 1, src: "/steel-i-beams-warehouse.jpg", title: "Mason Meet 2024", description: "Annual mason meet gathering" },
    { id: 2, src: "/closeup-of-tmt-steel-bars-bundled.jpg", title: "Expert Session", description: "Technical knowledge sharing" },
    { id: 3, src: "/sponge-iron-pellets-macro.jpg", title: "Networking Event", description: "Building connections" },
    { id: 4, src: "/pig-iron-ingots-stacked.jpg", title: "Award Ceremony", description: "Recognizing excellence" },
    { id: 5, src: "/hot-rolled-steel-mill-with-glowing-billets.jpg", title: "Workshop Session", description: "Hands-on training" },
    { id: 6, src: "/workers-inspecting-steel-rebar-bundles.jpg", title: "Group Photo", description: "Memorable moments" },
    { id: 7, src: "/steel-i-beams-warehouse.jpg", title: "Mason Meet 2023", description: "Previous year gathering" },
    { id: 8, src: "/closeup-of-tmt-steel-bars-bundled.jpg", title: "Product Demo", description: "Live demonstrations" },
    { id: 9, src: "/sponge-iron-pellets-macro.jpg", title: "Panel Discussion", description: "Expert insights" },
    { id: 10, src: "/pig-iron-ingots-stacked.jpg", title: "Cultural Event", description: "Entertainment program" },
    { id: 11, src: "/hot-rolled-steel-mill-with-glowing-billets.jpg", title: "Site Visit", description: "Factory tour" },
    { id: 12, src: "/workers-inspecting-steel-rebar-bundles.jpg", title: "Closing Ceremony", description: "Event conclusion" },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mason Meet Gallery</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Discover the highlights from our annual Mason Meet events, workshops, and networking sessions
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {masonMeetImages.map((image) => (
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


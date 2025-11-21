"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ProductGalleryPage() {

  // Sample product images - replace with actual product images
  const productImages = [
    { id: 1, src: "/closeup-of-tmt-steel-bars-bundled.jpg", title: "TMT Steel Bars", description: "High-strength reinforcement bars" },
    { id: 2, src: "/sponge-iron-pellets-macro.jpg", title: "Sponge Iron Pellets", description: "Premium quality sponge iron" },
    { id: 3, src: "/pig-iron-ingots-stacked.jpg", title: "Pig Iron Ingots", description: "High-grade pig iron products" },
    { id: 4, src: "/steel-i-beams-warehouse.jpg", title: "Steel I-Beams", description: "Structural steel beams" },
    { id: 5, src: "/hot-rolled-steel-mill-with-glowing-billets.jpg", title: "Hot Rolled Steel", description: "Hot rolled steel products" },
    { id: 6, src: "/workers-inspecting-steel-rebar-bundles.jpg", title: "Steel Rebar", description: "Quality inspected rebar bundles" },
    { id: 7, src: "/closeup-of-tmt-steel-bars-bundled.jpg", title: "TMT Bars Bundle", description: "Ready for shipment" },
    { id: 8, src: "/sponge-iron-pellets-macro.jpg", title: "Sponge Iron Quality", description: "Premium grade material" },
    { id: 9, src: "/pig-iron-ingots-stacked.jpg", title: "Pig Iron Stack", description: "Organized storage" },
    { id: 10, src: "/steel-i-beams-warehouse.jpg", title: "Warehouse Storage", description: "Well-maintained facility" },
    { id: 11, src: "/hot-rolled-steel-mill-with-glowing-billets.jpg", title: "Steel Production", description: "Manufacturing process" },
    { id: 12, src: "/workers-inspecting-steel-rebar-bundles.jpg", title: "Quality Control", description: "Rigorous inspection" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/closeup-of-tmt-steel-bars-bundled.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4">
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Gallery</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Gallery</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Explore our wide range of high-quality steel products and manufacturing excellence
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productImages.map((image) => (
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


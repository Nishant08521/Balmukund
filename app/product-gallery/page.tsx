"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ProductGalleryPage() {

  // Sample product images - replace with actual product images
  const productImages = [
    { id: 1, src: "/p2.webp", title: "TMT Steel Bars", description: "High-strength reinforcement bars" },
    { id: 2, src: "/p3.webp", title: "Sponge Iron Pellets", description: "Premium quality sponge iron" },
    { id: 3, src: "/p4.webp", title: "Pig Iron Ingots", description: "High-grade pig iron products" },
    { id: 4, src: "/p5.webp", title: "Steel I-Beams", description: "Structural steel beams" },
    { id: 5, src: "/p6.webp", title: "Hot Rolled Steel", description: "Hot rolled steel products" },
    { id: 6, src: "/p7.webp", title: "Steel Rebar", description: "Quality inspected rebar bundles" },
    { id: 7, src: "/p8.webp", title: "TMT Bars Bundle", description: "Ready for shipment" },
    { id: 8, src: "/p9.webp", title: "Sponge Iron Quality", description: "Premium grade material" },
    { id: 9, src: "/p10.webp", title: "Pig Iron Stack", description: "Organized storage" },
    { id: 10, src: "/p11.webp", title: "Warehouse Storage", description: "Well-maintained facility" },
    { id: 11, src: "/p12.webp", title: "Steel Production", description: "Manufacturing process" },
    { id: 12, src: "/p13.webp", title: "Quality Control", description: "Rigorous inspection" },
    { id: 13, src: "/p14.webp", title: "Quality Control", description: "Rigorous inspection" },
    { id: 14, src: "/p15.webp", title: "Quality Control", description: "Rigorous inspection" },
    { id: 15, src: "/p16.webp", title: "Quality Control", description: "Rigorous inspection" },
    { id: 16, src: "/p17.webp", title: "Quality Control", description: "Rigorous inspection" },
    { id: 17, src: "/p18.jpg", title: "Quality Control", description: "Rigorous inspection" },
    { id: 18, src: "/p19.jpg", title: "Quality Control", description: "Rigorous inspection" },
    { id: 19, src: "/p20.jpg", title: "Quality Control", description: "Rigorous inspection" },
    { id: 20, src: "/p21.jpg", title: "Quality Control", description: "Rigorous inspection" },
    { id: 21, src: "/p22.jpg", title: "Quality Control", description: "Rigorous inspection" },
    { id: 22, src: "/p23.jpg", title: "Quality Control", description: "Rigorous inspection" },
    { id: 23, src: "/p24.jpg", title: "Quality Control", description: "Rigorous inspection" },
    // { id: 12, src: "/", title: "Quality Control", description: "Rigorous inspection" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative">
   
   <div className="relative w-full">
     <img
       src="/p1.jpg"
       alt="Technology"
       className="w-full h-auto object-cover"
     />
   </div>
   <div className="absolute inset-0 flex items-center">
     <div className="relative mx-auto max-w-6xl px-4 w-full">
     </div>
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



"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import Image from "next/image"

export default function BalmukundSuperstarPage() {
  const [expandedItem, setExpandedItem] = useState(0)

  const features = [
    {
      title: "High Flexibility",
      description: "Balmukund Super Star is made with Fe 600-grade material, which provides superior flexibility compared to other bars. This helps in better load-bearing and allows over 20% more flexibility.",
      color: "bg-green-500"
    },
    {
      title: "Better Weldability",
      description: "Due to its high-quality tensile strength, Balmukund Super Star provides excellent weldability without breaking or weakening during welding.",
      color: "bg-orange-500"
    },
    {
      title: "Corrosion Resistance",
      description: "The bars are manufactured with rust-resistant technology, ensuring long-lasting durability and strength even in humid conditions.",
      color: "bg-blue-500"
    },
    {
      title: "Rib Design",
      description: "The rib structure follows IS standards, which helps in creating a strong bond with concrete for enhanced structural strength.",
      color: "bg-purple-500"
    },
    {
      title: "Earthquake Resistance",
      description: "Advanced chemical treatment ensures superior earthquake resistance and higher elongation capacity, increasing safety during seismic activities.",
      color: "bg-red-500"
    },
    {
      title: "Consistent Quality",
      description: "Advanced production technology ensures uniform and high-quality construction materials in every bar produced.",
      color: "bg-green-600"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/Balmukundsuperstar/balmuk.jpg"
            alt="Balmukund SuperStar"
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

      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Balmukund SuperStar</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            BALMUKUND SUPERSTAR, made with Fe 600-grade material, offers superior flexibility for better load-bearing. Its high weldability ensures strong joints without weakening. With corrosion-resistant technology, it stays durable in humid conditions. The rib design follows IS standards for a strong concrete bond, while earthquake resistance enhances safety during seismic activity. Advanced production guarantees consistent quality in every bar.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Features of Balmukund SuperStar</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Section - Accordion List */}
            <div className="space-y-0">
              {features.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => setExpandedItem(expandedItem === index ? -1 : index)}
                    className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                    {expandedItem === index ? (
                      <X className="w-6 h-6 text-gray-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  {expandedItem === index && (
                    <div className="pb-6">
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section - Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/Balmukundsuperstar/balmuk.jpg"
                  alt="Balmukund SuperStar"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

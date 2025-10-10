"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ProductsShowcasePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      title: "Tmt Bar's",
      description: "TMT bars or Thermo-Mechanically Treated bars are high-strength reinforcement bars having a tough outer core and a soft inner core.",
      image: "/images/tmt-bars.jpg",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      number: "01"
    },
    {
      id: 2,
      title: "Sponge Iron",
      description: "Sponge iron is a metallic product produced through direct reduction of iron ore in the solid state. It is a substitute for scrap and is mainly used in making steel.",
      image: "/images/sponge-iron.jpg",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      number: "02"
    },
    {
      id: 3,
      title: "Pig Iron",
      description: "Pig iron is the intermediate product of smelting iron ore with a high-carbon fuel and reductant such as coke, usually with limestone as a flux.",
      image: "/images/pig-iron.jpg",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      number: "03"
    }
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Images Section */}
      <div className="relative h-screen">
        {/* Left Side - Raw Material */}
        <div className="absolute inset-0 w-1/2">
          <div className="relative h-full">
            <Image
              src="/sponge-iron-pellets-macro.jpg"
              alt="Raw Material"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Right Side - Metal Processing */}
        <div className="absolute inset-0 left-1/2 w-1/2">
          <div className="relative h-full">
            <Image
              src="/hot-rolled-steel-mill-with-glowing-billets.jpg"
              alt="Metal Processing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>

        {/* Diagonal Stripe */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-yellow-500 transform rotate-12 origin-top-left"></div>
          </div>
        </div>

        {/* Hover Areas */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute h-full transition-all duration-300 ${
              index === 0 ? 'left-0 w-1/3' : 
              index === 1 ? 'left-1/3 w-1/3' : 
              'left-2/3 w-1/3'
            }`}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full w-full cursor-pointer"></div>
          </div>
        ))}
      </div>

      {/* Product Cards */}
      <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute transition-all duration-500 ease-out ${
              hoveredCard === product.id
                ? 'bottom-0 opacity-100'
                : 'bottom-[-300px] opacity-0'
            } ${
              index === 0 ? 'left-4 w-80' : 
              index === 1 ? 'left-1/2 transform -translate-x-1/2 w-80' : 
              'right-4 w-80'
            }`}
          >
            <div className={`${product.bgColor} ${product.textColor} p-6 rounded-lg shadow-2xl relative`}>
              {/* Speech Bubble Pointer */}
              <div className={`absolute -bottom-2 left-8 w-4 h-4 ${product.bgColor} transform rotate-45`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">{product.number}</div>
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-sm leading-relaxed mb-6 opacity-90">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">View More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Labels (Always Visible) */}
      <div className="absolute bottom-8 left-0 right-0 pointer-events-none">
        <div className="flex justify-between px-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-300 ${
                hoveredCard === product.id
                  ? 'opacity-0 transform translate-y-4'
                  : 'opacity-100 transform translate-y-0'
              }`}
            >
              <div className="bg-black/70 text-white px-4 py-2 rounded-lg">
                <div className="text-lg font-bold">{product.number}</div>
                <div className="text-sm">{product.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Our Products</h2>
        <p className="text-sm text-gray-600">Hover over each section to learn more about our products</p>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
      number: "01",
      href: "/products/tmt-bars"
    },
    {
      id: 2,
      title: "Sponge Iron",
      description: "To produce best TMT best quality iron ore is required.Most of the companies outs ource it,but we get it from our own mines so that quality is up to the mark.",
      image: "/images/sponge-iron.jpg",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      number: "02",
      href: "/products/sponge-iron"
    },
    {
      id: 3,
      title: "Pig Iron",
      description: "Pig iron is the product of smelting iron ore (also ilmenite) with a high-carbon fuel and reductant such as coke, usually with limestone as a flux.",
      image: "/images/pig-iron.jpg",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      number: "03",
      href: "/products/pig-iron"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Single Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_PRODUCTS_BG_IMAGE || '/background.jpg'})`,
        }}
      ></div>

      {/* Hover Areas */}
      <div className="relative h-screen z-20">
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
            <Link href={product.href} className="h-full w-full block cursor-pointer"></Link>
          </div>
        ))}
      </div>

      {/* Divider Lines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Diagonal Band - Between Section 1 and 2 (Green to Yellow) */}
      <div className="absolute top-0 left-2/3 w-0.5 h-full bg-white/70"></div>
        <div className="absolute top-0 left-1/3 w-2 h-full origin-top-left" style={{ transform: 'skewY(-12deg)' }}>
          {/* <div className="h-full w-full bg-white/70"></div> */}
          <div className="absolute top-0 left-2/3 w-0.5 h-full bg-white/70"></div>
        </div>
        
        {/* Vertical Line - Between Section 2 and 3 */}
        <div className="absolute top-0 left-2/3 w-0.5 h-full bg-white/70"></div>
      </div>

      {/* Product Cards */}
      <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-30">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute transition-all duration-500 ease-out pointer-events-auto ${
              hoveredCard === product.id
                ? 'bottom-0 opacity-100'
                : 'bottom-[-300px] opacity-0'
            } ${
              index === 0 ? 'left-4 w-80' : 
              index === 1 ? 'left-1/2 transform -translate-x-1/2 w-80' : 
              'right-4 w-80'
            }`}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Link href={product.href} className="block">
              <div className={`${product.bgColor} ${product.textColor} p-6 rounded-lg shadow-2xl relative cursor-pointer`}>
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
            </Link>
          </div>
        ))}
      </div>

      {/* Product Labels (Always Visible) */}
      <div className="absolute bottom-8 left-0 right-0 pointer-events-none z-30">
        <div className="flex justify-between px-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={product.href}
              className={`transition-all duration-300 pointer-events-auto ${
                hoveredCard === product.id
                  ? 'opacity-0 transform translate-y-4'
                  : 'opacity-100 transform translate-y-0'
              }`}
            >
              <div className="bg-black/70 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-black/80 transition-colors">
                <div className="text-lg font-bold">{product.number}</div>
                <div className="text-sm">{product.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-8 left-8 bg-white/90 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Our Products</h2>
        {/* <p className="text-sm text-gray-600">Hover over each section to learn more about our products</p> */}
      </div>
    </div>
  )
}

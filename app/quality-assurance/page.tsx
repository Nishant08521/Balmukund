"use client"

import { useState } from "react"
import { Shield, CheckCircle, Microscope, Award, Settings, FileCheck, Plus, X } from "lucide-react"

export default function QualityAssurancePage() {
  const [expandedItem, setExpandedItem] = useState(0)

  const qualityItems = [
    {
      title: "Quality Products",
      description: "Balmukund Super Steel is synonymous to Supreme Quality of construction products.",
      color: "bg-green-500"
    },
    {
      title: "High Standards",
      description: "We maintain the highest international standards in all our manufacturing processes and quality control measures.",
      color: "bg-orange-500"
    },
    {
      title: "Super Trust",
      description: "Built on decades of trust and reliability, our products are trusted by thousands of customers across the region.",
      color: "bg-green-600"
    },
    {
      title: "Customer Satisfaction",
      description: "Our commitment to customer satisfaction drives every decision we make, ensuring the best experience for our clients.",
      color: "bg-blue-500"
    },
    {
      title: "High Strength",
      description: "Our TMT bars provide exceptional strength and durability, making them ideal for all construction needs.",
      color: "bg-purple-500"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Quality Assurance</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            BALMUKUND SUPER Steel has adopted the most acceptable quality systems right from the feeding of Raw Material to finished product handling. The company's lab is equipped with Sophisticated Analytical Equipment. BALMUKUND Super Steel has the best combination of strength and ductility and an unparalleled quality consistency.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Section - Accordion List */}
            <div className="space-y-0">
              {qualityItems.map((item, index) => (
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

            {/* Right Section - Circular Diagram */}
            <div className="flex justify-center items-center">
              <div className="relative w-96 h-96">
                {/* Central Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-green-600 mb-2">QUALITY</h2>
                    <h2 className="text-2xl font-bold text-green-600">PRODUCTS</h2>
                  </div>
                </div>

                {/* Circular Spheres */}
                <div className="absolute inset-0">
                  {/* Top Right - High Standards */}
                  <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-xs font-bold text-white leading-tight">HIGH</div>
                      <div className="text-xs font-bold text-white leading-tight">STANDARDS</div>
                    </div>
                  </div>

                  {/* Top Left - Super Trust */}
                  <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-xs font-bold text-white leading-tight">SUPER</div>
                      <div className="text-xs font-bold text-white leading-tight">TRUST</div>
                    </div>
                  </div>

                  {/* Bottom Left - Customer Satisfaction */}
                  <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-xs font-bold text-white leading-tight">CUSTOMER</div>
                      <div className="text-xs font-bold text-white leading-tight">SATISFACTION</div>
                    </div>
                  </div>

                  {/* Bottom Right - High Strength */}
                  <div className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-xs font-bold text-white leading-tight">HIGH</div>
                      <div className="text-xs font-bold text-white leading-tight">STRENGTH</div>
                    </div>
                  </div>
                </div>

                {/* Golden Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  {/* Lines connecting to spheres */}
                  <line x1="200" y1="200" x2="280" y2="120" stroke="#D4AF37" strokeWidth="2" />
                  <line x1="200" y1="200" x2="120" y2="120" stroke="#D4AF37" strokeWidth="2" />
                  <line x1="200" y1="200" x2="120" y2="280" stroke="#D4AF37" strokeWidth="2" />
                  <line x1="200" y1="200" x2="280" y2="280" stroke="#D4AF37" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


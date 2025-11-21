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
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/quality.jpg"
            alt="Quality Assurance"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
          </div>
        </div>
      </section>
      {/* Header Section */}
      <section className="pt-16 pb-2bg-white">
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

            {/* Right Section - Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/quality1.png"
                  alt="Quality Assurance"
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


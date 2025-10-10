import { Star, Award, TrendingUp, Users, DollarSign, Handshake, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function BalmukundSuperstarPage() {
  return (
    <section className="w-full bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Image Section */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-md">
          <Image
            src="https://balmukund.com/wp-content/uploads/2024/12/QualityProducts.jpg" // 👉 replace with your actual image path
            alt="Balmukund Quality"
            width={600}
            height={600}
            className="w-full h-auto object-contain rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div>
        <p className="text-sm uppercase text-gray-500 tracking-wide mb-2">
          BALMUKUND SUPER STEEL
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Balmukund <span className="font-bold text-gray-900">Quality Assurance</span>
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
          BALMUKUND SUPER Steel has adopted the most acceptable quality systems right from 
          the feeding of Raw Material to finished product handling. The company's lab is 
          equipped with Sophisticated Analytical Equipment. BALMUKUND Super Steel has 
          the best combination of strength and ductility and an unparalleled quality consistency.
        </p>
        <a
          href="#"
          className="inline-flex items-center bg-[#FF6600] hover:bg-[#e05500] text-white px-6 py-3 rounded-md transition"
        >
          Know More
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
  )
}


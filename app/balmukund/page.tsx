import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BalmukundPage() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
        {/* Left Image Section */}
        <div className="w-full flex justify-center order-2 md:order-1">
          <div className="relative w-full max-w-md">
            <img
              src="/quality.jpg"
              alt="Balmukund Quality"
              className="w-full h-auto object-contain rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="order-1 md:order-2">
          <p className="text-xs sm:text-sm uppercase text-gray-500 tracking-wide mb-2">
            BALMUKUND SUPER STEEL
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Balmukund <span className="font-bold text-gray-900">Quality Assurance</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            BALMUKUND SUPER Steel has adopted the most acceptable quality systems right from 
            the feeding of Raw Material to finished product handling. The company's lab is 
            equipped with Sophisticated Analytical Equipment. BALMUKUND Super Steel has 
            the best combination of strength and ductility and an unparalleled quality consistency.
          </p>
          <Link
            href="/quality-assurance"
            className="inline-flex items-center bg-[#FF6600] hover:bg-[#e05500] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition text-sm sm:text-base"
          >
            Know More
            <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}


import { Home, Shield, Droplet, Flame, Leaf, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FibreCementSheetsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/fib1.jpg"
            alt="Fibre Cement Sheets"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
       
        </div>
      </section>

      {/* Main Content - Snapshot Style */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 space-y-8">
          {/* Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              FIBER <span className="font-bold">CEMENT</span> SHEETS
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mt-10">
            Fiber cement boards have gained popularity in the construction industry as a convenient option for building structures fast and efficiently. You might be wondering what is fiber cement board. Fiber cement board, also known as cellulose cement board, is a composite construction material commonly used in roofing, facade, and ceiling works because of its strength and durability. They stand out from other materials, such as gypsum boards, plywood, or any other boards because they are resistant to leakage, and moisture and they do not deteriorate their quality even in harsh weather. In this article, we will explore what is fiber cement board, its types and characteristics and its application in construction.
              </p>
          </div>

          {/* Main Content with Image */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              {/* Introductory Paragraph */}
           

              {/* Types Section */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">Types of Fiber Cement Sheet</h3>
                
                <ol className="space-y-4 list-decimal list-inside ml-4 text-foreground/80">
                  <li>
                    <span className="font-bold">Siding Panels:</span> Large panels, typically 4x8 feet, used for exterior siding, available in smooth to wood grain textures.
                  </li>
                  <li>
                    <span className="font-bold">Sheets:</span> Basic 4x8 sheets used for various applications including subflooring, underlayment, interior walls, and exterior soffits.
                  </li>
                  <li>
                    <span className="font-bold">Shingles or Planks:</span> Designed to mimic wood or slate shingles for roofing, also available as lap-siding planks.
                  </li>
                  <li>
                    <span className="font-bold">Trim Boards:</span> Used for window and door trim, fascia, frieze boards, corner boards, and band boards, available in standard lumber dimensions like 1x4, 1x6, and 1x8 boards.
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md relative aspect-square">
                <img
                  src="/fib2.jpg"
                  alt="Fiber Cement Sheets"
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OurProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Composite Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="grid grid-cols-1 gap-0 h-96 rounded-lg overflow-hidden shadow-lg">
                  {/* Left Part - Construction Site */}
                  {/* <div className="relative bg-gradient-to-br from-blue-400 to-blue-600">
                    <div className="absolute inset-0 bg-[url('/workers-inspecting-steel-rebar-bundles.jpg')] bg-cover bg-center opacity-80"></div>
                    <div className="absolute inset-0 bg-blue-900/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-semibold">Construction Site</div>
                    </div>
                  </div> */}
                  
                  {/* Right Part - Finished Building */}
                  <div className="relative bg-gradient-to-br from-amber-400 to-amber-600">
                    <div className="absolute inset-0 bg-[url('/profile.webp')] bg-cover bg-center "></div>
                    <div className="absolute inset-0 bg-amber-900/20"></div>
                    <div className="absolute bottom-4 right-4 text-white">
                      {/* <div className="text-sm font-semibold">Finished Building</div> */}
                    </div>
                  </div>
                </div>
                
                {/* Center Steel Bar Overlay */}
                {/* <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-lg">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-90 text-white text-xs font-bold whitespace-nowrap">
                    BALMUKUND SUPER STEEL
                  </div>
                </div> */}
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Our Profile
                </h1>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-black leading-relaxed mb-6">
                  We are Balmukund Super Steel, redefining Bihar's TMT Bar market. We are experts of the best iron & steel products for the construction of your dream projects - both Commercial & Non Commercial. Balmukund TMT confirms ISO : 9001 and international level and ISI on national level. Balmukund means ultra rich features that bring about reduction of 20-30% in construction cost in the following manner-
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-2 rounded-full bg-accent flex-shrink-0"></div>
                  <span className="text-lg text-black">More Coverage.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-2 rounded-full bg-accent flex-shrink-0"></div>
                  <span className="text-lg text-black">More Strength.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-2 rounded-full bg-accent flex-shrink-0"></div>
                  <span className="text-lg text-black">Long Term Strength.</span>
                </div>
              </div>

              <div className="pt-6">
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <Link href="/about/overview">
                    Read more
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Stats Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Why Choose Balmukund Super Steel</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and innovation has made us a trusted name in the steel industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-lg font-semibold text-black mb-2">Years of Excellence</div>
              <div className="text-gray-600">Consistent quality and innovation</div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-accent mb-2">1250+</div>
              <div className="text-lg font-semibold text-black mb-2">Connected Dealers</div>
              <div className="text-gray-600">Strong distribution network</div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-accent mb-2">98K+</div>
              <div className="text-lg font-semibold text-black mb-2">Happy Customers</div>
              <div className="text-gray-600">Trusted by thousands</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

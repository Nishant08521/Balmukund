import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ChairmanMessagePage() {
  return (
    <div className="min-h-screen bg-white pb-12 pt-50">
      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <img 
                  src="/chairman.webp" 
                  alt="Shri Nawal Kumar Kanodia - Chairman & CEO" 
                  className="w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm"
                />
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  BALMUKUND SUPER STEEL
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  Chairman's Message
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-black leading-relaxed mb-6">
                  By an unintentional glance over a factory kindled an idea of entrepreneurship in my mind. On deep contemplation on my vision, passion and dedication, I ventured towards the realization of that aspirational dream, which is now a big name in Steel Industry outfit, Balmukund Super Steel.
                </p>
              </div>

              <div className="border-t pt-6">
                <p className="text-lg font-bold text-black">
                  CEO: SHRI NAWAL KUMAR KANODIA
                </p>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <Link href="/about/chairman-message">
                    Read more
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Director: Abhishek Kanodia
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-black leading-relaxed">
                  At Balmukund Super Steel, we take great pride in leading the steel industry and providing our cherished clients with superior goods and cutting-edge solutions. Our development and success over the past few years have been fueled by our dedication to excellence and client satisfaction. Our committed team of experts puts in endless effort to make sure we not only fulfill but also surpass industry norms and client expectations.
                </p>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <Link href="/about/chairman-message">
                    Read more
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Section - Image */}
            <div>
              <div className="relative">
                <img 
                  src="/director.png" 
                  alt="Abhishek Kanodia - Director" 
                  className="w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      {/* <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Vision & Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by our leadership's vision and commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the most trusted and preferred steel brand in India, known for quality, innovation, and customer satisfaction. We envision a future where every construction project in the country can benefit from our superior products.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To manufacture and deliver world-class steel products that meet international standards while remaining accessible and affordable. We are committed to sustainable practices and continuous improvement in all aspects of our business.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

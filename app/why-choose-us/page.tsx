import { Shield, Zap, DollarSign, Flame, Droplet, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhyChooseUsPage() {
  const features = [
    {
      icon: Shield,
      title: "STRENGTH:",
      subtitle: "The",
      brand: "BALMUKUND",
      description: "Super Steel is a special grade of TMT bars produced under specific process conditions resulting in increased tensile strength as compared to other TMT bars."
    },
    {
      icon: Droplet,
      title: "CORROSION & FIRE RESISTANT",
      description: "The martensitic rim (thicker than any other grade) improves the corrosion resistance. BALMUKUND Super TMT bars suffer no loss of strength even at temperatures as high as 600 degree Celsius."
    },
    {
      icon: DollarSign,
      title: "ECONOMICAL",
      description: "BALMUKUND Super TMT bars made of Fe-500 D grade ensure high tensile strength and also helps you save about 17% steel compared to normal TMT of other grades, combined with reasonable pricing, makes it the best choice"
    },
    {
      icon: Zap,
      title: "EARTHQUAKE RESISTANT",
      description: "Our TMT bars provide excellent ductility and flexibility to withstand seismic activities, ensuring your structures remain safe during earthquakes."
    },
    {
      icon: CheckCircle,
      title: "ISO CERTIFIED",
      description: "All our products are ISO 9001 and ISI certified, ensuring adherence to international and national quality standards for consistent performance."
    },
    {
      icon: Flame,
      title: "HIGH TEMPERATURE RESISTANT",
      description: "Balmukund Super TMT bars maintain their structural integrity even at extreme temperatures, making them ideal for all weather conditions."
    }
  ]

  return (
    <div className="min-h-screen bg-green-500 flex flex-col md:flex-row">
      {/* Fixed Left Side */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto md:mx-0">
          <h2 className="text-green-200 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
            BALMUKUND SUPER STEEL
          </h2>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Why Choose Us
          </h1>
          
          <p className="text-base sm:text-lg text-white leading-relaxed mb-6 sm:mb-8">
            Balmukund Super Steel's assurance of quality has contributed to its ongoing success, highly marketable services and products.
          </p>
          
          <Button asChild className="bg-white text-black hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base">
            <Link href="/about/overview">
              Know More
            </Link>
          </Button>
        </div>
      </div>

      {/* Scrollable Right Side with Snap Scrolling */}
      <div className="w-full md:w-1/2 bg-green-600 overflow-y-auto snap-y snap-mandatory h-[60vh] sm:h-[70vh] md:h-screen scrollbar-hide">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="min-h-full snap-start flex items-center justify-center p-4 sm:p-6 md:p-12">
              <div className="text-white text-center max-w-lg px-4">
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  {feature.subtitle ? (
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{feature.title}</h3>
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">{feature.subtitle}</h4>
                      <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{feature.brand}</h5>
                    </div>
                  ) : (
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{feature.title}</h3>
                  )}
                </div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
        
        {/* Quality Assurance Section */}
        <div className="min-h-full snap-start flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div className="text-white text-center max-w-4xl px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">Quality Assurance</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 mb-6 sm:mb-8 md:mb-12">
              Our state-of-the-art manufacturing facility ensures every product meets the highest standards. We use advanced testing equipment and rigorous quality control processes to guarantee consistency and reliability.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">15+ Years</h4>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80">Industry Experience</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">98K+</h4>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80">Happy Customers</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">1250+</h4>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80">Dealers Network</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">ISO 9001</h4>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80">Certified Quality</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="min-h-full snap-start flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div className="text-white text-center max-w-4xl px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12">What Our Customers Say</h3>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="bg-white/10 rounded-lg p-4 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl italic mb-3 sm:mb-4 md:mb-6">
                  "Balmukund Super Steel has been our trusted partner for over 5 years. Their quality and service are unmatched."
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">- Construction Company, Patna</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl italic mb-3 sm:mb-4 md:mb-6">
                  "The strength and durability of Balmukund TMT bars have exceeded our expectations. Highly recommended!"
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">- Infrastructure Developer, Kolkata</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-black text-white p-3 rounded shadow-lg hover:bg-gray-800 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ModernDesignPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "शशि कुमार",
      company: "कुमार एजेंसी",
      initials: "SK",
      rating: 5,
      number: "01",
      image: "/placeholder-user.jpg",
      text: "बालमुकुंद सुपर सरिया प्रारंभ से ही मार्केट का ब्रांड बना हुआ है। जो कस्टमर बालमुकुंद सुपर सरिया को ले जाता है, वो उसे अच्छा मानता है। मेरी नजर में भी बालमुकुंद सुपर सरिया एक उन्नत क्वालिटी का सरिया है। हमारे ग्राहक इससे संतुष्ट है।"
    },
    {
      id: 2,
      name: "राम प्रसाद",
      company: "प्रसाद कंस्ट्रक्शन",
      initials: "RP",
      rating: 5,
      number: "02",
      image: "/placeholder-user.jpg",
      text: "बालमुकुंद सुपर स्टील की गुणवत्ता और सेवा से हम बहुत प्रभावित हैं। उनके TMT बार्स की ताकत और टिकाऊपन अद्भुत है। हमारे सभी प्रोजेक्ट्स में हम बालमुकुंद का ही स्टील इस्तेमाल करते हैं।"
    },
    {
      id: 3,
      name: "अमित कुमार",
      company: "अमित बिल्डर्स",
      initials: "AK",
      rating: 5,
      number: "03",
      image: "/placeholder-user.jpg",
      text: "बालमुकुंद सुपर स्टील के साथ काम करना एक बेहतरीन अनुभव रहा है। उनकी डिलीवरी समय पर होती है और गुणवत्ता हमेशा बेहतरीन रहती है। हमारे ग्राहक भी उनके स्टील से बहुत खुश हैं।"
    },
    {
      id: 4,
      name: "सुनील सिंह",
      company: "सिंह इंफ्रास्ट्रक्चर",
      initials: "SS",
      rating: 5,
      number: "04",
      image: "/placeholder-user.jpg",
      text: "बालमुकुंद सुपर स्टील ने हमारे सभी प्रोजेक्ट्स में उत्कृष्ट प्रदर्शन दिया है। उनके स्पंज आयरन और पिग आयरन की गुणवत्ता बाजार में सबसे अच्छी है। हम उन्हें पूरी तरह से भरोसेमंद मानते हैं।"
    },
    {
      id: 5,
      name: "विकास गुप्ता",
      company: "गुप्ता स्टील वर्क्स",
      initials: "VG",
      rating: 5,
      number: "05",
      image: "/placeholder-user.jpg",
      text: "बालमुकुंद सुपर स्टील के साथ हमारा लंबा सफर रहा है। उनकी तकनीक और गुणवत्ता नियंत्रण प्रणाली बहुत उन्नत है। हमारे सभी कस्टमर्स उनके स्टील से संतुष्ट हैं और हम उन्हें सलाह देते हैं।"
    }
  ]

  const leftImages = [
    {
      id: 1,
      src: "/custmor.jpg",
      alt: "Steel Manufacturing",
      // title: "Advanced Manufacturing",
      celebrationText: "15+",
      celebrationSubtext: "Celebrating"
    },
    {
      id: 2,
      src: "/custmor2.jpg",
      alt: "Quality Control",
      // title: "Quality Assurance",
      celebrationText: "1250+",
      celebrationSubtext: "Connected Dealers"
    },
    {
      id: 3,
      src: "/customer3.jpg",
      alt: "Steel Products",
      // title: "Premium Products",
      celebrationText: "98500+",
      celebrationSubtext: "Happy Customers"
    },
    // {
    //   id: 4,
    //   src: "/custmor4.jpg",
    //   alt: "Steel Mill",
    //   // title: "Modern Steel Mill",
    //   celebrationText: "25+",
    //   celebrationSubtext: "Years Experience"
    // },
    // {
    //   id: 5,
    //   src: "/steel-i-beams-warehouse.jpg",
    //   alt: "Steel Warehouse",
    //   title: "Storage Facility",
    //   celebrationText: "99%",
    //   celebrationSubtext: "Quality Rate"
    // }
  ]

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  // Auto-slide left images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % leftImages.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [leftImages.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % leftImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + leftImages.length) % leftImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Modern Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-200/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-purple-200/30 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-indigo-200/30 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-300/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-indigo-300/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-cyan-300/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/2 right-1/6 w-24 h-24 bg-gradient-to-r from-indigo-200/20 to-cyan-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Yellow Celebration with Steel Rebars */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Section - Sliding Image Carousel */}
              <div className="relative rounded-2xl p-12 min-h-[500px] overflow-hidden">
                {/* Sliding Images Background */}
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={leftImages[currentImage].src}
                      alt={leftImages[currentImage].alt}
                      fill
                      className="object-cover transition-all duration-1000 ease-in-out"
                    />
                  </div>
                </div>
                
                {/* Image Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                {/* Image Title Overlay */}
                {/* <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg z-20">
                  <div className="text-sm font-semibold text-gray-800">{leftImages[currentImage].title}</div>
                </div> */}
                
                {/* Celebration Card */}
                <div className="relative z-10 bg-white rounded-xl p-8 shadow-2xl max-w-xs mx-auto transition-all duration-500">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-orange-500 mb-2 transition-all duration-500">
                      {leftImages[currentImage].celebrationText}
                    </div>
                    <div className="text-lg text-gray-600 font-medium transition-all duration-500">
                      {leftImages[currentImage].celebrationSubtext}
                    </div>
                  </div>
                </div>

                {/* Image Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {leftImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Section - Customer Testimonial */}
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">CLIENTS</div>
                  <div className="text-4xl md:text-5xl font-bold text-slate-800">
                    Our <span className="block">Customers</span> <span className="text-6xl md:text-7xl">Speak</span>
                  </div>
                </div>
                
                {/* Testimonials Carousel */}
                <div className="relative">
                  {/* Customer Image */}
                  <div className="mb-4 flex justify-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        {testimonials[currentTestimonial].number}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 min-h-[200px]">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[currentTestimonial].initials}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 text-lg">{testimonials[currentTestimonial].name}</div>
                        <div className="text-sm text-gray-600 mb-2">{testimonials[currentTestimonial].company}</div>
                        <div className="flex items-center mb-3">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {testimonials[currentTestimonial].text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className=" px-4">
          <div className="max-w-7xl mx-auto">
            {/* <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Awards & Recognition</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Celebrating excellence and industry recognition
              </p>
            </div> */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Image 1 */}
              <div className="relative group">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/award1.webp"
                    alt="Award 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
                  
              {/* Image 2 */}
              <div className="relative group">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/award2.webp"
                    alt="Award 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Image 3 */}
              <div className="relative group">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/award3.webp"
                    alt="Award 3"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Image 4 */}
              <div className="relative group">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/award4.webp"
                    alt="Award 4"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">25+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">500+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">1000+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">99%</div>
                <div className="text-sm text-slate-600">Quality Rate</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Ready to Transform Your Project?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Join thousands of satisfied customers who trust us for their steel needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/products" 
                  className="inline-flex items-center border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  )
}

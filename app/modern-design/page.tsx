"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Star, Award, Users, TrendingUp, Shield, Zap, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
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
      src: "/images/hero-1.jpg",
      alt: "Steel Manufacturing",
      title: "Advanced Manufacturing"
    },
    {
      id: 2,
      src: "/images/hero-2.jpg",
      alt: "Quality Control",
      title: "Quality Assurance"
    },
    {
      id: 3,
      src: "/images/hero-3.jpg",
      alt: "Steel Products",
      title: "Premium Products"
    },
    {
      id: 4,
      src: "/hot-rolled-steel-mill-with-glowing-billets.jpg",
      alt: "Steel Mill",
      title: "Modern Steel Mill"
    },
    {
      id: 5,
      src: "/steel-i-beams-warehouse.jpg",
      alt: "Steel Warehouse",
      title: "Storage Facility"
    }
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

  const features = [
    {
      id: 1,
      icon: Star,
      title: "Premium Quality",
      description: "High-grade steel products with superior strength and durability",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      icon: Shield,
      title: "Certified Standards",
      description: "ISO certified manufacturing processes and quality assurance",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with decades of industry knowledge",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Innovation",
      description: "Cutting-edge technology and continuous improvement",
      color: "from-cyan-500 to-cyan-700"
    }
  ]

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
              <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-12 min-h-[500px] overflow-hidden">
                {/* Sliding Images Background */}
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={leftImages[currentImage].src}
                      alt={leftImages[currentImage].alt}
                      fill
                      className="object-cover transition-all duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/80 to-yellow-500/80"></div>
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
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg z-20">
                  <div className="text-sm font-semibold text-gray-800">{leftImages[currentImage].title}</div>
                </div>
                
                {/* Celebration Card */}
                <div className="relative z-10 bg-white rounded-xl p-8 shadow-2xl max-w-xs mx-auto">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-orange-500 mb-2">15+</div>
                    <div className="text-lg text-gray-600 font-medium">Celebrating</div>
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Awards & Recognition</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Celebrating excellence and industry recognition
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Award 1 - Golden Plaque */}
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6 flex items-center justify-center relative overflow-hidden">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20"></div>
                  <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-4 right-3 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
                  
                  {/* Award Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white text-sm font-semibold">Excellence Award</div>
                    <div className="text-yellow-300 text-xs">2023</div>
                  </div>
                </div>
              </div>

              {/* Award 2 - Trophy */}
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6 flex items-center justify-center relative overflow-hidden">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20"></div>
                  <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-2 left-3 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-40" style={{animationDelay: '0.7s'}}></div>
                  
                  {/* Award Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white text-sm font-semibold">Industry Leader</div>
                    <div className="text-yellow-300 text-xs">2022</div>
                  </div>
                </div>
              </div>

              {/* Award 3 - Silver Medal */}
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6 flex items-center justify-center relative overflow-hidden">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-50"></div>
                  <div className="absolute bottom-4 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-30" style={{animationDelay: '1.2s'}}></div>
                  
                  {/* Award Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <div className="text-2xl font-bold text-white">25</div>
                    </div>
                    <div className="text-white text-sm font-semibold">Years</div>
                    <div className="text-yellow-300 text-xs">Anniversary</div>
                  </div>
                </div>
              </div>

              {/* Award 4 - Certificate */}
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6 flex items-center justify-center relative overflow-hidden">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20"></div>
                  <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-40" style={{animationDelay: '0.8s'}}></div>
                  
                  {/* Award Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <div className="text-white text-xs font-bold text-center">
                        <div>ISO</div>
                        <div>9001</div>
                      </div>
                    </div>
                    <div className="text-white text-sm font-semibold">Certified</div>
                    <div className="text-yellow-300 text-xs">Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
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
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
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
        </section>
      </div>
    </div>
  )
}

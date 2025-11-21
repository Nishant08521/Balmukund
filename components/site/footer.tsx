import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="mt-16 relative overflow-hidden">
      {/* Top Banner Section */}
      <div className="bg-gray-100 py-6 relative z-20 px-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo.png"
                  alt="Balmukund Super Steel logo"
                  width={90}
                  height={90}
                  className="w-full h-full object-contain"
                />
              </div>
            
            </Link>

            {/* Right Side - Buttons */}
            <div className="flex items-center gap-4">
              {/* Careers Button */}
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md transition-colors hover:bg-[#FF6600] hover:text-white"
              >
                Careers
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Vertical Line */}
             

              {/* Contact Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-md transition-colors hover:bg-black"
              >
                Contact
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Line after top banner */}
      <div className="border-b border-gray-300 relative z-20"></div>
            {/* Animated Steel Industry Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Steel Manufacturing Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* TMT Bars - Horizontal */}
          <div className="absolute top-8 left-0 w-40 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform rotate-3 animate-pulse opacity-25"></div>
          <div className="absolute top-12 left-0 w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-700 transform -rotate-2 animate-bounce opacity-20"></div>
          
          {/* Sponge Iron Pellets - Circular */}
          <div className="absolute top-16 right-8 w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-20 right-12 w-2 h-2 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full animate-ping opacity-25"></div>
          <div className="absolute top-24 right-6 w-2.5 h-2.5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full animate-ping opacity-35"></div>
          
          {/* Pig Iron Ingots - Rectangular */}
          <div className="absolute bottom-16 left-8 w-6 h-4 bg-gradient-to-br from-indigo-500 to-indigo-700 transform rotate-12 animate-pulse opacity-30"></div>
          <div className="absolute bottom-20 left-12 w-5 h-3 bg-gradient-to-br from-violet-600 to-violet-800 transform -rotate-6 animate-bounce opacity-25"></div>
          <div className="absolute bottom-12 left-16 w-4 h-3 bg-gradient-to-br from-cyan-500 to-cyan-700 transform rotate-6 animate-pulse opacity-20"></div>
          
          {/* Steel Mill Sparks */}
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-rose-400 rounded-full animate-ping opacity-50"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-fuchsia-300 rounded-full animate-ping opacity-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 bg-lime-300 rounded-full animate-ping opacity-40"></div>
          
          {/* Steel Wire Mesh Pattern */}
          <div className="absolute top-1/4 left-1/6 w-16 h-16 opacity-10">
            <div className="w-full h-full border border-sky-400 transform rotate-45 animate-pulse"></div>
            <div className="absolute top-2 left-2 w-12 h-12 border border-amber-500 transform rotate-45 animate-bounce"></div>
          </div>
          
          {/* Industrial Gears */}
          <div className="absolute bottom-1/4 right-1/6 w-8 h-8 opacity-15">
            <div className="w-full h-full border-2 border-slate-500 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-1 left-1 w-6 h-6 border border-stone-600 rounded-full animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
          </div>
          
          {/* Steel Beams - Vertical */}
          <div className="absolute top-0 right-1/4 w-1 h-24 bg-gradient-to-b from-sky-400 to-sky-600 transform rotate-3 animate-pulse opacity-20"></div>
          <div className="absolute top-0 right-1/3 w-1 h-20 bg-gradient-to-b from-amber-500 to-amber-700 transform -rotate-2 animate-bounce opacity-15"></div>
          
          {/* Furnace Glow Effect */}
          <div className="absolute bottom-8 left-1/3 w-12 h-8 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full blur-sm animate-pulse opacity-30"></div>
          <div className="absolute bottom-12 left-1/3 w-8 h-6 bg-gradient-to-r from-lime-400/30 to-green-400/30 rounded-full blur-sm animate-bounce opacity-25"></div>
        </div>
      </div>

      {/* Upper Footer Section - Light Gray Background */}
      <div className="bg-gray-100 py-12 relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about/overview" className="text-sm text-gray-700 hover:text-gray-900">Overview</Link></li>
                <li><Link href="/about/at-a-glance" className="text-sm text-gray-700 hover:text-gray-900">At a Glance</Link></li>
                <li><Link href="/about/chairman-message" className="text-sm text-gray-700 hover:text-gray-900">Chairman message</Link></li>
                <li><Link href="/about/board-of-directors" className="text-sm text-gray-700 hover:text-gray-900">Boards of Directors</Link></li>
                <li><Link href="/about/awards" className="text-sm text-gray-700 hover:text-gray-900">Awards & Acknowledgement</Link></li>
              </ul>
            </div>

            {/* Important Link */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Important Link</h3>
              <ul className="space-y-2">
                <li><Link href="/technology" className="text-sm text-gray-700 hover:text-gray-900">Technology</Link></li>
                <li><Link href="/products/tmt-bars" className="text-sm text-gray-700 hover:text-gray-900">Tmt Bar's</Link></li>
                <li><Link href="/products/pig-iron" className="text-sm text-gray-700 hover:text-gray-900">Pig Iron</Link></li>
                <li><Link href="/products/sponge-iron" className="text-sm text-gray-700 hover:text-gray-900">Sponge Iron</Link></li>
                <li><Link href="/products/fibre-cement-sheets" className="text-sm text-gray-700 hover:text-gray-900">Fibre Cement Sheets</Link></li>
              </ul>
            </div>

            {/* Quick Link */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Quick Link</h3>
              <ul className="space-y-2">
                <li><Link href="/quality-assurance" className="text-sm text-gray-700 hover:text-gray-900">Quality Assurance</Link></li>
                <li><Link href="/gallery" className="text-sm text-gray-700 hover:text-gray-900">Media & Gallery</Link></li>
                <li><Link href="/voice-of-balmukund" className="text-sm text-gray-700 hover:text-gray-900">Voice of Balmukund</Link></li>
                <li><Link href="/careers" className="text-sm text-gray-700 hover:text-gray-900">Careers</Link></li>
                <li><Link href="/contact" className="text-sm text-gray-700 hover:text-gray-900">Contact Us</Link></li>
              </ul>
            </div>

            {/* Head Office */}
        <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">HEAD OFFICE :</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>18- R.N.Mukherjee, Road 1st Floor,</p>
                <p>Kolkata, 700 001</p>
                <p>Tel. 03322486304</p>
                <p>Mail. balmukundsponge@gmail.com</p>
              </div>
        </div>

            {/* Branch Address */}
        <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Branch Address</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Luv kush tower 702,</p>
                <p>exhibition road Patna, 800001</p>
                <p>Tel. 06122322488</p>
                <p>Tel. +91 8709475535</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Dark Blue Background */}
      <div className="bg-blue-900 py-4 relative overflow-hidden">
        {/* Animated Iron Rods for Bottom Section */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Bottom Section Rods */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Horizontal Rods */}
            <div className="absolute top-2 left-0 w-32 h-1 bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse opacity-20"></div>
            <div className="absolute top-2 right-0 w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 animate-bounce opacity-15"></div>
            <div className="absolute bottom-2 left-1/4 w-28 h-1 bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse opacity-25"></div>
            <div className="absolute bottom-2 right-1/3 w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-700 animate-bounce opacity-20"></div>
            
            {/* Vertical Rods */}
            <div className="absolute top-0 left-1/6 w-1 h-full bg-gradient-to-b from-gray-400 to-gray-600 animate-pulse opacity-15"></div>
            <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-gray-500 to-gray-700 animate-bounce opacity-10"></div>
            
            {/* Steel Sparks */}
            <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-orange-400 rounded-full animate-ping opacity-50"></div>
            <div className="absolute bottom-1/3 left-1/2 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-ping opacity-40"></div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Side - Copyright */}
            <div className="text-white text-sm mb-4 md:mb-0">
              © 2024 Balmukund Super Steel by Brand Radiator · Privacy · Terms of Use · Site Map
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
            </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Youtube className="w-5 h-5" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

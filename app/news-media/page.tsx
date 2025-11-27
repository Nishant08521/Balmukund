import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Media - Balmukund Super Steel",
  description: "Latest news, press releases, and media coverage for Balmukund Super Steel",
}

export default function NewsMediaPage() {
    
  return (
    <div className="min-h-screen">
   {/* Hero Section */}
   <section className="relative">
   <div className="relative w-full">
     <img
       src="/news.jpg"
       alt="News & Media"
       className="w-full h-80 object-cover"
     />
   </div>
   <div className="absolute inset-0 flex items-center">
     <div className="relative mx-auto max-w-6xl px-4 w-full">
     </div>
   </div>
 </section>
 <section className="py-5 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          {/* <h2 className="text-2xl font-bold mb-5 ml-10">Tmt Manufacturing Process :-</h2> */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/news1.webp" 
                alt="TMT Bars 1" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/news2.webp" 
                alt="TMT Bars 2" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/news3.webp" 
                alt="TMT Bars 3" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
 </div>
  )
}


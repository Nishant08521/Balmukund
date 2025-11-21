import { Factory, MapPin, Package, Globe } from "lucide-react"
import Image from "next/image"

export default function AtAGlancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/At/at1.jpg"
            alt="Company Overview"
            width={1920}
            height={283}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-16 pb-1 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          {/* Our Work Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/At/at2.jpg" 
                alt="Our Work - Steel Manufacturing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Work</h2>
              <p className="text-lg text-foreground/80 mb-6">
              As Bihar’s Leading Brand of TMT Bar, Balmukund Super has been constantly innovative and developing radical solutions in this business. TMT Bar are specified and assessed from the functional point of view menially two dimensions-mechanical properties and chemical properties. The design mechanical properties e.g. Strength, ductility, bend ability are achieved by designing the right chemistry and controlling various rolling parameters.
              </p>
            </div>
          </div>

          {/* Our Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Profile</h2>
              <p className="text-lg text-foreground/80 mb-6">
              Balmukund Super Steel confirms ISO : 9001 at international level and ISI on national level. Balmukund means ultra rich features that bring about reduction of 20-30% in construction cost in the following manner:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 size-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <div className="size-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-lg text-foreground/80">More Coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 size-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <div className="size-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-lg text-foreground/80">More Strength</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 size-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <div className="size-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-lg text-foreground/80">Long Term Strength</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/overview.jpg" 
                alt="Our Profile - Steel Products" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Key Highlights */}
      
        </div>
      </section>
    </div>
  )
}


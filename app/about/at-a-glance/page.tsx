import { Factory, MapPin, Package, Globe } from "lucide-react"

export default function AtAGlancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/hot-rolled-steel-mill-with-glowing-billets.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">At a Glance</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Quick facts and figures about Balmukund Super Steel
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          {/* Our Work Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/hot-rolled-steel-mill-with-glowing-billets.jpg" 
                alt="Our Work - Steel Manufacturing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Work</h2>
              <p className="text-lg text-foreground/80 mb-6">
                As Bihar's Leading Brand of TMT Bar, Balmukund Super has been constantly innovative and developing radical solutions in this business. TMT Bar are specified and assessed from the functional point of view menially two dimensions-mechanical properties and chemical properties. The design mechanical properties e.g. Strength, ductility, bend ability are achieved by designing the right chemistry and controlling various rolling parameters.
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
                src="/steel-i-beams-warehouse.jpg" 
                alt="Our Profile - Steel Products" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">20-30%</div>
                <div className="text-sm opacity-90">Cost Reduction in Construction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">600°C</div>
                <div className="text-sm opacity-90">Fire Resistance Temperature</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">Fe-500D</div>
                <div className="text-sm opacity-90">High Grade TMT Steel</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">17%</div>
                <div className="text-sm opacity-90">Steel Savings vs Normal TMT</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Quality Assurance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


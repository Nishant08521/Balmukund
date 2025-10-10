import { Home, Shield, Droplet, Flame, Leaf, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FibreCementSheetsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/steel-i-beams-warehouse.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fibre Cement Sheets</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
            Durable and versatile roofing and wall cladding solutions for modern construction
            </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Fibre Cement Sheets</h2>
              <p className="text-lg text-foreground/80 mb-4">
                Fibre cement sheets are composite building materials made from cement reinforced with cellulose fibers. They offer exceptional durability, weather resistance, and versatility for both residential and commercial applications.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Balmukund's fibre cement sheets are manufactured using advanced technology to ensure superior quality, longevity, and performance in various weather conditions.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Long-lasting and maintenance-free</span>
              </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Weather and termite resistant</span>
            </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Fire and water resistant</span>
            </div>
          </div>
        </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-secondary flex items-center justify-center">
              <Home className="size-32 text-accent/20" />
            </div>
          </div>

          {/* Features */}
          <h3 className="text-3xl font-bold mb-8 text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-secondary rounded-xl p-6 shadow-lg">
              <Shield className="size-10 text-accent mb-4" />
              <h4 className="text-xl font-bold mb-2">Highly Durable</h4>
              <p className="text-foreground/80">
                Resistant to rot, corrosion, and insect damage with a long service life
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6 shadow-lg">
              <Droplet className="size-10 text-accent mb-4" />
              <h4 className="text-xl font-bold mb-2">Weather Resistant</h4>
              <p className="text-foreground/80">
                Withstands harsh weather conditions including rain, wind, and extreme temperatures
              </p>
                </div>
            <div className="bg-secondary rounded-xl p-6 shadow-lg">
              <Flame className="size-10 text-accent mb-4" />
              <h4 className="text-xl font-bold mb-2">Fire Resistant</h4>
              <p className="text-foreground/80">
                Non-combustible material providing excellent fire protection
              </p>
                </div>
            <div className="bg-secondary rounded-xl p-6 shadow-lg">
              <Leaf className="size-10 text-accent mb-4" />
              <h4 className="text-xl font-bold mb-2">Eco-Friendly</h4>
              <p className="text-foreground/80">
                Made from sustainable materials with minimal environmental impact
              </p>
                </div>
            <div className="bg-secondary rounded-xl p-6 shadow-lg">
              <Home className="size-10 text-accent mb-4" />
              <h4 className="text-xl font-bold mb-2">Versatile</h4>
              <p className="text-foreground/80">
                Suitable for roofing, wall cladding, ceilings, and facade applications
              </p>
                </div>
            <div className="bg-secondary rounded-xl p-6 shadow-lg">
              <CheckCircle className="size-10 text-accent mb-4" />
              <h4 className="text-xl font-bold mb-2">Low Maintenance</h4>
              <p className="text-foreground/80">
                Requires minimal upkeep and retains appearance over time
              </p>
          </div>
        </div>

      {/* Specifications */}
          <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Available Specifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-sm text-foreground/60 mb-2">Thickness</div>
                <div className="text-2xl font-bold text-accent">6mm - 12mm</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-sm text-foreground/60 mb-2">Width</div>
                <div className="text-2xl font-bold text-accent">1200mm</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-sm text-foreground/60 mb-2">Length</div>
                <div className="text-2xl font-bold text-accent">2400mm - 3000mm</div>
              </div>
          </div>
        </div>

          {/* Applications */}
          <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Applications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Roofing</h4>
                <p className="text-primary-foreground/90">
                  Ideal for residential, commercial, and industrial roofing applications
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Wall Cladding</h4>
                <p className="text-primary-foreground/90">
                  Exterior and interior wall covering for enhanced aesthetics and protection
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Ceiling Panels</h4>
                <p className="text-primary-foreground/90">
                  Suspended ceiling systems for commercial and residential spaces
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Facade Systems</h4>
                <p className="text-primary-foreground/90">
                  Modern building facades with excellent weather resistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Interested in Fibre Cement Sheets?</h3>
          <p className="text-lg text-foreground/80 mb-8">
            Contact us for product details, samples, and pricing information
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

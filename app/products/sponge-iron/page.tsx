import { Package, Factory, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SpongeIronPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/sponge-iron-pellets-macro.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-6xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sponge Iron</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
            High-quality Direct Reduced Iron (DRI) for steel manufacturing
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
              <h2 className="text-3xl font-bold mb-6">About Sponge Iron</h2>
              <p className="text-lg text-foreground/80 mb-4">
                Sponge iron, also known as Direct Reduced Iron (DRI), is produced by the direct reduction of iron ore in the solid state by reducing gases. It is a premium metallic raw material used in steel manufacturing.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                At Balmukund Super Steel, we produce high-quality sponge iron using advanced technology and the finest iron ore from our own mines, ensuring consistent quality and purity.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">High metallization rate (>92%)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Low phosphorus and sulfur content</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Consistent chemical composition</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/sponge-iron-pellets-macro.jpg"
                alt="Sponge Iron"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg">
              <Package className="size-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-foreground/80">
                High-grade sponge iron with superior metallization for optimal steel production
              </p>
                </div>
            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg">
              <Factory className="size-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Advanced Production</h3>
              <p className="text-foreground/80">
                State-of-the-art DRI technology ensuring consistent quality
              </p>
                </div>
            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg">
              <TrendingUp className="size-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Cost Effective</h3>
              <p className="text-foreground/80">
                Economical alternative to scrap steel with better quality control
              </p>
          </div>
        </div>

      {/* Specifications */}
          <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Total Iron (Fe)</span>
                  <span className="text-accent">85-90%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Metallization</span>
                  <span className="text-accent">&gt;92%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Carbon (C)</span>
                  <span className="text-accent">1.5-2.5%</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Phosphorus (P)</span>
                  <span className="text-accent">&lt;0.04%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Sulfur (S)</span>
                  <span className="text-accent">&lt;0.05%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Gangue</span>
                  <span className="text-accent">3-5%</span>
                </div>
              </div>
          </div>
        </div>

          {/* Applications */}
          <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Applications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Steel Manufacturing</h4>
                <p className="text-primary-foreground/90">
                  Primary raw material for electric arc furnaces and induction furnaces in steel production
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Foundry Industry</h4>
                <p className="text-primary-foreground/90">
                  Used in casting operations as a substitute for steel scrap
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Re-rolling Mills</h4>
                <p className="text-primary-foreground/90">
                  Essential feedstock for producing various steel products
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">TMT Bar Production</h4>
                <p className="text-primary-foreground/90">
                  Key ingredient in manufacturing high-quality TMT bars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Need High-Quality Sponge Iron?</h3>
          <p className="text-lg text-foreground/80 mb-8">
            Contact us for bulk orders and competitive pricing
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Boxes, Anvil, CheckCircle, Package2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PigIronPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/pig-iron-ingots-stacked.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-6xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pig Iron</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
            High-carbon intermediate product for steel and iron manufacturing
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
              <h2 className="text-3xl font-bold mb-6">About Pig Iron</h2>
              <p className="text-lg text-foreground/80 mb-4">
                Pig iron is the product of smelting iron ore (also ilmenite) with a high-carbon fuel and reductant such as coke, usually with limestone as a flux. It contains high carbon content and is the intermediate product of iron ore smelting.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Balmukund Super Steel produces premium quality pig iron using modern blast furnace technology, ensuring consistent chemical composition and physical properties.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">High carbon content for optimal steel production</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Consistent quality and grade specifications</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Reliable supply for industrial needs</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/pig-iron-ingots-stacked.jpg"
                alt="Pig Iron"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg">
              <Boxes className="size-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Various Grades</h3>
              <p className="text-foreground/80">
                Available in foundry grade, basic grade, and steelmaking grade
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg">
              <Anvil className="size-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">High Purity</h3>
              <p className="text-foreground/80">
                Low impurities ensuring superior quality in final products
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg">
              <Package2 className="size-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Bulk Supply</h3>
              <p className="text-foreground/80">
                Large-scale production capacity for industrial requirements
                </p>
              </div>
            </div>

          {/* Specifications */}
          <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Chemical Composition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Carbon (C)</span>
                  <span className="text-accent">3.5-4.5%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Silicon (Si)</span>
                  <span className="text-accent">0.5-3.0%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Manganese (Mn)</span>
                  <span className="text-accent">0.5-1.5%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Iron (Fe)</span>
                  <span className="text-accent">92-95%</span>
          </div>
        </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Phosphorus (P)</span>
                  <span className="text-accent">&lt;0.1%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Sulfur (S)</span>
                  <span className="text-accent">&lt;0.05%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Titanium (Ti)</span>
                  <span className="text-accent">&lt;0.1%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Chromium (Cr)</span>
                  <span className="text-accent">&lt;0.1%</span>
          </div>
        </div>
          </div>
        </div>

          {/* Applications */}
          <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Applications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Steelmaking</h4>
                <p className="text-primary-foreground/90">
                  Primary raw material for steel production in basic oxygen furnaces and electric arc furnaces
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Foundry Casting</h4>
                <p className="text-primary-foreground/90">
                  Used in producing cast iron products, automotive parts, and industrial machinery components
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Ductile Iron Production</h4>
                <p className="text-primary-foreground/90">
                  Essential for manufacturing high-strength ductile iron castings
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Wrought Iron</h4>
                <p className="text-primary-foreground/90">
                  Raw material for producing decorative and structural wrought iron products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Looking for Quality Pig Iron?</h3>
          <p className="text-lg text-foreground/80 mb-8">
            Get competitive pricing and reliable delivery for your industrial needs
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

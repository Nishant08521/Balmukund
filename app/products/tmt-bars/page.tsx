import { Shield, Zap, DollarSign, Flame, Droplet, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TMTBarsPage() {
  const features = [
    {
      icon: Shield,
      title: "Superior Strength",
      description: "Fe-500D grade ensuring high tensile strength and durability for all construction needs"
    },
    {
      icon: Flame,
      title: "Fire Resistant",
      description: "Maintains strength up to 600°C, providing safety in high-temperature conditions"
    },
    {
      icon: Droplet,
      title: "Corrosion Resistant",
      description: "Thicker martensitic rim provides excellent protection against corrosion"
    },
    {
      icon: Zap,
      title: "Earthquake Resistant",
      description: "Excellent ductility and flexibility to withstand seismic activities"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Save up to 17% steel compared to normal TMT bars of other grades"
    },
    {
      icon: CheckCircle,
      title: "ISO Certified",
      description: "ISO 9001 and ISI certified ensuring international quality standards"
    }
  ]

  const specifications = [
    { grade: "Fe-500D", sizes: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm", tensile: "550 N/mm²" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/closeup-of-tmt-steel-bars-bundled.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TMT Bars</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
            Thermo-Mechanically Treated bars with a tough outer core and soft inner core for superior strength and flexibility
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About TMT Bars</h2>
              <p className="text-lg text-foreground/80 mb-4">
                TMT bars or Thermo-Mechanically Treated bars are high-strength reinforcement bars having a tough outer core and a soft inner core. To produce best TMT, best quality iron ore is required.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Most companies outsource iron ore, but we get it from our own mines so that quality is up to the mark. Best iron ore contains all required ingredients for superior strength and durability.
              </p>
              <p className="text-lg text-foreground/80">
                Balmukund Super TMT bars are designed for the construction of your dream projects - both Commercial & Non-Commercial.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/closeup-of-tmt-steel-bars-bundled.jpg" 
                alt="Balmukund TMT Bars" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Features Grid */}
          <h3 className="text-3xl font-bold mb-8 text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-secondary rounded-xl p-6 shadow-lg">
                  <Icon className="size-10 text-accent mb-4" />
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* Specifications */}
          <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Grade</th>
                    <th className="text-left p-4 font-semibold">Available Sizes</th>
                    <th className="text-left p-4 font-semibold">Min. Tensile Strength</th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 font-semibold text-accent">{spec.grade}</td>
                      <td className="p-4">{spec.sizes}</td>
                      <td className="p-4">{spec.tensile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Cost Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20-30%</div>
                <p className="text-primary-foreground/90">Reduction in Construction Cost</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">17%</div>
                <p className="text-primary-foreground/90">Steel Savings vs Normal TMT</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-primary-foreground/90">Quality Assurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Build with Balmukund TMT Bars?</h3>
          <p className="text-lg text-foreground/80 mb-8">
            Contact us today for pricing and availability
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

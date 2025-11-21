import { Shield, Zap, DollarSign, Flame, Droplet, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/Tmt/tmt1.jpg"
            alt="TMT Bars"
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

      {/* Text Content Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 space-y-5">
          {/* About TMT Bars */}
          <div>
            <h2 className="text-3xl font-bold mb-6">TMT Bars</h2>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80">
              TMT bars or Thermo-Mechanically Treated bars are high-strength reinforcement bars having a tough outer core and a soft inner core. The very first step of the manufacturing process involves passing the steel wires through a rolling mill stand. Thereafter, these rolled steel wires are again passed through the Tempcore water cooling system. While passing the wires through the water cooling system, the water pressure is optimised. The sudden quenching and drastic change in temperature toughen the outer layer of the steel bar, thus making it super tough and durable. Once this process is over, the TMT bars are subject to atmospheric cooling. This is done in order to equalise the temperature difference between the soft inner core and the tough exterior. Once the TMT bar cools down, it slowly turns into a ferrite-pearlite mass. The inner core remains soft giving the TMT bar great tensile strength and elongation point. This design is unique to the TMT bars and gives superior ductility to the bars. Also, this unique manufacturing technique and the absence of Cold stress make this bar corrosion-resistant and boost its weldability.
              </p>
              
            </div>
          </div>

          {/* Features Grid */}
        

          {/* Specifications */}
       

          {/* Benefits */}
         
        </div>
      </section>

      {/* Images Section - 3 Images */}
      <section className="py-5 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold mb-5 ml-10">Tmt Manufacturing Process :-</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/Tmt/tmt2.jpg" 
                alt="TMT Bars 1" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/Tmt/tmt3.jpg" 
                alt="TMT Bars 2" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/hot-rolled-steel-mill-with-glowing-billets.jpg" 
                alt="TMT Bars 3" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
   
    </div>
  )
}

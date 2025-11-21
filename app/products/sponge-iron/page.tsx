import { Package, Factory, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SpongeIronPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/sp.jpg"
            alt="Sponge Iron"
            className="w-full h-90 object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
           
          </div>
        </div>
      </section>

      {/* Main Content - Snapshot Style */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 space-y-8">
          {/* Title and Main Text */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/60">Industries Served</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">SPONGE IRON</h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sponge iron is produced by reducing iron ore (in the form of lumps, pellets or fines) with a reducing gas produced from natural gas or coal. The reduction takes place in a rotary kiln (which is inclined and rotates at a predetermined range of speeds) at a temperature of around 1000°C. The quality of iron ore from our own mines is tested by expert technicians. After testing, the iron ore is melted in the kiln. The sponge iron is re-checked for quality parameters and then re-melted to produce Ingots or Billets. India is the world's largest producer of sponge iron, most of which is produced primarily through the coal-based method. The growth in the sponge iron industry can be attributed largely to the popularity of the secondary steelmaking route. The crude steel production in India has grown from 26 mMT (37%) in 1999-2k to 54 mMT (59%) in 2007-08. This growth is due to lower investment costs of EAF compared to blast furnace-oxygen converter routes and greater product mix flexibility. BALMUKUND produces high-grade sponge iron with an annual manufacturing capacity of 390,000 tonnes from its 3 kilns. Our production process is unique and superior to competitors like Tata Sponge.
            </p>
          </div>

          {/* Properties Section with Image */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Properties of Sponge Iron :-</h3>
              <ul className="space-y-3 list-disc list-inside ml-4 text-foreground/80">
                <li>High iron content and high degree of metallization.</li>
                <li>Uniform and consistent quality.</li>
                <li>Lower sulfur and phosphorus content.</li>
                <li>Negligible tramp element.</li>
                <li>Minimum dust generation during material handling.</li>
                <li>Good flow ability in bins, pipes and conveyors for continuous and trouble-free charging.</li>
                <li>Superior technical support to induction furnace operators.</li>
              </ul>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md relative aspect-square">
                <img
                  src="/sponge-iron-pellets-macro.jpg"
                  alt="Sponge Iron Pellets"
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Our Quality Section */}
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Quality</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              BALMUKUND Employees at all levels shall continually strive to provide consistent and reliable, Quality products & services to their external and internal customers and try to exceed in their expectations. This goal shall be sustained, through committed teamwork and continual improvements in the Quest for excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

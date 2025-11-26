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
            className="w-full h-110 object-cover"
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
            To produce best TMT best quality iron ore is required. Most of the companies outs ource it,but we get it from our own mines so that quality is up to the mark.Best iron ore contains all required ingredients.Every lot of iron ore is checked by expert technicians.Tested and checked iron ore is melted in big furnaces at very high temperature to manufacture sponge iron. Sponge iron is agoin checked for standard quality parameters in modernize laboratories.This sponge iron is then agoin melted at high temperature to get Ingots or Billets. India is the world's largest producer of sponge iron, most of which is produced primarily through the coal based method of production. Growth in the sponge iron production can be attributed largely to the popularity of secondary steelmaking route, which has shown a phenomenal growth in India. The proportion of crude steel produced by the secondary steel sector rose from 26 mMT(37%) in 1999-2k to 54 mMT(59%) in 2007-08. This has been mainly due to the lower investment cost of the EAF as compared with the integrated blast furnace--oxygen converter route and also because of its greater flexibility of product mix.
            </p>
            <p>BALMUKUND Sponge produces high-grade sponge iron that is consistent in quality. The Company has an annual manufacturing capacity of 390,000 tonnes of sponge iron from its 3 kilns. The production process followed at Tata Sponge makes it unique and superior than its competitors</p>
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

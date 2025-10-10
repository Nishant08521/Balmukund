import { Cpu, Microscope, Cog, LineChart, Shield, Zap } from "lucide-react"

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/hot-rolled-steel-mill-with-glowing-billets.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technology</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Advanced manufacturing processes and state-of-the-art technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          {/* Introduction */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Innovation in Steel Manufacturing</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At Balmukund Super Steel, we leverage cutting-edge technology and modern manufacturing processes to produce world-class steel products. Our commitment to technological excellence ensures consistent quality, efficiency, and sustainability.
            </p>
          </div>

          {/* Technology Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Cpu className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Production</h3>
              <p className="text-foreground/80">
                Computer-controlled manufacturing systems ensure precision and consistency in every batch, minimizing human error and maximizing efficiency.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Microscope className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Testing Labs</h3>
              <p className="text-foreground/80">
                State-of-the-art laboratory equipped with sophisticated analytical equipment for comprehensive quality testing and material analysis.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Cog className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">TMT Process</h3>
              <p className="text-foreground/80">
                Thermo-Mechanical Treatment process creates optimal balance between strength and ductility through controlled cooling and heat treatment.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <LineChart className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Monitoring</h3>
              <p className="text-foreground/80">
                Continuous monitoring and data analytics throughout the production process ensure optimal parameters and immediate quality control.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-foreground/80">
                Multi-stage quality checks at every production phase, from raw material selection to final product inspection.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Energy Efficiency</h3>
              <p className="text-foreground/80">
                Modern energy-efficient equipment and processes reduce environmental impact while maintaining high production standards.
              </p>
            </div>
          </div>

          {/* Manufacturing Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Manufacturing Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-xl p-6 text-center">
                <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Raw Material Selection</h4>
                <p className="text-sm text-primary-foreground/80">
                  Best quality iron ore from our own mines ensuring optimal composition
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-xl p-6 text-center">
                <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Smelting & Refining</h4>
                <p className="text-sm text-primary-foreground/80">
                  High-temperature furnaces process ore into molten steel with precise chemistry
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-xl p-6 text-center">
                <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">TMT Treatment</h4>
                <p className="text-sm text-primary-foreground/80">
                  Controlled cooling creates tough outer layer with soft ductile core
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-xl p-6 text-center">
                <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">Quality Testing</h4>
                <p className="text-sm text-primary-foreground/80">
                  Rigorous testing ensures every product meets international standards
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stats */}
          <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Technology Highlights</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-foreground/70">Automated Testing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-foreground/70">Production Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">ISO 9001</div>
                <div className="text-foreground/70">Quality Certified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-foreground/70">Years of Innovation</div>
              </div>
            </div>
          </div>

          {/* Sustainability */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Commitment to Sustainability</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our advanced technology not only ensures superior product quality but also minimizes environmental impact through efficient resource utilization, waste reduction, and energy conservation. We are committed to sustainable manufacturing practices that benefit both our customers and the planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


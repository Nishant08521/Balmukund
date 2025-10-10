import { FileText, Shield, Leaf, CheckCircle } from "lucide-react"

export default function CompliancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/steel-i-beams-warehouse.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Compliance</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Committed to environmental regulations and industry standards
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          {/* Introduction */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="size-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="size-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Compliance</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At Balmukund Super Steel, we maintain the highest standards of environmental compliance and regulatory adherence. Our operations are conducted in accordance with all applicable environmental clearances and statutory requirements.
            </p>
          </div>

          {/* Compliance Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="size-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Environmental Clearance (EC)</h3>
              </div>
              <p className="text-foreground/80 mb-6">
                We have obtained all necessary Environmental Clearances from the Ministry of Environment, Forest and Climate Change (MoEFCC) for our operations.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">SMS & RM Modernization and Expansion</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">SMS-IOB Operations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Mini Blast Furnace (MBF)</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="size-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">EC & Compliance Reports</h3>
              </div>
              <p className="text-foreground/80 mb-6">
                We maintain regular compliance reporting and environmental monitoring as per regulatory requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Bi-annual Compliance Reports</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">March & September Submissions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Environmental Impact Assessments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Statement */}
          <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-2xl p-12 mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Leaf className="size-12" />
              <h2 className="text-3xl font-bold">Environment Statement</h2>
            </div>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              Balmukund Super Steel is committed to minimizing environmental impact through sustainable manufacturing practices, efficient resource utilization, and adherence to all environmental norms. We regularly monitor emissions, effluents, and waste management to ensure compliance with environmental standards.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="font-semibold mb-2">Air Quality Management</h4>
                <p className="text-sm text-primary-foreground/80">
                  Continuous monitoring and control of emissions
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="font-semibold mb-2">Water Conservation</h4>
                <p className="text-sm text-primary-foreground/80">
                  Efficient water usage and effluent treatment
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="font-semibold mb-2">Waste Management</h4>
                <p className="text-sm text-primary-foreground/80">
                  Responsible disposal and recycling practices
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications & Standards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="size-8 text-accent" />
                </div>
                <div className="font-semibold">ISO 9001</div>
                <div className="text-sm text-foreground/60 mt-1">Quality Management</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="size-8 text-accent" />
                </div>
                <div className="font-semibold">ISI Mark</div>
                <div className="text-sm text-foreground/60 mt-1">Product Certification</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="size-8 text-accent" />
                </div>
                <div className="font-semibold">EC Approved</div>
                <div className="text-sm text-foreground/60 mt-1">Environmental Clearance</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="size-8 text-accent" />
                </div>
                <div className="font-semibold">Compliant</div>
                <div className="text-sm text-foreground/60 mt-1">All Statutory Norms</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


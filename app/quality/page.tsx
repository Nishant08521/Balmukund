import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, Award, Microscope } from "lucide-react"

export default function QualityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Assurance</h1>
            <p className="text-lg md:text-xl text-background/90 max-w-3xl mx-auto">
              Excellence in every bar, strength in every structure
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Balmukund Quality Assurance</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                BALMUKUND SUPER Steel has adopted the most acceptable quality systems right from the feeding of Raw Material to finished product handling. The company's lab is equipped with Sophisticated Analytical Equipment.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                BALMUKUND Super Steel has the best combination of strength and ductility and an unparalleled quality consistency.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">ISO 9001 Certified</h3>
                  <p className="text-muted-foreground">International Quality Standards</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/workers-inspecting-steel-rebar-bundles.jpg"
                alt="Quality inspection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Quality Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Raw Material Quality</h3>
                <p className="text-muted-foreground">
                  Best quality iron ore from our own mines ensuring superior quality
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Microscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Advanced Testing</h3>
                <p className="text-muted-foreground">
                  Equipped with sophisticated analytical equipment
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Process Control</h3>
                <p className="text-muted-foreground">
                  Strict quality control from raw material to finished product
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Certifications</h3>
                <p className="text-muted-foreground">
                  ISO 9001 and ISI certified meeting international standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Strength</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fe-500 D grade TMT bars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>High tensile strength</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Superior ductility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Consistent quality</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Durability</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Corrosion resistant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fire resistant up to 600°C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Earthquake resistant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Long-term strength</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Economy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>17% steel savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>20-30% cost reduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>More coverage per ton</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Reasonable pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Unmatched Quality
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Partner with Balmukund Super Steel for quality that builds trust and structures that last
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  )
}


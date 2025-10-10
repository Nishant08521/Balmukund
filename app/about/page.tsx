import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Balmukund Super Steel</h1>
            <p className="text-lg md:text-xl text-background/90 max-w-3xl mx-auto">
              Redefining Bihar's TMT Bar market with excellence, innovation, and unwavering commitment to quality
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Profile</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We are Balmukund Super Steel, redefining Bihar's TMT Bar market. We are experts of the best iron & steel products for the construction of your dream projects - both Commercial & Non Commercial.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Balmukund TMT confirms ISO : 9001 and international level and ISI on national level. Balmukund means ultra rich features that bring about reduction of 20-30% in construction cost in the following manner:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg font-medium">More Coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg font-medium">More Strength</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg font-medium">Long Term Strength</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/steel-i-beams-warehouse.jpg"
                alt="Steel warehouse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">At a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">1250+</h3>
                <p className="text-muted-foreground">Connected Dealers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">98500+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">ISO</h3>
                <p className="text-muted-foreground">9001 Certified</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Chairman's Message</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder-user.jpg"
                alt="CEO: Shri Nawal Kumar Kanodia"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">CEO: SHRI NAWAL KUMAR KANODIA</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                By an unintentional glance over a factory kindled an idea of entrepreneurship in my mind. On deep contemplation on my vision, passion and dedication, I ventured towards the realization of that aspirational dream, which is now a big name in Steel Industry outfit, Balmukund Super Steel.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our journey has been marked by unwavering commitment to quality, innovation, and customer satisfaction. We believe in building not just structures, but relationships that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Director's Message</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Director: Abhishek Kanodia</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Balmukund Super Steel, we take great pride in leading the steel industry and providing our cherished clients with superior goods and cutting-edge solutions. Our development and success over the past few years have been fueled by our dedication to excellence and client satisfaction.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our committed team of experts puts in endless effort to make sure we not only fulfill but also surpass industry norms and client expectations. We continue to innovate and evolve, staying ahead in the competitive steel industry.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder-user.jpg"
                alt="Director: Abhishek Kanodia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">STRENGTH</h3>
                <p className="text-muted-foreground">
                  BALMUKUND Super Steel is a special grade of TMT bars produced under specific process conditions resulting in increased tensile strength as compared to other TMT bars.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">CORROSION & FIRE RESISTANT</h3>
                <p className="text-muted-foreground">
                  The martensitic rim (thicker than any other grade) improves the corrosion resistance. BALMUKUND Super TMT bars suffer no loss of strength even at temperatures as high as 600 degree Celsius.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">ECONOMICAL</h3>
                <p className="text-muted-foreground">
                  BALMUKUND Super TMT bars made of Fe-500 D grade ensure high tensile strength and also helps you save about 17% steel compared to normal TMT of other grades, combined with reasonable pricing, makes it the best choice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}


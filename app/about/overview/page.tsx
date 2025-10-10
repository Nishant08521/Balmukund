import { Building2, Users, Award, TrendingUp } from "lucide-react"

export default function OverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/steel-i-beams-warehouse.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Overview</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            A globally trusted and committed supplier of steel products since 1999
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">BALMUKUND SUPER STEEL</h2>
              <p className="text-lg text-foreground/80 mb-6">
                BALMUKUND SUPER STEEL is a globally trusted and committed supplier of TMT bar, Sponge Iron, Pig Iron and all other steel products to the satisfaction of its customer. With a humble beginning in the year 1999, Balmukund Super Steel has made rapid progress in becoming the most trusted brand in Bihar & Jharkhand. The company was also awarded the <strong>ARCH OF EXCELLENCE AWARD 2005</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-3 text-accent">Our Mission</h3>
                <p className="text-foreground/80">
                  Our mission is to provide high-quality TMT bars of international standards and ensure safety and durability of construction projects. We are entirely committed to innovation and customer satisfaction by delivering iron & steel products which would contribute towards the development of resilient infrastructure.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Vision</h3>
                <p className="text-foreground/80">
                  We envision becoming a global leader in the steel industry, renowned for our unmatched commitment to innovation, quality and sustainability as a whole. We strive to build a future where our advanced steel solutions empower communities, drive economic growth, and contribute towards a greener world encouraging the spirit of leadership in the market by managing our business with integrity and highest ethical standard.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/steel-i-beams-warehouse.jpg" 
                alt="Balmukund Steel Facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 rounded-lg bg-secondary">
              <Building2 className="size-12 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold text-foreground mb-1">25+</div>
              <div className="text-sm text-foreground/70">Years of Excellence</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-secondary">
              <Users className="size-12 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold text-foreground mb-1">Global</div>
              <div className="text-sm text-foreground/70">Trusted Supplier</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-secondary">
              <Award className="size-12 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold text-foreground mb-1">2005</div>
              <div className="text-sm text-foreground/70">Arch of Excellence</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-secondary">
              <TrendingUp className="size-12 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold text-foreground mb-1">Bihar & Jharkhand</div>
              <div className="text-sm text-foreground/70">Most Trusted Brand</div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="size-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="size-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Quality First</h4>
                <p className="text-foreground/70">
                  We never compromise on quality, ensuring every product meets international standards
                </p>
              </div>
              <div className="text-center">
                <div className="size-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="size-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Customer Focus</h4>
                <p className="text-foreground/70">
                  Client satisfaction is our priority with continuous support and service
                </p>
              </div>
              <div className="text-center">
                <div className="size-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="size-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="text-foreground/70">
                  Continuously evolving with latest technology and industry best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


import { Building2, Users, Award, TrendingUp } from "lucide-react"

export default function OverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/overview.jpg"
            alt="Company Overview"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">Company Overview</h1>
           
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-16 pb-2 bg-background">
        <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-foreground/80 mb-6">
              BALMUKUND SUPER STEEL is a globally trusted and committed supplier of TMT bar, Sponge Iron, Pig Iron and all other steel products to the satisfaction of its customer. With a humble beginning in the year 1999, Balmukund Super Steel has made rapid progress in becoming the most trusted brand in Bihar & Jharkhand. The company was also awarded the ARCH OF EXCELLENCE AWARD 2005.
              </p>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
             
              
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
                src="/profile.webp" 
                alt="Balmukund Steel Facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Section */}
      
        </div>
      </section>
    </div>
  )
}


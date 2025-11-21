import { Quote } from "lucide-react"

export default function ChairmanMessagePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/Chairman/chairman.jpg"
            alt="Company Overview"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">Company Overview</h1> */}
           
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-16 pb-2bg-background">
        <div className="mx-auto max-w-6xl px-4">
          {/* Chairman Section */}
          <div className="mb-16">
            <div className="bg-secondary rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-accent/10 relative">
                  <img 
                    src="https://balmukund.com/wp-content/uploads/2024/05/image-704-x-578.jpg" 
                    alt="Chairman - Shri Nawal Kumar Kanodia" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Quote className="size-12 text-accent/30 mb-4" />
                  <blockquote className="text-lg md:text-xl text-foreground/90 italic mb-6 leading-relaxed">
                    "By an unintentional glance over a factory kindled an idea of entrepreneurship in my mind. On deep contemplation on my vision, passion and dedication, I ventured towards the realization of that aspirational dream, which is now a big name in Steel Industry outfit, Balmukund Super Steel."
                  </blockquote>
                  <div className="border-t pt-6">
                    <div className="text-2xl font-bold text-foreground mb-1">Shri Nawal Kumar Kanodia</div>
                    <div className="text-lg text-accent font-semibold">CEO & Chairman</div>
                    <div className="text-sm text-foreground/60 mt-2">Founder, Balmukund Super Steel</div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">
                By an unintentional glance over a factory kindled an idea of entrepreneurship in my mind. On deep contemplation on my vision, passion and dedication, I ventured towards the realization of that aspirational dream, which is now a big name in Steel Industry outfit, Balmukund Super Steel. With no prior background in this sector, I tried creating a business conglomerate with the technology and expertise to match the highest international standards. My dream not only changed my perspective on life, but also the lives of thousands of people. My employees, clients and the common people have benefitted from the company's products and other activities. My mantra has been "Whatever you do, excel in it”. And in that, lies the philosophy and success of Balmukund Group of Industries.
                </p>
           
              </div>
            </div>
          </div>

          {/* Director Section */}
          {/* <div>
            <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-accent/10">
                  <img 
                    src="https://balmukund.com/wp-content/uploads/2024/06/abhi1.png" 
                    alt="Director - Abhishek Kanodia" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Quote className="size-12 text-accent/30 mb-4" />
                  <blockquote className="text-lg md:text-xl text-foreground/90 italic mb-6 leading-relaxed">
                    "At Balmukund Super Steel, we take great pride in leading the steel industry and providing our cherished clients with superior goods and cutting-edge solutions. Our development and success over the past few years have been fueled by our dedication to excellence and client satisfaction."
                  </blockquote>
                  <div className="border-t pt-6">
                    <div className="text-2xl font-bold text-foreground mb-1">Abhishek Kanodia</div>
                    <div className="text-lg text-accent font-semibold">Director</div>
                    <div className="text-sm text-foreground/60 mt-2">Balmukund Super Steel</div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  Our committed team of experts puts in endless effort to make sure we not only fulfill but also surpass industry norms and client expectations. We continue to invest in technology, training, and infrastructure to maintain our position as industry leaders and deliver products that our customers can rely on for generations to come.
                </p>
              </div>
            </div>
          </div> */}

          {/* Vision & Mission */}
          {/* <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-primary text-primary-foreground rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To be the most trusted and preferred steel brand in India, known for quality, innovation, and customer satisfaction. We envision a future where every construction project in the country can benefit from our superior products.
              </p>
            </div>
            <div className="bg-foreground text-background rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-background/90 leading-relaxed">
                To manufacture and deliver world-class steel products that meet international standards while remaining accessible and affordable. We are committed to sustainable practices and continuous improvement in all aspects of our business.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}


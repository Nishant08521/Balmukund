import { User, Briefcase, Mail, Linkedin } from "lucide-react"

export default function BoardOfDirectorsPage() {
  const directors = [
    {
      name: "Shri Nawal Kumar Kanodia",
      position: "CEO",
      description: "By an unintentional glance over a factory kindled an idea of entrepreneurship in my mind. On deep contemplation on my vision, passion and dedication, I ventured towards the realization of that aspirational dream, which is now a big name in Steel Industry outfit, Balmukund Super Steel. With no prior background in this sector, I tried creating a business conglomerate with the technology and expertise to match the highest international standards. My dream not only changed my perspective on life, but also the lives of thousands of people. My employees, clients and the common people have benefitted from the company's products and other activities. My mantra has been \"Whatever you do, excel in it\". And in that, lies the philosophy and success of Balmukund Group of Industries.",
      expertise: ["Entrepreneurship", "Visionary Leadership", "Business Development"]
    },
    {
      name: "Abhishek Kanodia",
      position: "Director",
      description: "As I handheld Balmukund, with a goal to maintain it's rich legace of quality, I've, at firsthand ensured that the best quality goes into every piece of steel we produce. Balmukund Super Steel is built on a legacy of quality, integrity & customer satisfaction. We're proud to continue this tradition, ensuring that our products meet the highest standards and our service exceeds expectations. Thank you for being a part of our successful journey.",
      expertise: ["Quality Assurance", "Legacy Management", "Customer Satisfaction"]
    },
    {
      name: "Pradip Kumar Sahewal",
      position: "Executive Director",
      description: "Balmukund Super Steel, where we take immense pride in ourselves on producing high-quality steel products tailored to meet diverse industrial, commercial and personal needs. We're entirely committed to ensure that our innovative manufacturing processes and affordability of our products continue to set industry benchmarks. Our excellence & customer satisfaction positions us as a trusted leader in the Construction sector. Thank you for choosing Balmukund Super Steel, where strength and reliability are forged into every product of our stable.",
      expertise: ["Manufacturing Excellence", "Innovation", "Industry Leadership"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/steel-i-beams-warehouse.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Board of Directors</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Meet the leadership team driving Balmukund Super Steel's success
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Our board comprises industry veterans and experts who bring decades of combined experience in steel manufacturing, business management, and innovation. Their leadership ensures Balmukund Super Steel continues to set new benchmarks in quality and service.
            </p>
          </div>

          {/* Directors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <div 
                key={index}
                className="bg-secondary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <User className="size-12 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{director.name}</h3>
                    <div className="flex items-center gap-2 text-accent font-semibold mb-3">
                      <Briefcase className="size-4" />
                      <span>{director.position}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {director.description}
                </p>

                <div className="border-t pt-4">
                  <div className="text-sm font-semibold text-foreground/60 mb-3">Areas of Expertise</div>
                  <div className="flex flex-wrap gap-2">
                    {director.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Company Values */}
          <div className="mt-16 bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Principles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="size-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Upholding the highest ethical standards in all business dealings
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <User className="size-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Working together to achieve common goals and drive innovation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <Mail className="size-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accountability</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Taking responsibility for our actions and delivering on promises
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


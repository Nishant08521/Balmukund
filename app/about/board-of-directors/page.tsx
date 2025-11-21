import { User, Briefcase, Mail, Linkedin } from "lucide-react"

export default function BoardOfDirectorsPage() {
  const directors = [
    {
      name: "Shri Nawal Kumar Kanodia",
      position: "CEO",
      description: "By an unintentional glance over a factory kindled an idea of entrepreneurship in my mind. On deep contemplation on my vision, passion and dedication, I ventured towards the realization of that aspirational dream, which is now a big name in Steel Industry outfit, Balmukund Super Steel. With no prior background in this sector, I tried creating a business conglomerate with the technology and expertise to match the highest international standards. My dream not only changed my perspective on life, but also the lives of thousands of people. My employees, clients and the common people have benefitted from the company's products and other activities. My mantra has been \"Whatever you do, excel in it\". And in that, lies the philosophy and success of Balmukund Group of Industries.",
      expertise: ["CEO: Shri Nawal Kumar Kanodia",]
    },
    {
      name: "Abhishek Kanodia",
      position: "Director",
      description: "As I handheld Balmukund, with a goal to maintain it's rich legace of quality, I've, at firsthand ensured that the best quality goes into every piece of steel we produce. Balmukund Super Steel is built on a legacy of quality, integrity & customer satisfaction. We're proud to continue this tradition, ensuring that our products meet the highest standards and our service exceeds expectations. Thank you for being a part of our successful journey.",
      expertise: ["Director: Abhishek Kanodia"]
    },
    {
      name: "Pradip Kumar Sahewal",
      position: "Executive Director",
      description: "Balmukund Super Steel, where we take immense pride in ourselves on producing high-quality steel products tailored to meet diverse industrial, commercial and personal needs. We're entirely committed to ensure that our innovative manufacturing processes and affordability of our products continue to set industry benchmarks. Our excellence & customer satisfaction positions us as a trusted leader in the Construction sector. Thank you for choosing Balmukund Super Steel, where strength and reliability are forged into every product of our stable.",
      expertise: ["Executive Director : Abhishek Kanodia"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/board.jpg"
            alt="Board of Directors"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-16 pb-2bg-background">
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
                  {/* <div className="text-sm font-semibold text-foreground/60 mb-3">Areas of Expertise</div> */}
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
        
        </div>
      </section>
    </div>
  )
}


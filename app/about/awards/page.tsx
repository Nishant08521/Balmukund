import { Award, Trophy, Medal, Star } from "lucide-react"

export default function AwardsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/steel-i-beams-warehouse.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Acknowledgement</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Since day one we have strived to be the Earth's most customer-centric company. We're honored to be recognized for the work we do on behalf of our customers, employees, and communities around the world. Here are some recent awards we've received.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="size-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Arch of Excellence Award 2005</h3>
              <p className="text-foreground/70">
                Recognition for outstanding performance and excellence in the steel industry
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Trophy className="size-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Millenium Hall of Achiever's Fame Award 2005</h3>
              <p className="text-foreground/70">
                Honored for remarkable achievements and contributions to the industry
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Medal className="size-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Destination Bihar Expo 2018</h3>
              <p className="text-foreground/70">
                Awarded by Bihar Industries Association for excellence in industrial development
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Star className="size-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certificate of Appreciation</h3>
              <p className="text-foreground/70">
                By Bureau of Indian Standards for maintaining high quality standards
              </p>
            </div>
          </div>

          {/* Badges Section */}
          <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Quality Badges</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="text-center">
                <div className="w-32 h-32 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <img 
                    src="/placeholder.svg?height=96&width=96&query=ISO%209001" 
                    alt="ISO 9001" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-sm font-medium">ISO 9001</div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <img 
                    src="/placeholder.svg?height=96&width=96&query=ISI" 
                    alt="ISI Mark" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-sm font-medium">ISI Mark</div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <img 
                    src="/placeholder.svg?height=96&width=96&query=Make%20in%20India" 
                    alt="Make in India" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-sm font-medium">Make in India</div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-foreground/70">Years of Excellence</div>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">4</div>
              <div className="text-sm text-foreground/70">Major Awards</div>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">2005</div>
              <div className="text-sm text-foreground/70">First Excellence Award</div>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">2018</div>
              <div className="text-sm text-foreground/70">Latest Recognition</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


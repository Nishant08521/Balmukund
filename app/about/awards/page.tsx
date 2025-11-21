import { Award, Trophy, Medal, Star } from "lucide-react"

export default function AwardsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/award.jpg"
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Acknowledgement</h1>
          <p className="text-lg md:text-xl text-black mb-20 ">
            Since day one we have strived to be the Earth's most customer-centric company. We're honored to be recognized for the work we do on behalf of our customers, employees, and communities around the world. Here are some recent awards we've received.
          </p>
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
      
        </div>
      </section>
    </div>
  )
}


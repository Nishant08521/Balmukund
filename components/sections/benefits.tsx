import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    title: "Business Strength",
    desc: "Own a proven formula with robust support for setup and operations, enabling sustainable performance.",
  },
  {
    title: "Brand Benefits",
    desc: "Leverage an established brand presence with instant market recognition and customer trust.",
  },
  {
    title: "Exponential Growth",
    desc: "With products and marketing perfected, focus on daily operations to scale from a solid foundation.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" aria-labelledby="benefits-title" className="border-t bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="max-w-2xl">
          <h2 id="benefits-title" className="text-2xl md:text-3xl font-semibold">
            Why partner with Balmukund
          </h2>
          <p className="mt-2 text-foreground/70">Reliable products, professional teams, and a client-first mindset.</p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{b.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

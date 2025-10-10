import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
  {
    title: "TMT Bars",
    desc: "Engineered for high strength, better bonding, and safer handling with optimized carbon content for stability.",
    img: "/closeup-of-tmt-steel-bars-bundled.jpg",
  },
  {
    title: "Sponge Iron",
    desc: "High-quality feedstock for steelmaking with consistent chemistry and reliable supply.",
    img: "/sponge-iron-pellets-macro.jpg",
  },
  {
    title: "Pig Iron",
    desc: "Uniform composition for foundries and steel mills, enabling superior casting and processing.",
    img: "/pig-iron-ingots-stacked.jpg",
  },
  {
    title: "Structural Steel",
    desc: "Beams, channels, and angles for robust infrastructure and residential construction.",
    img: "/steel-i-beams-warehouse.jpg",
  },
]

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-40 ">
        <header className="max-w-2xl">
          <h2 id="products-title" className="text-2xl md:text-3xl font-semibold">
            Products
          </h2>
          <p className="mt-2 text-foreground/70">Quality you can trust. Precision you can build on.</p>
        </header>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <Card key={p.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="relative overflow-hidden rounded-md border">
                  <img
                    src={p.img || "/placeholder.svg"}
                    alt={`${p.title} illustration`}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-foreground/70">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

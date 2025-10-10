import { Image as ImageIcon } from "lucide-react"

export default function GalleryPage() {
  const galleryImages = [
    { src: "/hot-rolled-steel-mill-with-glowing-billets.jpg", title: "Hot Rolled Steel Mill", category: "Production" },
    { src: "/closeup-of-tmt-steel-bars-bundled.jpg", title: "TMT Steel Bars", category: "Products" },
    { src: "/steel-i-beams-warehouse.jpg", title: "Steel I-Beams Warehouse", category: "Facility" },
    { src: "/sponge-iron-pellets-macro.jpg", title: "Sponge Iron Pellets", category: "Products" },
    { src: "/pig-iron-ingots-stacked.jpg", title: "Pig Iron Ingots", category: "Products" },
    { src: "/workers-inspecting-steel-rebar-bundles.jpg", title: "Quality Inspection", category: "Quality Control" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-foreground text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/steel-i-beams-warehouse.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Explore our facilities, products, and manufacturing excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          {/* Introduction */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80">
              Take a visual tour of Balmukund Super Steel's state-of-the-art facilities, high-quality products, and commitment to manufacturing excellence. Our gallery showcases the technology, craftsmanship, and dedication that goes into every product we create.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-xs font-semibold mb-1 text-accent">{image.category}</div>
                      <div className="text-lg font-bold">{image.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-secondary rounded-xl p-6 text-center shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Production</h3>
              <p className="text-sm text-foreground/70">Manufacturing processes and facilities</p>
            </div>

            <div className="bg-secondary rounded-xl p-6 text-center shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Products</h3>
              <p className="text-sm text-foreground/70">Our range of steel products</p>
            </div>

            <div className="bg-secondary rounded-xl p-6 text-center shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Facility</h3>
              <p className="text-sm text-foreground/70">State-of-the-art infrastructure</p>
            </div>

            <div className="bg-secondary rounded-xl p-6 text-center shadow-lg">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="size-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Control</h3>
              <p className="text-sm text-foreground/70">Testing and inspection processes</p>
            </div>
          </div>

          {/* Video Section Placeholder */}
          <div className="bg-gradient-to-br from-primary to-foreground text-primary-foreground rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Video Tour</h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Take a virtual tour of our manufacturing facility and see our processes in action
            </p>
            <div className="aspect-video bg-black/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="size-16 mx-auto mb-4 opacity-50" />
                <p className="text-primary-foreground/70">Video content coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/tec.jpg"
            alt="Technology"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-6xl px-4 w-full">
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5 bg-background">
        <div className="mx-auto max-w-7xl px-4 space-y-12">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">OUR TECHNOLOGY</h2>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
            The cold twisted technology for manufacturing TMT bars has become quite obsolete. The present day Thermo-Mechanical treatment with an advanced water cooling system ensures great strength and flexibility of the TMT bars. BALMUKUND Super uses a specially designed Tempcore water cooling system for manufacturing TMT bars. This technology ensures superior strength compared to other products in the market.
            </p>
          </div>

          {/* Table + Illustration */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 mt-30">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Properties :-</h3>
              <div className="overflow-x-auto ">
                  <table className="w-full border-collapse">
                  <thead>
                      <tr className="text-white" style={{ backgroundColor: "rgb(66, 139, 202)" }}>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mechanical Properties</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Unit</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">IS:1786 Fe 500</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">IS:1786 Fe 500</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Balmukund Super</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 text-foreground">Yield Stress (YS)</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">N/mm²</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">500 min</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">500 min</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground font-semibold">540 min</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 text-foreground">Ultimate Tensile Strength (UTS)</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">N/mm²</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">545 min</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">565 min</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground font-semibold">600 min</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 text-foreground">UTS/YS</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">Ratio</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">1.08 min</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">1.10 min</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground font-semibold">1.12 min</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 text-foreground">Elongation</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">%</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">12 min</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground">16 min</td>
                      <td className="border border-gray-300 px-4 py-3 text-foreground font-semibold">18 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-center gap-2 text-foreground/60 text-sm">
                <span>←</span>
                <span>As obtained in 90% of the heats</span>
                <span>→</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md relative aspect-square">
                <img
                  src="/struct.webp"
                  alt="Building construction illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-secondary">
          <img
            src="/workers-inspecting-steel-rebar-bundles.jpg"
            alt="Engineers inspecting TMT bar bundles"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 id="about-title" className="text-2xl md:text-3xl font-semibold">
            About Balmukund
          </h2>
          <p className="mt-3 text-foreground/70">
            Balmukund Sponge & Iron (P) Limited is a trusted supplier of TMT Bars, Sponge Iron, Pig Iron, and structural
            steel. Since 1999, we have earned the confidence of customers across Bihar and Jharkhand, and we’re proud
            recipients of the Arch of Excellence Award.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-foreground/80">
            <li>• Leadership with integrity</li>
            <li>• Innovative engineering</li>
            <li>• High-quality professionals</li>
            <li>• Focus on our clients</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

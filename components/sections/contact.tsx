import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="max-w-2xl">
          <h2 id="contact-title" className="text-2xl md:text-3xl font-semibold">
            Contact
          </h2>
          <p className="mt-2 text-foreground/70">Reach out for product availability, dealership, or project pricing.</p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Head Office</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/70">
              Chatro, Tundi Road, P.O. Gadisrirampur, Giridih, Jharkhand
              <div className="mt-2">
                <a className="underline hover:no-underline" href="tel:+916532244163">
                  +91 6532 244163
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Registered Office</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/70">
              18, R. N. Mukherjee Road, 1st Floor, Kolkata 700001
              <div className="mt-2">
                <a className="underline hover:no-underline" href="tel:+913340325000">
                  +91 33 4032 5000
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/70">
              <a className="underline hover:no-underline" href="mailto:balmukundsponge@gmail.com">
                balmukundsponge@gmail.com
              </a>
              <div className="mt-4">
                <Button asChild>
                  <a href="mailto:balmukundsponge@gmail.com?subject=Inquiry%20-%20Balmukund%20Super%20Steel">
                    Send email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

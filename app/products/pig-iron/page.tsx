import { Boxes, Anvil, CheckCircle, Package2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function PigIronPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/Pig/pig1.jpg"
            alt="Pig Iron"
            width={1920}
            height={283}
            className="w-full h-80 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center">
        
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">PIG IRON</h2>
              <p className="text-lg text-foreground/80 mb-4">
              Pig iron is the product of smelting iron ore (also ilmenite) with a high-carbon fuel and reductant such as coke, usually with limestone as a flux. Charcoal and anthracite are also used as fuel and reductant. Pig iron is supplied in a variety of ingot sizes and weights, ranging from 3 kg up to more than 50 kg. Merchant pig iron is cold pig iron, cast into ingots and sold to third parties as feedstock for the steel and ferrous casting industries.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
              The term “pig iron” dates back to the time when hot metal was cast into ingots before being charged to the steel plant. The moulds were laid out in sand beds such that they could be fed from a common runner. The group of moulds resembled a litter of sucking pigs, the ingots being called “pigs” and the runner the “sow.”
                </p>
              {/* <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">High carbon content for optimal steel production</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Consistent quality and grade specifications</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Reliable supply for industrial needs</span>
                </div>
              </div> */}
            </div>
       
          </div>

          {/* Features */}
          

          {/* Specifications */}
        

          {/* Applications */}
       
        </div>
        <div className="mx-auto max-w-6xl px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Two Types Pig Iron :-</h2>
              <p className="text-lg text-foreground/80 mb-4">
              1. Basic Grade Basic pig iron has less than 1.0 percent silicon, under 1 percent manganese, and trace amounts of sulphur and phosphorous. This type of pig iron is mainly used for steel making. There are several grades specified in various standards based on silicon and manganese content of the pig iron.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
               2. Foundry Grade This type of pig iron is being used in iron foundries and contains higher silicon. Various standards specify composition limits for silicon and manganese for different grades of this type of pig iron. Silicon content in foundry grade pig iron is much higher and usually between 1.5 and 3.5 percent. It can be as high as 4.25%.
              </p>
             
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/Pig/pig2.png"
                alt="Pig Iron"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          </div>

         
          <section className="px-6 md:px-12 lg:px-20 py-2">
  <h2 className="text-4xl md:text-5xl font-semibold text-[#1e2a3a] mb-8">
    Properties of Pig Iron
  </h2>

  <div className="bg-gray-100 p-8 md:p-12 rounded-lg">
    <p className="text-gray-700 leading-relaxed mb-6">
      Pig iron is hard, wear resistant, fairly fusible and very brittle. 
      It is not useful directly as a material except for limited applications. 
      It has a low melting point (Around 1200 deg C) as compared to steel. 
      Typically its hardness varies between 250 to 450 BHN, tensile strength 
      between 50 to 25 kNs and % Elongation around 0% and 0.5%.
    </p>

    <p className="text-gray-700 leading-relaxed">
      The lower melting point of pig iron combined with higher density of the 
      charge due to it, results into lower energy requirements and faster 
      melting time when compared to that of an all steel charge make-up.
    </p>
  </div>
</section>
<section className="px-6 md:px-12 lg:px-20 py-2">
  <h2 className="text-4xl md:text-5xl font-semibold text-[#1e2a3a] mb-8">
  Uses of Pig Iron
  </h2>

  <div className="bg-gray-100 p-8 md:p-12 rounded-lg">
    <p className="text-gray-700 leading-relaxed mb-6">
    Traditionally pig iron was worked into wrought iron in forging shops. Later this iron was used in puddling furnaces. In these processes, pig iron is melted and a strong current of air is directed over it while it is being stirred or agitated. This causes the dissolved impurities (such as silicon) to be thoroughly oxidized. An intermediate product of puddling is known as refined pig iron or refined iron.
    More recently pig iron is used in making steel in induction furnace and electric arc furnace. It also replaces scrap in BOF during the period of scrap shortage.
    </p>

    <p className="text-gray-700 leading-relaxed">
    Pig iron can also be used to produce gray iron. This is achieved by remelting pig iron, often along with substantial quantities of steel and scrap iron, removing undesirable contaminants, adding alloys and adjusting the carbon content.
    </p>
  </div>
</section>
           
      </section>

   
      {/* CTA Section */}
   
    </div>
  )
}

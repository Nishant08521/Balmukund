import { Hero } from "@/components/sections/hero"
import { Products } from "@/components/sections/products"
import { Benefits } from "@/components/sections/benefits"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import ChairmanMessagePage from "@/app/chairman-message/page"
import OurProfilePage from "./our-profile/page"
import FollowOnSocialPage from "./follow-on-social/page"
import WhyChooseUsPage from "./why-choose-us/page"
import BalmukundSuperstarPage  from "./balmukund-superstar/page"
import  ProductsShowcasePage from "./products-showcase/page"
import ModernDesignPage from "./modern-design/page"
import BalmukundPage from "./balmukund/page"
export default function Page() {
  return (
    <>
      <Hero />
      <ChairmanMessagePage />
      <OurProfilePage />
      <FollowOnSocialPage />
      <WhyChooseUsPage />
      <BalmukundPage />
      {/* <BalmukundSuperstarPage /> */}
      <ProductsShowcasePage />
      <ModernDesignPage />
      {/* <Products /> */}
      {/* <Benefits /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </>
  )
}

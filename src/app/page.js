import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Services from "@/components/sections/Services"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import BlogPreview from "@/components/sections/BlogPreview"
import Contact from "@/components/sections/Contact"

export const metadata = {
  title: "CrossCurrencyFX | Smart Forex Solutions",
  description: "Professional forex and currency exchange solutions.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <Contact />
    </>
  )
}

import Hero from "@/components/Hero/Hero";
import ServicesSlider from "@/components/ServicesSlider/ServicesSlider";
import Projects from "@/components/Projects/Projects";
import Detailing from "@/components/Detailing/Detailing";
import Popular from "@/components/Populars/Popular";
import Features from "@/components/Features/features";
import Reviews from "@/components/Reviews/Reviews";
import Contatcs from "@/components/Contacts/Contatcs";


export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSlider />
      <Projects/>
      <Detailing/>
      <Popular/>
      <Features/>
      <Reviews/>
      <Contatcs/>
    </main>
  );
}

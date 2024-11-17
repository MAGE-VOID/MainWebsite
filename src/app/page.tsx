// src/app/page.tsx
import Header from "@/components/HeaderModule/Header";
import Hero from "@/components/HeroModule/Hero";
import Section_1 from "@/components/Sections/Section_1/Section_1";
import Section_2 from "@/components/Sections/Section_2/Section_2";
import Section_3 from "@/components/Sections/Section_3/Section_3";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      

      <Hero />
 
      <Section_1 />
      <Section_2 />
      <Section_3 />

      <Footer />
      
    </div>
  );
}

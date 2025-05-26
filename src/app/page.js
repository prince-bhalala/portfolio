import Herosection from "@/components/Herosection.js"; 
import Skills from "@/components/skills.js";
import AboutSection from "@/components/about.js";
import ContactSection from "@/components/contect.js";
import Footer from "@/components/footer.js";
export default function Home() {
  return (
    <>
      <Herosection/>
      <Skills/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

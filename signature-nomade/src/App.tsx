import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { SavoirFaire } from "./components/SavoirFaire";
import { Pricing } from "./components/Pricing";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Loader />
      <a
        href="#hero"
        className="fixed left-3 top-3 z-[120] rounded-full bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink opacity-0 focus:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SavoirFaire />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}

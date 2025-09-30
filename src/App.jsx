import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoShowcase from "./components/LogoShowcase";
import AboutUs from "./components/PitchDeckShowcase";
import OurValues from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen corporate-gradient">
      <Header />
      <main>
        <Hero />
        <LogoShowcase />
        <AboutUs />
        <OurValues />
      </main>
      <Footer />
    </div>
  );
}

export default App;

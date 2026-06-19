import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/MissionSection";
import Navbar from "./components/Navbar";
import OngoingProjects from "./components/OngoingProjects";
import Service from "./components/Services";
import VehicleSupport from "./components/VehicleSupport";


const App = () => {
  return (
    <main className="bg-[#04142E] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Service />
      <VehicleSupport />
      <OngoingProjects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BuySection from './components/BuySection';
import GamingWorldSection from './components/GamingworldSection';
import RoadmapSection from './components/RoadmapSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import '../src/assets/css/light.css';
import '../src/assets/css/flipclock.css';

function App() {
  return (
    <>
      <Navbar />
      <BuySection />
      <GamingWorldSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;

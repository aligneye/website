import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductSlider from './components/ProductSlider';
import Footer from './components/Footer';
import AboutSection from './components/about';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <ProductSlider />
          <AboutSection/>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
import Header from "./components/Header/Header";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./global.css";

function App() {
  return (
    <div className="font-sans antialiased bg-rose-50 text-gray-800">
      <Header />
      <FeaturedProducts />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

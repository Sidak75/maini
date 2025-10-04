import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import TotalBrands from './pages/TotalBrands.jsx';
import Company from './pages/Company.jsx';
import NewsGallery from './pages/NewsGallery.jsx';
import Contact from './pages/Contact.jsx';
import Career from './components/Career.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <BrowserRouter basename="/maini">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<TotalBrands />} />
        <Route path="/company" element={<Company />} />
        <Route path="/newsgallery" element={< NewsGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


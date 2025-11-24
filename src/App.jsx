// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Careers, Contact, CSR, Expertise, Home, Leadership, MediaCoverage, NewsUpdates } from "./pages";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news-updates" element={<NewsUpdates/>} />
        <Route path="/media-coverage" element={<MediaCoverage/>} />
        <Route path="/csr" element={<CSR/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

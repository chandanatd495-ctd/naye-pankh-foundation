import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Volunteer from "./Pages/Volunteer";
import Donate from "./Pages/Donate";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
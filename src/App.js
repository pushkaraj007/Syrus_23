import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact";
import MyTeacher from "./pages/MyTeacher";

import "./assets/css/style.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/myteachers" element={<MyTeacher />} />
        <Route exact path="/appointment" element={<About />} />
        <Route exact path="/myclass" element={<About />} />
        <Route exact path="/subject/detail" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./assets/css/style.css";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TeacherAbout from "./pages/TeacherAbout";
import TeacherClass from "./pages/TeacherClass";
import TeacherHome from "./pages/TeacherHome";
import TeacherUpload from "./pages/TeacherUpload";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacherhome" element={<TeacherHome />} />
        <Route path="/teacherabout" element={<TeacherAbout />} />
        <Route path="/teacherupload" element={<TeacherUpload />} />
        <Route path="/teacherclasses" element={<TeacherClass />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

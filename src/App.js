import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./assets/css/style.css";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TeacherAbout from "./pages/TeacherAbout";
import TeacherClass from "./pages/TeacherClass";
import TeacherHome from "./pages/TeacherHome";
import TeacherUpload from "./pages/TeacherUpload";
// import Voice from "./pages/Voice";

const annyang = require("annyang");

function App() {
  function voiceOn() {
    console.log("voice on");
    if (annyang) {
      const commands = {
        welcome: () => {
          alert("Hello world!");
          console.log("Hello world!");
        },
        "go to home": () => {
          window.location.href = "/";
        },
        "go to contact us": () => {
          window.location.href = "/contact";
        },
        "go to about us": () => {
          window.location.href = "/about";
        },
        "open arts and drawing": () => {
          window.location.href = "/detailsartsanddraw";
        },
      };

      annyang.addCommands(commands);

      annyang.start();
    }
  }
  return (
    <div>
      <div
        style={{
          position: "float",
          position: "sticky",
          zIndex: "10000",
          top: "20px",
          marginLeft: "20px",
        }}
      >
        <button onClick={voiceOn} style={{padding: "15px 15px", border: "none", background: "#007bff", borderRadius: "50%"}}>
          <i class="fa fa-microphone" style={{fontSize: "25px", color: "white"}}></i>
        </button>
      </div>
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
          <Route path="/detailsartsanddraw" element={<Details />} />

          {/* <Route path="/voice" element={<Voice />} /> */}

          <Route path="/teacherclasses" element={<TeacherClass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

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

import Test from "./pages/Test";

import TopicList from "./pages/TopicList";

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
        "Home page": () => {
          window.location.href = "/";
        },
        "go to contact us": () => {
          window.location.href = "/contact";
        },
        "go to about us": () => {
          window.location.href = "/about";
        },
        "about us page": () => {
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
          position: "fixed",
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

          <Route exact path="/about" element={<About />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/appointment" element={<Appointment />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/teacherhome" element={<TeacherHome />} />
          <Route exact path="/teacherabout" element={<TeacherAbout />} />
          <Route exact path="/teacherupload/:std/:sub" element={<TeacherUpload />} />
          <Route exact path="/details/:std/:sub/:top" element={<Details />} />

          <Route path="/topiclist" element={<TopicList />} />


          {/* <Route path="/voice" element={<Voice />} /> */}

          <Route path="/teacherclasses" element={<TeacherClass />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

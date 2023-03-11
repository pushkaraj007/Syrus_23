import React,{useState} from 'react'
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
var CryptoJS = require("crypto-js");

const AdminAddTeach = () => {
    const [subject, setSubject] = useState("");
    const [standard, setStandard] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);
    var img = "";
    async function uploadImage(e) {
        e.preventDefault();
        alert("Uploading Image")
        if (!image){
            alert("imageFile is null");
            submitData();
            return
        }
        const videoref = ref(storage, `images/${email}`);
        uploadBytes(videoref, image).then(() => {
          getDownloadURL(videoref).then((url) => {
            img = url;
            alert("Image Uploaded");
            submitData();
          })
        })
      }

      async function submitData() {
        console.log('submit')
        const res = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            password,
            contact,
            address,
            email,
            profile: img,
            course: {
                standard:standard,
                subject:subject
              },
            role: "teacher"
          })
        })
    
        const data = await res.json();
        alert(data.status)
      }

    return (
        <div class="container-xxl bg-white p-0">

            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
                <a href="/teacherhome" class="navbar-brand">
                    <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3"></i>EduAbled</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <a href="/adminhome" class="nav-item nav-link">Home</a>
                        <a href="/adminabout" class="nav-item nav-link">About Us</a>
                        <a href="/admin/addteachers" class="nav-item nav-link active">Add Teachers</a>
                        <a href="/admin/addstudents" class="nav-item nav-link">Add Students</a>
                    </div>
                    <a href="" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Login<i class="fa fa-user-circle ms-3"></i></a>
                </div>
            </nav>

            <div class="container-xxl py-5 page-header position-relative mb-5">
                <div class="container py-5">
                    <h1 class="display-2 text-white animated slideInDown mb-4">Add/Edit Teachers</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/adminhome">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Add or Edit Teachers</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div class="container-xxl py-5">
                <p className='all-text' style={{ fontSize: "2.5em", textAlign: "center" }}>Add Teacherss</p>

                <form onSubmit={uploadImage}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1" style={{ fontSize: "1.5em" }}>Teacher's Full Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="Aaman Alok Bhowmick" onChange={(e) => {setName( e.target.value )}}/>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label for="email" style={{ fontSize: "1.5em" }}>Email ID:</label>
                            <input type="text" class="form-control" placeholder="aaman@gmail.com" onChange={(e) => {setEmail( e.target.value )}}/>
                        </div>
                        <div class="col">
                            <label for="number" style={{ fontSize: "1.5em" }}>Contact No.:</label>
                            <input type="number" class="form-control" placeholder="9876543210" onChange={(e) => {setContact( e.target.value )}}/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleFormControlInput1" style={{ fontSize: "1.5em" }}>Upload Image:</label>
                        <input type="file" class="form-control" id="image" placeholder="" accept="image/*" onChange={(e) => {setImage( e.target.files[0] )}}/>
                    </div>

                    <div class="row" style={{marginTop: "15px"}}>
                        <div class="col">
                            <label for="std" style={{ fontSize: "1.5em" }}>Standard:</label>
                            <select class="form-control" id="standard_select" onChange={(e) => {setStandard( e.target.value )}}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="sub" style={{ fontSize: "1.5em" }}>Subject:</label>
                            <select class="form-control" id="subject_select" onChange={(e) => {setSubject( e.target.value )}}>
                                <option value="Arts & Drawing">Arts & Drawing</option>
                                <option value="Sciences">Sciences</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="English">English</option>
                                <option value="History & Civics">History & Civics</option>
                                <option value="Geography & Economics">Geography & Economics</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="Address" style={{ fontSize: "1.5em", marginTop: "15px" }}>Address:</label>
                        <textarea class="form-control" id="address" rows="3" onChange={(e) => {setAddress( e.target.value )}}></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="password" style={{ fontSize: "1.5em" }}>Password:</label>
                        <input type="password" class="form-control" id="name" placeholder="name@123" onChange={(e) => {setPassword( e.target.value )}}/>
                    </div>

                    <button type="submit" style={{width: "100%", height: "40px", marginTop: "15px", border: "none", borderRadius: "5px", background: "#007bff", color: "white", fontWeight: "500"}}>Submit</button>
                </form>

            </div>


            <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h3 class="text-white mb-4">Get In Touch</h3>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Collector Colony, Chembur</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 98765 43210</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>eduabled@gmail.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h3 class="text-white mb-4">Quick Links</h3>
                            <a class="btn btn-link text-white-50" href="/adminabout">About Us</a>
                            <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h3 class="text-white mb-4">Photo Gallery</h3>
                            <div class="row g-2 pt-2">
                                <div class="col-4">
                                    <img class="img-fluid rounded bg-light p-1" src="img/classes-1.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded bg-light p-1" src="img/classes-2.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded bg-light p-1" src="img/classes-3.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded bg-light p-1" src="img/classes-4.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded bg-light p-1" src="img/classes-5.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded bg-light p-1" src="img/classes-6.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h3 class="text-white mb-4">Newsletter</h3>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative mx-auto" >
                                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="#">EduAbled</a>, All Right Reserved.
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="/adminhome">Home</a>
                                    <a href="/adminabout">About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </div>
    )
}

export default AdminAddTeach
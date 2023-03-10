import React, { useState } from "react";
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';

var CryptoJS = require("crypto-js");
const TeacherUpload = () => {
    const { std,sub } = useParams();
    const [cookies] = useCookies('user');
    if(!cookies.user){
        window.location.href = '/login';
    }
  var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  const useremail = decryptedData.email;
    var firebasevideo = "";
    var firebasepdf = "";
    const [videoUrl, setVideoUrl] = useState("");
    const [videoFile, setVideoFile] = useState("");
    const [pdfFile, setPdfFile] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState(sub);
    const [standard, setStandard] = useState(std);
    const [teacher, setTeacher] = useState(useremail);
    async function uploadVideo() {
        alert("Uploading Video")
        if (!videoFile){
            alert("videoFile is null");
            return;
        }
        const videoref = ref(storage, `material/${standard}/${subject}/video/${topic}`);
        uploadBytes(videoref, videoFile).then(() => {
          getDownloadURL(videoref).then((url) => {
            alert(`video url: ${url}`);
            firebasevideo = url;
            uploadPdf();
          })
        })
      }
    
      async function uploadPdf() {
        if (!pdfFile) return;
        const pdfref = ref(storage, `material/${standard}/${subject}/resources/${topic}`);
        uploadBytes(pdfref, pdfFile).then(() => {
          getDownloadURL(pdfref).then((url) => {
            firebasepdf = url;
            alert("Upload Successfull");
            submitData();
          })
        })
      }

    const handleVideoSelect = (event) => {
        const vid = event.target.files[0];
        const videoUrl = URL.createObjectURL(vid);
        setVideoUrl(videoUrl);
    };

    const [pdfUrl, setPdfUrl] = useState("");

    const handlePdfSelect = (event) => {
        const p = event.target.files[0];
        const pdfUrl = URL.createObjectURL(p);
        setPdfUrl(pdfUrl);
    };
    function upload (e) {
        e.preventDefault();
        uploadVideo();
    }
    async function submitData() {
        console.log('submit')
        const res = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            topic,
            description,
            subject,
            standard,
            teacher,
            resources: {
                video : firebasevideo,
                pdf: firebasepdf
            }
          })
        })
    
        const data = await res.json();
        alert(data.status)
      }
    return (
        <div class="container-xxl bg-white p-0" className={style['style']}>

            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
                <a href="/teacherhome" class="navbar-brand">
                    <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3"></i>EduAbled</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <a href="/teacherhome" class="nav-item nav-link active">Home</a>
                        <a href="/teacherabout" class="nav-item nav-link">About Us</a>
                        <a href="/teacherclasses" class="nav-item nav-link">Class</a>
                        <a href="/teachercontact" class="nav-item nav-link">Contact Us</a>
                    </div>
                    <a href="" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Login<i class="fa fa-user-circle ms-3"></i></a>
                </div>
            </nav>

            <div class="container-xxl py-5 page-header position-relative mb-5">
                <div class="container py-5">
                    <h1 class="display-2 text-white animated slideInDown mb-4">Upload Materials</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/teacherhome">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Upload Materials</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="container-xxl py-5">
                <p className='all-text' style={{ fontSize: "2.5em", textAlign: "center" }}>Upload Videos, Study Materials and Test</p>
                <form onSubmit={upload}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1" style={{ fontSize: "1.5em" }}>Topic Name</label>
                        <input type="text" class="form-control" id="topic_name" placeholder="Addition" onChange={(e) => {setTopic( e.target.value )}}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" style={{ fontSize: "1.5em" }}>Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => {setDescription( e.target.value )}}></textarea>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="exampleFormControlFile1" style={{ fontSize: "1.5em" }}>Upload Videos</label>
                            <input type="file" class="form-control-file" accept="video/*" onChange={(e)=>{setVideoFile(e.target.files[0]);handleVideoSelect(e);}}  id="file-select" />
                            {videoUrl && <video src={videoUrl} controls style={{ width: "100%", height: "300px" }} />}
                        </div>
                        <div class="col">
                            <label for="exampleFormControlFile1" style={{ fontSize: "1.5em" }}>Upload PDF</label>
                            <input type="file" class="form-control-file" accept="application/pdf,application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation" onChange={(e)=>{;setPdfFile(e.target.files[0]);handlePdfSelect(e)}} id="pdfInput" />
                            {pdfUrl && <iframe src={pdfUrl} width="100%" height="300px" />}
                        </div>
                    </div>
                    <button type="submit" style={{width: "100%", height: "40px", marginTop: "30px", border: "none", borderRadius: "5px", background: "#007bff", color: "white", fontWeight: "500"}}>Submit</button>
                </form>

            </div>



            <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h3 class="text-white mb-4">Get In Touch</h3>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Collector Colony, Chembur</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 98765 43210</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h3 class="text-white mb-4">Quick Links</h3>
                            <a class="btn btn-link text-white-50" href="/about">About Us</a>
                            <a class="btn btn-link text-white-50" href="/contact">Contact Us</a>
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
                                &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="/">Home</a>
                                    <a href="/about">About Us</a>
                                    <a href="/contact">Contact Us</a>
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
export default TeacherUpload;


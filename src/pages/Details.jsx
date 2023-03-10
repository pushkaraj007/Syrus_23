import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const { std,sub,top } = useParams();
    const [point, setPoint] = useState(0);
    const [details, setDetails] = useState([]);
    function rewardPoint() {
        setPoint(point + 1);
        console.log("Point rewarded! Total points: " + (point + 1));

    }

    async function getDetails() {
        const res = await fetch('http://localhost:5000/details', {
            method: 'POST',
            body: JSON.stringify({ standard:std, subject:sub, topic:top }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data.data);
        setDetails(data.data);
    }

    useEffect(() => {
        getDetails();
    }, []);
    if(details.length !== 0){
    return (
        <div class="container-xxl bg-white p-0">

            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
                <a href="/" class="navbar-brand">
                    <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3"></i>EduAbled</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <a href="/" class="nav-item nav-link active">Home</a>
                        <a href="/about" class="nav-item nav-link">About Us</a>
                        <a href="/classes" class="nav-item nav-link">Class</a>
                        <a href="classes.html" class="nav-item nav-link">My Teachers</a>
                        <a href="classes.html" class="nav-item nav-link">Gallery</a>
                        <a href="/contact" class="nav-item nav-link">Contact Us</a>
                    </div>
                    <a href="" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Login<i class="fa fa-user-circle ms-3"></i></a>
                </div>
            </nav>

            <div class="container-xxl py-5 page-header position-relative mb-5">
                <div class="container py-5">
                    <h1 class="display-2 text-white animated slideInDown mb-4">Details of <br /> {top}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href="/classes">My Class</a></li>
                            <li class="breadcrumb-item"><a href="/topiclist">Topic</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Details</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <p className='all-text' style={{ fontSize: '3em', fontWeight: '700' }}>{sub}</p>
                <div className="parent-div-wrap" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <div className="left-side-div" style={{ width: "76%" }}>
                        <video width="1000" height="600" controls onEnded={rewardPoint}>
                            <source src={details[0].resources.video} type="video/mp4" />
                        </video>
                        <p className='all-text' style={{ marginTop: "20px", fontSize: "2em" }}>{top}</p>
                        <p style={{ fontSize: "1.25em", fontWeight: "500" }}>{details[0].description}</p>
                    </div>
                    <div className="right-side-div" style={{ width: "20%", marginTop: "20px" }}>
                        <p className='all-text' style={{ fontSize: "2em" }}>Study Material</p>
                        <button style={{ width: "100%", height: "40px", color: "white", background: "#007bff", border: "none", borderRadius: "5px" }}>Open</button>
                        <p className='all-text' style={{ fontSize: "2em", marginTop: "30px" }}>Any Doubts</p>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button style={{ width: "100%", marginTop: "10px", height: "40px", color: "white", background: "#007bff", border: "none", borderRadius: "5px" }}>Submit</button>
                        <p className='all-text' style={{ fontSize: "2em", marginTop: "30px" }}>Your Total Stars:</p>
                        <div className="stars-wrap" style={{display: "flex", width: "100%", justifyContent: "center"}}>
                            <p className='all-text' id='stars-count' style={{ fontSize: "3em", textAlign: "center", width: "120px", height: "120px", border: "1px solid #007bff", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}> {point}  <i class="fa fa-star" style={{ color: "gold", fontSize: "0.75em" }}></i></p>
                        </div>
                    </div>
                </div>
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
    else{
        return(
            <div>
                Loading
            </div>
        )
    }
}

export default Details
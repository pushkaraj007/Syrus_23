import React from 'react'


export default function Contact() {
    return (
        <div class="container-xxl bg-white p-0">
            {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary"  role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}

            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
                <a href="index.html" class="navbar-brand">
                    <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3"></i>EduAbled</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <a href="/" class="nav-item nav-link">Home</a>
                        <a href="/about" class="nav-item nav-link">About Us</a>
                        <a href="/classes" class="nav-item nav-link">Class</a>
                        <a href="classes.html" class="nav-item nav-link">My Teachers</a>
                        <a href="classes.html" class="nav-item nav-link">Gallery</a>
                        <a href="/contact" class="nav-item nav-link active">Contact Us</a>
                    </div>
                    <a href="" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Login<i class="fa fa-user-circle ms-3"></i></a>
                </div>
            </nav>

            <div class="container-xxl py-5 page-header position-relative mb-5">
                <div class="container py-5">
                    <h1 class="display-2 text-white animated slideInDown mb-4">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 class="mb-3">Get In Touch</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                            eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div class="row g-4 mb-5">
                        <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "75px", height: "75px" }}>
                                <i class="fa fa-map-marker-alt fa-2x text-primary"></i>
                            </div>
                            <h6>Collectors Colony, Chembur Colony</h6>
                        </div>
                        <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "75px", height: "75px" }}>
                                <i class="fa fa-envelope-open fa-2x text-primary"></i>
                            </div>
                            <h6>eduabled@gmail.com</h6>
                        </div>
                        <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "75px", height: "75px" }}>
                                <i class="fa fa-phone-alt fa-2x text-primary"></i>
                            </div>
                            <h6>+91 98765 43210</h6>
                        </div>
                    </div>
                    <div class="bg-light rounded">
                        <div class="row g-0">
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div class="h-100 d-flex flex-column justify-content-center p-5">
                                    <p class="mb-4" style={{ fontSize: "2em", fontWeight: "600" }}>Give Us Your Valuable Feedback</p>
                                    <form>
                                        <div class="row g-3">
                                            {/* <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-0" id="name" placeholder="Your Name"/>
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control border-0" id="email" placeholder="Your Email"/>
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div> */}
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control border-0" id="subject" placeholder="Subject" />
                                                    <label for="subject">Subject</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <textarea class="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                                                    <label for="message">Message</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px" }}>
                                <div class="position-relative h-100">
                                    <iframe class="position-relative rounded w-100 h-100" id="gmap_canvas" src="https://maps.google.com/maps?q=vesit&t=k&z=6&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>
                            </div>
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


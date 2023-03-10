import React from 'react'

const TeacherClass = () => {
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
                    <h1 class="display-2 text-white animated slideInDown mb-4">My Classes</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/teacherhome">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>My Classes</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                        <h1 class="mb-3">My Classes</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src="img/classes-1.jpg" alt="" />
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href="">Art & Drawing</a>
                                    <div class="d-flex align-items-center justify-content-center mb-4">
                                        <div class="d-flex align-items-center" style={{textAlign: "center"}}>
                                                <h6 class="text-primary mb-1" style={{fontSize: "1.5em", fontWeight: "bolder"}}>Standard: IV</h6>
                                        </div>
                                    </div>
                                    <div className="add-upload-btn" style={{display: "flex", width: "100%"}}>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Add</span>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Test</span>
                                    </div>
                                    <div class="row g-1" style={{marginTop: "20px"}}>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Videos:</h6>
                                                <small>20 <span>videos</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Materials:</h6>
                                                <small>20 <span>pdfs</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Notices:</h6>
                                                <small>2</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src="img/classes-2.jpg" alt="" />
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href="">Mathematics</a>
                                    <div class="d-flex align-items-center justify-content-center mb-4">
                                        <div class="d-flex align-items-center" style={{textAlign: "center"}}>
                                                <h6 class="text-primary mb-1" style={{fontSize: "1.5em", fontWeight: "bolder"}}>Standard: IV</h6>
                                        </div>
                                    </div>
                                    <div className="add-upload-btn" style={{display: "flex", width: "100%"}}>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Add</span>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Test</span>
                                    </div>
                                    <div class="row g-1" style={{marginTop: "20px"}}>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Videos:</h6>
                                                <small>20 <span>videos</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Materials:</h6>
                                                <small>20 <span>pdfs</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Notices:</h6>
                                                <small>2</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src="img/classes-3.png" alt="" />
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href="">Sciences</a>
                                    <div class="d-flex align-items-center justify-content-center mb-4">
                                        <div class="d-flex align-items-center" style={{textAlign: "center"}}>
                                                <h6 class="text-primary mb-1" style={{fontSize: "1.5em", fontWeight: "bolder"}}>Standard: IV</h6>
                                        </div>
                                    </div>
                                    <div className="add-upload-btn" style={{display: "flex", width: "100%"}}>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Add</span>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Test</span>
                                    </div>
                                    <div class="row g-1" style={{marginTop: "20px"}}>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Videos:</h6>
                                                <small>20 <span>videos</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Materials:</h6>
                                                <small>20 <span>pdfs</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Notices:</h6>
                                                <small>2</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src="img/classes-4.jpeg" alt="" />
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href="">English</a>
                                    <div class="d-flex align-items-center justify-content-center mb-4">
                                        <div class="d-flex align-items-center" style={{textAlign: "center"}}>
                                                <h6 class="text-primary mb-1" style={{fontSize: "1.5em", fontWeight: "bolder"}}>Standard: IV</h6>
                                        </div>
                                    </div>
                                    <div className="add-upload-btn" style={{display: "flex", width: "100%"}}>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Add</span>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Test</span>
                                    </div>
                                    <div class="row g-1" style={{marginTop: "20px"}}>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Videos:</h6>
                                                <small>20 <span>videos</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Materials:</h6>
                                                <small>20 <span>pdfs</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Notices:</h6>
                                                <small>2</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src="img/classes-5.jpeg" alt="" />
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href="">History & Civics</a>
                                    <div class="d-flex align-items-center justify-content-center mb-4">
                                        <div class="d-flex align-items-center" style={{textAlign: "center"}}>
                                                <h6 class="text-primary mb-1" style={{fontSize: "1.5em", fontWeight: "bolder"}}>Standard: IV</h6>
                                        </div>
                                    </div>
                                    <div className="add-upload-btn" style={{display: "flex", width: "100%"}}>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Add</span>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Test</span>
                                    </div>
                                    <div class="row g-1" style={{marginTop: "20px"}}>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Videos:</h6>
                                                <small>20 <span>videos</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Materials:</h6>
                                                <small>20 <span>pdfs</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Notices:</h6>
                                                <small>2</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src="img/classes-6.jpg" alt="" />
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href="">Geography & Economics</a>
                                    <div class="d-flex align-items-center justify-content-center mb-4">
                                        <div class="d-flex align-items-center" style={{textAlign: "center"}}>
                                                <h6 class="text-primary mb-1" style={{fontSize: "1.5em", fontWeight: "bolder"}}>Standard: IV</h6>
                                        </div>
                                    </div>
                                    <div className="add-upload-btn" style={{display: "flex", width: "100%"}}>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Add</span>
                                        <span class="bg-primary text-white rounded-pill py-2 px-5" style={{margin: "10px auto", cursor: "pointer"}} href="">Test</span>
                                    </div>
                                    <div class="row g-1" style={{marginTop: "20px"}}>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Videos:</h6>
                                                <small>20 <span>videos</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Materials:</h6>
                                                <small>20 <span>pdfs</span></small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Notices:</h6>
                                                <small>2</small>
                                            </div>
                                        </div>
                                    </div>
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

export default TeacherClass
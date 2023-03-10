import React, { useEffect, useState } from "react";

const Home = () => {
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
            <div class="container-fluid p-0 mb-5">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" style={{ filter: "brightness(70%)" }} src="img/carousel-1.jpg" alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 style={{ fontWeight: "1000", fontSize: "4em" }} className="carousel-text">My Caption Title (1st Image)</h5>
                                <p style={{ fontSize: "2em" }} className="carousel-text-desc">The whole caption will only show up if the screen is at least medium size.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" style={{ filter: "brightness(70%)" }} src="img/carousel-2.jpg" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" style={{ filter: "brightness(70%)" }} src="img/carousel-1.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                        <h1 class="mb-3">School Facilities</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="facility-item">
                                <div class="facility-icon bg-primary">
                                    <span class="bg-primary"></span>
                                    <i class="fa fa-microphone fa-2x text-primary"></i>
                                    <span class="bg-primary"></span>
                                </div>
                                <div class="facility-text bg-primary">
                                    <h3 class="text-primary mb-3">Voice Controls</h3>
                                    <p class="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="facility-item">
                                <div class="facility-icon bg-success">
                                    <span class="bg-success"></span>
                                    <i class="fa fa-bullhorn fa-2x text-success"></i>
                                    <span class="bg-success"></span>
                                </div>
                                <div class="facility-text bg-success">
                                    <h3 class="text-success mb-3">Text to Speech</h3>
                                    <p class="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="facility-item">
                                <div class="facility-icon bg-warning">
                                    <span class="bg-warning"></span>
                                    <i class="fa fa-globe fa-2x text-warning"></i>
                                    <span class="bg-warning"></span>
                                </div>
                                <div class="facility-text bg-warning">
                                    <h3 class="text-warning mb-3">Multilingual Study Material</h3>
                                    <p class="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="facility-item">
                                <div class="facility-icon bg-info">
                                    <span class="bg-info"></span>
                                    <i class="fa fa-handshake fa-2x text-info"></i>
                                    <span class="bg-info"></span>
                                </div>
                                <div class="facility-text bg-info">
                                    <h3 class="text-info mb-3">One to One Guidance</h3>
                                    <p class="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 class="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                            <div class="row g-4 align-items-center">
                                <div class="col-sm-6">
                                    <a class="btn btn-primary rounded-pill py-3 px-5" href="">Read More</a>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                        <div class="ms-3">
                                            <h6 class="text-primary mb-1">Jhon Doe</h6>
                                            <small>CEO & Founder</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <img class="img-fluid w-75 rounded-circle bg-light p-3" src="img/about-1.jpg" alt="" />
                                </div>
                                <div class="col-6 text-start" >
                                    <img class="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-2.jpg" alt="" />
                                </div>
                                <div class="col-6 text-end" >
                                    <img class="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="container-xxl py-5">
            <div class="container">
                <div class="bg-light rounded">
                    <div class="row g-0">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s" >
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded" src="img/call-to-action.jpg" />
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div class="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 class="mb-4">Become A Teacher</h1>
                                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <a class="btn btn-primary py-3 px-5" href="">Get Started Now<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                        <h1 class="mb-3">My Subjects</h1>
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
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-primary mb-1">Sparsh Verma</h6>
                                                <small>Teacher</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-1">
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
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-primary mb-1">Shree Samal</h6>
                                                <small>Teacher</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-1">
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
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-primary mb-1">Aaman Bhowmick</h6>
                                                <small>Teacher</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-1">
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
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-primary mb-1">Manali Bhave</h6>
                                                <small>Teacher</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-1">
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
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-primary mb-1">Sanskruti</h6>
                                                <small>Teacher</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-1">
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
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-primary mb-1">Nilay Pophalkar</h6>
                                                <small>Teacher</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-1">
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

            {/* <div class="container-xxl py-5">
            <div class="container">
                <div class="bg-light rounded">
                    <div class="row g-0">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div class="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 class="mb-4">Make Appointment</h1>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-0" id="gname" placeholder="Gurdian Name"/>
                                                <label for="gname">Gurdian Name</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control border-0" id="gmail" placeholder="Gurdian Email"/>
                                                <label for="gmail">Gurdian Email</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-0" id="cname" placeholder="Child Name"/>
                                                <label for="cname">Child Name</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-0" id="cage" placeholder="Child Age"/>
                                                <label for="cage">Child Age</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control border-0" placeholder="Leave a message here" id="message" ></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" >
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded" src="img/appointment.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

            {/* <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                    <h1 class="mb-3">Popular Teachers</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                        eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item position-relative">
                            <img class="img-fluid rounded-circle w-75" src="img/team-1.jpg" alt=""/>
                            <div class="team-text">
                                <h3>Full Name</h3>
                                <p>Designation</p>
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item position-relative">
                            <img class="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt=""/>
                            <div class="team-text">
                                <h3>Full Name</h3>
                                <p>Designation</p>
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item position-relative">
                            <img class="img-fluid rounded-circle w-75" src="img/team-3.jpg" alt=""/>
                            <div class="team-text">
                                <h3>Full Name</h3>
                                <p>Designation</p>
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

            {/* <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                    <h1 class="mb-3">Our Clients Say!</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div class="testimonial-item bg-light rounded p-5">
                        <p class="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div class="d-flex align-items-center bg-white me-n5" >
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" />
                            <div class="ps-3">
                                <h3 class="mb-1">Client Name</h3>
                                <span>Profession</span>
                            </div>
                            <i class="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded p-5">
                        <p class="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div class="d-flex align-items-center bg-white me-n5" >
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" />
                            <div class="ps-3">
                                <h3 class="mb-1">Client Name</h3>
                                <span>Profession</span>
                            </div>
                            <i class="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded p-5">
                        <p class="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div class="d-flex align-items-center bg-white me-n5" >
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" />
                            <div class="ps-3">
                                <h3 class="mb-1">Client Name</h3>
                                <span>Profession</span>
                            </div>
                            <i class="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

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
};
export default Home;

import React from 'react'

const AdminManageStud = () => {
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
                        <a href="/adminhome" class="nav-item nav-link active">Home</a>
                        <a href="/adminabout" class="nav-item nav-link">About Us</a>
                        <a href="/admin/addteachers" class="nav-item nav-link">Add Teachers</a>
                        <a href="/admin/addstudents" class="nav-item nav-link">Add Students</a>
                    </div>
                    <a href="" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Login<i class="fa fa-user-circle ms-3"></i></a>
                </div>
            </nav>
            <div class="container-xxl py-5 page-header position-relative mb-5">
                <div class="container py-5">
                    <h1 class="display-2 text-white animated slideInDown mb-4">Manage Students</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/adminhome">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Manage Students</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <p className='all-text' style={{ fontSize: "3em", textAlign: "center" }}>Students Details</p>
            <table id="example" class="table table-striped table-bordered" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Name</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Contact</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Email</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Standard</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Total Stars</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Edit</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{fontSize: "1.25em"}}>Shree Samal</td>
                        <td style={{fontSize: "1.25em"}}>9876543210</td>
                        <td style={{fontSize: "1.25em"}}>shree.samal1502@gmail.com</td>
                        <td style={{fontSize: "1.25em"}}>2</td>
                        <td style={{fontSize: "1.25em"}}>20</td>
                        <td style={{ textAlign: "center" }}><a className='btn btn-primary' href="/admin/addstudents">Edit</a></td>
                        <td style={{ textAlign: "center" }}><a className='btn btn-danger' href="">Delete</a></td>
                    </tr>
                    <tr>
                        <td style={{fontSize: "1.25em"}}>Aaman Bhowmick</td>
                        <td style={{fontSize: "1.25em"}}>9876543210</td>
                        <td style={{fontSize: "1.25em"}}>aaman.bhowmick21@gmail.com</td>
                        <td style={{fontSize: "1.25em"}}>2</td>
                        <td style={{fontSize: "1.25em"}}>1</td>
                        <td style={{ textAlign: "center" }}><a className='btn btn-primary' href="/admin/addstudents">Edit</a></td>
                        <td style={{ textAlign: "center" }}><a className='btn btn-danger' href="">Delete</a></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Name</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Contact</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Email</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Standard</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Subject</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Edit</th>
                        <th className='all-text' style={{ fontSize: "1.5em" }}>Delete</th>
                    </tr>
                </tfoot>
            </table>

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

export default AdminManageStud
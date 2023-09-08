import NavBar from "../NavBar/NavBar"
import "./About.css"
import React from 'react'

export default function About() {
    return (
        <>
        <section className="vh-100 d-flex justify-content-center align-items-center ">
            <div className="container bg-m text-white">
                <h2 className="text-center text-uppercase mb-3 fs-1 fw-bolder">ABOUT COMPONENT</h2>
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className="line"></div>
                    <i className="text-white mx-2 fa-solid fa-star"></i>
                    <div className="line"></div>
                </div>
                <div className="text">
                    <div className="row px-5">
                        <div className="col-md-6 ps-md-5">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-6 pe-5">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    )
}

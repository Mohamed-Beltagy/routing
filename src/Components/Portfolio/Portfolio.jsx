import "./Portfolio.css"
import React from 'react'
import img1 from "../../img/poert1.png"
import img2 from "../../img/port2.png"
import img3 from "../../img/port3.png"
export default function Portfolio() {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <div className="title">
                        <h2 className='text-center text-uppercase mb-3 fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <div className="line2"></div>
                            <i className="mx-2 fa-solid fa-star"></i>
                            <div className="line2"></div>
                        </div>
                    </div>
                    <div className="row g-4 mb-4">
                        <div className="col-md-6 col-lg-4 ">
                            <div className="img position-relative rounded-3 overflow-hidden ">
                                <img className='w-100 rounded-3' src={img1} alt="" />
                                <div className="layer position-absolute start-0 w-100 top-0 h-100  d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 ">
                            <div className="img position-relative rounded-3 overflow-hidden ">
                                <img className='w-100 rounded-3' src={img2} alt="" />
                                <div className="layer position-absolute start-0 w-100 top-0 h-100  d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="img position-relative rounded-3 overflow-hidden ">
                                <img className='w-100 rounded-3' src={img3} alt="" />
                                <div className="layer position-absolute start-0 w-100 top-0 h-100  d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-4 ">
                            <div className="img position-relative rounded-3 overflow-hidden ">
                                <img className='w-100 rounded-3' src={img1} alt="" />
                                <div className="layer position-absolute start-0 w-100 top-0 h-100  d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="img position-relative rounded-3 overflow-hidden ">
                                <img className='w-100 rounded-3' src={img2} alt="" />
                                <div className="layer position-absolute start-0 w-100 top-0 h-100  d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="img position-relative rounded-3 overflow-hidden ">
                                <img className='w-100 rounded-3' src={img3} alt="" />
                                <div className="layer position-absolute start-0 w-100 top-0 h-100  d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>

        </>
    )
}

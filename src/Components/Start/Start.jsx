import "../About/About.css"
import React from 'react'
import logo from "../../img/avataaars.svg"
export default function Start() {
  return (
    <section className='start vh-100  d-flex justify-content-center align-items-center '>
<div className="container bg-m text-center">
    <div className="img mb-4">
        <img className="w-25" src={logo} alt="" />
    </div>
    <div className="title">
    <h2 className='text-center text-white text-uppercase mb-3 fs-1 fw-bolder'>START FRAMEWORK</h2>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <div className="line"></div>
                        <i className="mx-2 fa-solid fa-star text-white"></i>
                        <div className="line"></div>
                    </div>
    </div>
    <div className="text text-white">
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
</div>
    </section>
  )
}

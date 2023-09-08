import "./Contact.css"
import React from 'react'

export default function Contact() {
    return (
        <section className="contact">
            <div className='container'>
                <div className="title mb-5">
                    <h2 className='text-center text-uppercase mb-3 fs-1 fw-bolder'> CONATCT SECTION</h2>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <div className="line2"></div>
                        <i className="mx-2 fa-solid fa-star"></i>
                        <div className="line2"></div>
                    </div>
                </div>
                <div className="form w-50 mx-auto">
                    
                    <input type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative"></input>
                    
                    <input id="userAge" type="number" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative"></input>
                    
                    <input id="userEmail" type="email" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative"></input>
                    
                    <input id="userPassword" type="password" placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative"></input>
                    <button className="btn mt-4 text-white bg-color"  > send Message </button>
                </div>
            </div>
        </section>
    )

}



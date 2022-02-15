import React from 'react'


const Hero = () => {
    return (
        <div className="container-fluid d-inline-block">
            <div id="hero" className="row">
                <div className="col-lg-12 col-sm-12 top-hero d-flex align-items-center">
                    <div className="absolute top--1 right-0 hidden lg:inline-flex d-none d-lg-block" style={{position: "absolute", top:"0rem", right: "0rem", width: "55%", zIndex: 0}}>
                        <img src="/assets/img/1.png" style={{position: "relative", zIndex: 1}}/>
                    </div>

                    <div className="px-1 px-sm-3 px-lg-5 mx-5 mx-lg-1">
                        <p className="text-cyan fs-1 fw-bolder m-0">Butuh Layanan  <span className="text-green">Kami ?</span></p>
                        <p className="text-cyan fs-6 m-0">Kami Perusahaan start-up cloud healthcare untuk layanan bisnis </p>
                        <p className="mt-3"><a href="#" className="btn btn-cyan">Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Hero
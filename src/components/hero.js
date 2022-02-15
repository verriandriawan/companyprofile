import React from 'react'


const Hero = () => {
    return (
        <div className="container d-inline-block d-flex flex-column justify-content-center">
            <div id="hero" className="row">
                <div className="col-lg-12 col-sm-12 top-hero d-flex align-items-center">
                    <div className="absolute top--1 right-0 hidden lg:inline-flex d-none d-lg-block" style={{position: "absolute",top: 0, right:0, width: "55%",zIndex: 0}}>
                        <img src="/assets/img/1.png" style={{position: "relative", zIndex: 1}}/>
                    </div>

                    <div className="px-1 px-sm-3 px-lg-5 mx-5 mx-lg-1">
                        <p className="text-cyan fs-1 fw-bolder m-0">Butuh temen <span className="text-green">curhat?</span></p>
                        <p className="text-cyan fs-6 m-0">Serahkan pada ahlinya, team kami siap jadi pendengar yang baik</p>
                        <p className="mt-3"><a href="#" className="btn btn-cyan">Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Hero
import React from 'react'
import Services from './services'
const Content = () => {
    return (
        <section id="main" className="container my-xl-5 my-md-3 mb-5">

        <div className="row d-flex justify-content-center">
            <div className="col-lg-4 d-flex justify-content-center mb-5">
                <img src="/assets/img/2.png" style={{maxWidth: 400}} />
            </div>

            <div className="col-lg-6">
                <div className="px-5">
                    <p className="text-cyan fs-6 m-0">PT. Permata Azzuri Sehat is a start-up company partenering health clinics in IT solutions. We help our clients make lasting performance improvements and realize their most important goals through the best infrastructure and business solutions.</p>
                    <p className="text-cyan fs-1 fw-bolder my-3 text-green">Klinikme.com</p>
                    <p className="mt-4"><a href="#" className="btn btn-cyan">Saya butuh layanan kesehatan</a></p>
                </div>
            </div>
        </div>

        <Services />
       
        </section>
    )
}

export default Content

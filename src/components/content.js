import React from 'react'
import Services from './services'
const Content = () => {
    return (
        <section id="main" className="container my-xl-5 my-md-3 mb-5">

            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 d-flex justify-content-center mb-5">
                    <img src="/assets/img/2.png" style={{maxWidth: 400}}/>
                </div>

                <div className="col-lg-6">
                    <div className="px-5"> 
                        
                        <p className="text-cyan fs-6 m-0">Sudah terlalu berat menahan beban pikiran karena masalah yang tak kunjung selesai. Masalah baru bermunculan tidak pandang bulu. Tak ada teman untuk berbagi cerita karena kesibukan. Yuk sini aja, ceritain ke kita-kita. Privasi dijamin aman.</p>
                        <p className="text-cyan fs-1 fw-bolder my-3 text-green">Ceritain aja</p>
                        <p className="mt-4"><a href="<%- getRoute('login') %>" className="btn btn-cyan">Saya butuh pendengar</a></p>

                    </div>
                </div>
            </div>

            <Services />

        </section>
        
    )
}

export default Content

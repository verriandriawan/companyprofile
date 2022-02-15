import React from 'react'

const Services = () => {
    return (
        <div className="row mt-5 py-5">
            
        <div className="col-lg-12" style={{position: "relative"}}>
            <h3 className="fs-3 fw-bolder" style={{position: "relative", zIndex: 2}}>Layanan Khusus</h3>
            <div className="row py-3" style={{position:"relative", zIndex: 1}}>
                
                { [...Array(1).keys()].map(item => {
                    return (
                        <div key={item} className="layanan-item col-lg-2 pb-3">
                            <div className="card shadow-sm">
                                <div className="card-body p-0 rounded-lg text-center">
                                    <img src="/assets/img/person.png" className="p-4" />
                                    <a className="decoration-none text-cyan fw-bolder text-xs d-block text-center pb-3">Klinik Pratama</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

                { [...Array(1).keys()].map(item => {
                    return (
                        <div key={item} className="layanan-item col-lg-2 pb-3">
                            <div className="card shadow-sm">
                                <div className="card-body p-0 rounded-lg text-center">
                                    <img src="/assets/img/person.png" className="p-4" />
                                    <a className="decoration-none text-cyan fw-bolder text-xs d-block text-center pb-3">Klinik Utama</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

                { [...Array(1).keys()].map(item => {
                    return (
                        <div key={item} className="layanan-item col-lg-2 pb-3">
                            <div className="card shadow-sm">
                                <div className="card-body p-0 rounded-lg text-center">
                                    <img src="/assets/img/person.png" className="p-4" />
                                    <a className="decoration-none text-cyan fw-bolder text-xs d-block text-center pb-3">Klinik Gigi</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

                { [...Array(1).keys()].map(item => {
                    return (
                        <div key={item} className="layanan-item col-lg-2 pb-3">
                            <div className="card shadow-sm">
                                <div className="card-body p-0 rounded-lg text-center">
                                    <img src="/assets/img/person.png" className="p-4" />
                                    <a className="decoration-none text-cyan fw-bolder text-xs d-block text-center pb-3">Klinik Radiologi</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
    )
}

export default Services

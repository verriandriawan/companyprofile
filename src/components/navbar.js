import React from 'react'

import Logo from './logo'

const Navbar = () => {

    return (
        <div className="container-fluid">
            <nav className="row top-nav">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-between align-items-center px-4">
                        <div className="p-4">
                            <div className="logo">
                                <Logo />
                            </div>
                        </div>
                        <div>
                            <a href="/consul/login.html" className="btn">Sign In</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
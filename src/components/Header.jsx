import React from 'react'

const Header = () => {
    return (
        <header className="header container">
            <div className="header-logo">
                <img src="/logo.jpg" alt="Michael Marshall, PMHNP Logo" className="logo" />
                <div className="header-text">
                    <h1>Michael Marshall, <span className="text-muted">PMHNP</span></h1>
                    <p className="license-text">License #95028122</p>
                </div>
            </div>
            <nav className="header-nav">
                <a href="#about">About</a>
                <a href="#approach">Approach</a>
                <a href="#faq">FAQ</a>
                <a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_106361" className="btn btn-primary">Book Appointment</a>
            </nav>
        </header>
    )
}

export default Header

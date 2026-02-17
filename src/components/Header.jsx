import React from 'react'

const Header = () => {
    return (
        <header className="header container">
            <div className="header-logo">
                <img src="/logo.jpg" alt="Michael Marshall, PMHNP Logo" className="logo" />
                <h1>Michael Marshall, <span className="text-muted">PMHNP</span></h1>
            </div>
            <nav className="header-nav">
                <a href="#about">About</a>
                <a href="#approach">Approach</a>
                <a href="#faq">FAQ</a>
                <a href="https://www.tebra.com/care/provider/michael-marshall-aprn-pmhnp-1245563543" className="btn btn-primary">Book Appointment</a>
            </nav>
        </header>
    )
}

export default Header

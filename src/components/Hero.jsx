import React from 'react'

const Hero = () => {
    return (
        <section className="hero section">
            <div className="container hero-content text-center fade-in">
                <h2 className="hero-headline">Compassionate, Personalized <br /> Psychiatric Care</h2>
                <p className="hero-subheadline">
                    Feeling heard. Non-judgmental. Professional.<br />
                    Providing anxiety, depression, and ADHD treatment from the comfort of your home.
                </p>
                <div className="hero-ctas">
                    <a href="https://www.tebra.com/care/provider/michael-marshall-aprn-pmhnp-1245563543" className="btn btn-primary">Book a Telehealth Appointment</a>
                    <a href="#approach" className="btn btn-secondary">Learn About My Approach</a>
                </div>
            </div>
        </section>
    )
}

export default Hero

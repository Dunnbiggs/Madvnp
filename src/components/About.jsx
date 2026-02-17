import React from 'react'

const About = () => {
    return (
        <section id="about" className="section container">
            <div className="about-grid">
                <div className="about-image">
                    <img
                        src="/michael-marshall.jpg"
                        alt="Michael Marshall, PMHNP"
                        className="profile-photo"
                    />
                </div>
                <div className="about-content">
                    <h2 className="section-title">Meet Michael Marshall</h2>
                    <p className="lead-text">
                        "Your first visit is simply a place to talk and be heard."
                    </p>
                    <p>
                        I am a board-certified Psychiatric Mental Health Nurse Practitioner dedicated to providing
                        warm, evidenced-based care to patients across California. My approach is rooted in the
                        belief that mental health care should feel safe, not clinical.
                    </p>
                    <p>
                        I specialize in treating anxiety, depression, ADHD, and mood disorders through a
                        collaborative lens. I don't just prescribe; I listen. We work together to find the
                        treatment plan—whether that includes medication, lifestyle changes, or both—that fits
                        your life and your goals.
                    </p>
                    <a href="#approach" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Learn More About My Approach</a>
                </div>
            </div>
        </section>
    )
}

export default About

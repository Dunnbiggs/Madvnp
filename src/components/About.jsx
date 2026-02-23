import React from 'react'

const About = () => {
    return (
        <section id="about" className="section container">
            <div className="about-grid">
                <div className="about-image">
                    <img
                        src="/michael-marshall.png"
                        alt="Michael Marshall, PMHNP"
                        className="profile-photo"
                    />
                </div>
                <div className="about-content">
                    <h2 className="section-title">Meet Michael Marshall</h2>
                    <p className="lead-text">
                        "Your first visit is simply a place to speak and be heard."
                    </p>
                    <p>
                        As a Board-Certified Psychiatric Mental Health Nurse Practitioner, I am dedicated to providing evidence-based, compassionate care to patients throughout California. My practice is built on the philosophy that while mental health care is a clinical necessity, the experience itself should feel safe, personal, and profoundly human.
                    </p>
                    <p>
                        I specialize in the treatment of anxiety, depression, ADHD, and mood disorders through a highly collaborative lens. Beyond medication management, I prioritize active listening to ensure every patient feels heard. Together, we develop a comprehensive treatment plan—integrating pharmacotherapy with lifestyle transitions—tailored specifically to your life and long-term goals.
                    </p>
                    <a href="#approach" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Learn More About My Approach</a>
                </div>
            </div>
        </section>
    )
}

export default About

import React from 'react'
import useInView from '../hooks/useInView'

const About = () => {
    const [ref, inView] = useInView()

    return (
        <section id="about" className={`section container${inView ? ' in' : ''}`} ref={ref}>
            <div className="about-grid">
                {/* Portrait in from the left, story in from the right — the two
                    halves meet in the middle, which is what an introduction is. */}
                <div className="about-portrait">
                    <svg className="portrait-ring" viewBox="0 0 340 340" aria-hidden="true" focusable="false">
                        <circle className="ring-track" cx="170" cy="170" r="164" />
                        <circle className="ring-draw" cx="170" cy="170" r="164" />
                    </svg>
                    <div className="about-image">
                        <img
                            src="/michael-marshall.png"
                            alt="Michael Marshall, PMHNP"
                            className="profile-photo"
                            width="1024"
                            height="1024"
                        />
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="section-title" data-reveal="right">Meet Michael Marshall</h2>
                    <p className="lead-text" data-reveal="right" style={{ transitionDelay: '0.08s' }}>
                        "Your first visit is simply a place to speak and be heard."
                    </p>
                    <p data-reveal="right" style={{ transitionDelay: '0.16s' }}>
                        As a Board-Certified Psychiatric Mental Health Nurse Practitioner, I am dedicated to
                        providing evidence-based, compassionate care to patients throughout California. My practice
                        is built on the philosophy that while mental health care is a clinical necessity, the
                        experience itself should feel safe, personal, and profoundly human.
                    </p>
                    <p data-reveal="right" style={{ transitionDelay: '0.24s' }}>
                        I specialize in the treatment of anxiety, depression, ADHD, and mood disorders through a
                        highly collaborative lens. Beyond medication management, I prioritize active listening to
                        ensure every patient feels heard. Together, we develop a comprehensive treatment
                        plan—integrating pharmacotherapy with lifestyle transitions—tailored specifically to your
                        life and long-term goals.
                    </p>
                    <a
                        href="#approach"
                        className="btn btn-secondary"
                        data-reveal="right"
                        style={{ marginTop: '1rem', transitionDelay: '0.32s' }}
                    >
                        Learn More About My Approach
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About

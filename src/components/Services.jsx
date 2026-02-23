import React from 'react'

const Services = () => {
    return (
        <section id="approach" className="section bg-soft">
            <div className="container text-center">
                <h2 className="section-title">A Partnership in Wellness</h2>
                <p className="section-subtitle">Healing begins with being heard. Our approach moves beyond traditional prescribing to focus on the whole person. By combining diagnostic expertise with active listening, we partner with you to address the complexities of your disorder. Whether through medication management, lifestyle optimization, or a combination of both, we work collaboratively to build a sustainable path toward your goals. We provide the professional tools you need to thrive, delivered with the compassion you deserve.</p>

                <div className="process-grid">
                    <div className="process-card">
                        <div className="step-number">1</div>
                        <h3>Book Online</h3>
                        <p>Choose a time that works for you through our easy online scheduling system.</p>
                    </div>
                    <div className="process-card">
                        <div className="step-number">2</div>
                        <h3>Telehealth Visit</h3>
                        <p>Connect via a secure, HIPAA-compliant video link from the comfort of your home.</p>
                    </div>
                    <div className="process-card">
                        <div className="step-number">3</div>
                        <h3>Collaborative Plan</h3>
                        <p>We'll discuss your history and goals to create a personalized treatment plan.</p>
                    </div>
                    <div className="process-card">
                        <div className="step-number">4</div>
                        <h3>Ongoing Support</h3>
                        <p>Follow-up visits and medication management to ensure you continue to thrive.</p>
                    </div>
                </div>

                <div className="telehealth-note text-center">
                    <p>
                        <strong>Note:</strong> I am licensed to see patients located anywhere in California.
                        All appointments are conducted via secure video telehealth.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services

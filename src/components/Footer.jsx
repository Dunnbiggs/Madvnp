import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <div className="footer-brand">
                        <img src="/logo.jpg" alt="Logo" className="footer-logo" width="1024" height="1024" />
                        <h3>Michael Marshall, PMHNP-BC</h3>
                    </div>
                    <p>Compassionate telepsychiatry for California.</p>
                    <p className="license-text-footer">License #95028122</p>
                </div>
                <div className="footer-hours">
                    <h4>Office Hours</h4>
                    <p>Mon - Thu: 9:00 AM – 4:00 PM</p>
                    <p>Fri - Sun: Closed</p>
                </div>
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Phone: (909) 755-6610</p>
                </div>
            </div>
            <div className="footer-bottom container text-center">
                <p className="emergency-note">
                    <strong>If you are experiencing a medical emergency or crisis, please dial 911 or call/text 988 immediately.</strong>
                </p>
                <p>&copy; {new Date().getFullYear()} Marshall Advanced Nursing Practice PC. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

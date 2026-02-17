import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <h3>Michael Marshall, PMHNP</h3>
                    <p>Compassionate telepsychiatry for California.</p>
                </div>
                <div className="footer-hours">
                    <h4>Office Hours</h4>
                    <p>Mon - Thu: 9:00 AM – 4:00 PM</p>
                    <p>Fri - Sun: Closed</p>
                </div>
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Phone: (909) 755-6610</p>
                    <a href="https://portal.kareo.com/" className="footer-link">Patient Portal Login</a>
                </div>
            </div>
            <div className="footer-bottom container text-center">
                <p className="emergency-note">
                    <strong>If you are experiencing a medical emergency or crisis, please dial 911 or call/text 988 immediately.</strong>
                </p>
                <p>&copy; {new Date().getFullYear()} Michael Marshall, PMHNP. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

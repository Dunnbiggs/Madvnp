import React from 'react'

/**
 * Social profiles. Icons are inline SVG rather than an icon font or library —
 * four glyphs are not worth a dependency, and inline means no extra request.
 */
const SOCIALS = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61593950844369',
        path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z'
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/hhmentalhealth/',
        // Drawn from primitives so the glyph cannot be mangled by a bad path
        shapes: (
            <>
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" />
            </>
        )
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@heard.and.healed',
        path: 'M16.5 2h-3.05v13.6a2.62 2.62 0 1 1-2.62-2.62c.24 0 .47.03.69.1v-3.1a5.76 5.76 0 0 0-.69-.04 5.72 5.72 0 1 0 5.72 5.72V8.9a6.9 6.9 0 0 0 4.02 1.29V7.09A3.94 3.94 0 0 1 16.5 3.2V2Z'
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@HeardandHealedMentalHealth',
        path: 'M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z'
    }
]

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
                    <p>Fax: (909) 385-3335</p>
                </div>
                <div className="footer-social">
                    <h4>Follow</h4>
                    <ul className="social-links">
                        {SOCIALS.map((social) => (
                            <li key={social.name}>
                                <a
                                    href={social.href}
                                    className="social-link"
                                    aria-label={`${social.name} — Heard and Healed Mental Health`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        {social.shapes || <path d={social.path} fill="currentColor" />}
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom container text-center">
                <p className="emergency-note">
                    <strong>
                        If you are experiencing a medical emergency or crisis, please dial{' '}
                        <a href="tel:911" className="crisis-link" aria-label="Call 911">911</a> or{' '}
                        <a href="tel:988" className="crisis-link" aria-label="Call the 988 Suicide and Crisis Lifeline">call</a>/
                        <a href="sms:988" className="crisis-link" aria-label="Text the 988 Suicide and Crisis Lifeline">text</a>{' '}
                        <a href="tel:988" className="crisis-link" aria-label="Call 988">988</a> immediately.
                    </strong>
                </p>
                <p>&copy; {new Date().getFullYear()} Marshall Advanced Nursing Practice PC. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react'
import { FAQS } from '../data/faqs'

/**
 * Frequently asked questions.
 *
 * The questions and answers live in src/data/faqs.js. The FAQPage structured
 * data in the built index.html is generated from that same array at build time
 * (see vite.config.js), so the markup and the visible page can never disagree.
 */
const FAQ = () => {
    return (
        <section id="faq" className="section container faq" aria-labelledby="faq-title">
            <h2 id="faq-title" className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
                If your question is not here, call (909) 755-6610 and ask.
            </p>

            <div className="faq-list">
                {FAQS.map((item) => (
                    /* name="faq" makes this an exclusive accordion natively where the
                       browser supports it; older browsers simply allow several open. */
                    <details className="faq-item" key={item.q} name="faq">
                        <summary className="faq-question">
                            <span>{item.q}</span>
                            <svg className="faq-chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </summary>
                        <div className="faq-answer">
                            {item.a.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    )
}

export default FAQ

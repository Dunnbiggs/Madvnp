import React from 'react'
import { FAQS } from '../data/faqs'
import useInView from '../hooks/useInView'

/**
 * Frequently asked questions.
 *
 * The questions and answers live in src/data/faqs.js. The FAQPage structured
 * data in the built index.html is generated from that same array at build time
 * (see vite.config.js), so the markup and the visible page can never disagree.
 */
const FAQ = () => {
    const [ref, inView] = useInView()

    return (
        <section
            id="faq"
            className={`section container faq${inView ? ' in' : ''}`}
            aria-labelledby="faq-title"
            ref={ref}
        >
            <h2 id="faq-title" className="section-title" data-reveal>Frequently Asked Questions</h2>
            <p className="section-subtitle" data-reveal style={{ transitionDelay: '0.08s' }}>
                If your question is not here, call (909) 755-6610 and ask.
            </p>

            <div className="faq-list">
                {FAQS.map((item, index) => (
                    /* name="faq" makes this an exclusive accordion natively where the
                       browser supports it; older browsers simply allow several open. */
                    <details
                        className="faq-item"
                        key={item.q}
                        name="faq"
                        data-reveal={index % 2 === 0 ? 'left' : 'right'}
                        style={{ transitionDelay: `${index * 0.06}s` }}
                    >
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

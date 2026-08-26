import React, { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'

const STEPS = [
    { n: '1', title: 'Book Online', body: 'Choose a time that works for you through our easy online scheduling system.' },
    { n: '2', title: 'Telehealth Visit', body: 'Connect via a secure, HIPAA-compliant video link from the comfort of your home.' },
    { n: '3', title: 'Collaborative Plan', body: "We'll discuss your history and goals to create a personalized treatment plan." },
    { n: '4', title: 'Ongoing Support', body: 'Follow-up visits and medication management to ensure you continue to thrive.' }
]

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

const Services = () => {
    const [ref, inView] = useInView()
    /* With reduced motion on, every step starts lit — no sequence to watch. */
    const [lit, setLit] = useState(() => (prefersReducedMotion() ? STEPS.length : 0))

    /* The rail draws left to right and each number lights as the line reaches
       it. This is the one animation on the page carrying information rather
       than decoration: it shows a stranger that working here is four known
       steps, in order. */
    useEffect(() => {
        if (!inView || prefersReducedMotion()) return undefined
        const timers = STEPS.map((step, index) =>
            setTimeout(() => setLit((current) => Math.max(current, index + 1)), 500 + index * 380)
        )
        return () => timers.forEach(clearTimeout)
    }, [inView])

    return (
        <section id="approach" className={`section bg-soft${inView ? ' in' : ''}`} ref={ref}>
            <div className="container text-center">
                <h2 className="section-title" data-reveal>A Partnership in Wellness</h2>
                <p className="section-subtitle" data-reveal style={{ transitionDelay: '0.08s' }}>
                    Healing begins with being heard. Our approach moves beyond traditional prescribing to focus on
                    the whole person. By combining diagnostic expertise with active listening, we partner with you
                    to address the complexities of your disorder. Whether through medication management, lifestyle
                    optimization, or a combination of both, we work collaboratively to build a sustainable path
                    toward your goals. We provide the professional tools you need to thrive, delivered with the
                    compassion you deserve.
                </p>
                <div className="process-grid">
                    <div className="process-rail" aria-hidden="true"><span /></div>
                    {STEPS.map((step, index) => (
                        <div
                            key={step.n}
                            className={`process-card${index < lit ? ' lit' : ''}`}
                            data-reveal="left"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="step-number">{step.n}</div>
                            <h3>{step.title}</h3>
                            <p>{step.body}</p>
                        </div>
                    ))}
                </div>
                <div className="telehealth-note text-center" data-reveal style={{ transitionDelay: '0.6s' }}>
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

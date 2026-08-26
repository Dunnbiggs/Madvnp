import React, { useEffect, useRef } from 'react'
import useInView from '../hooks/useInView'

const HEADLINE = 'Compassionate Mental Health Support Tailored to You'

const Hero = () => {
    const [ref, inView] = useInView()
    const driftRef = useRef(null)

    /* The headline drifts up slightly slower than the page, which gives the
       hero a little depth. rAF-throttled, passive, and skipped entirely when
       the visitor has asked for reduced motion. */
    useEffect(() => {
        const el = driftRef.current
        if (!el) return undefined
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined
        }

        let ticking = false
        const onScroll = () => {
            if (ticking) return
            ticking = true
            window.requestAnimationFrame(() => {
                const box = el.getBoundingClientRect()
                const offset = (window.innerHeight / 2 - (box.top + box.height / 2)) * 0.05
                el.style.transform = `translateY(${offset.toFixed(1)}px)`
                ticking = false
            })
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section className={`hero section${inView ? ' in' : ''}`} ref={ref}>
            <div className="container hero-content text-center">
                <h2 className="hero-headline hero-drift" ref={driftRef}>
                    {HEADLINE.split(' ').map((word, index) => (
                        <React.Fragment key={`${word}-${index}`}>
                            <span className="hero-word" style={{ animationDelay: `${index * 0.07}s` }}>
                                {word}
                            </span>{' '}
                        </React.Fragment>
                    ))}
                </h2>
                <p className="hero-subheadline" data-reveal style={{ transitionDelay: '0.16s' }}>
                    Your journey to wellness begins with feeling truly heard. Our practice provides a safe,
                    non-judgmental space for professional healing. We offer comprehensive care for Depression,
                    Bipolar Disorder, Schizophrenia, ADHD, Anxiety, Insomnia, PTSD and more bringing expert
                    treatment to the comfort and privacy of your own home.
                </p>
                <div className="hero-ctas">
                    {/* The two buttons separate outward, so they read as a choice
                        rather than a stack. The reveal sits on a wrapper, not on the
                        button itself: btn-flash already animates the button's opacity,
                        and a CSS animation beats a transition on the same property. */}
                    <span className="hero-cta-reveal" data-reveal="left" style={{ transitionDelay: '0.24s' }}>
                        <a
                            href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_106361"
                            className="btn btn-primary btn-flash"
                        >
                            Book a Telehealth Appointment
                        </a>
                    </span>
                    <span className="hero-cta-reveal" data-reveal="right" style={{ transitionDelay: '0.24s' }}>
                        <a href="#approach" className="btn btn-secondary">
                            Learn About My Approach
                        </a>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero

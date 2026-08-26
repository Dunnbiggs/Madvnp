import React, { useEffect, useRef, useState } from 'react'
import useInView from '../hooks/useInView'

/**
 * Conditions treated. Edit this array to add, remove, or rename an item —
 * the visible row and the screen-reader list are both generated from it.
 */
const CONDITIONS = [
    { name: 'Depression', tag: 'Mood' },
    { name: 'Anxiety', tag: 'Anxiety' },
    { name: 'Bipolar Disorder', tag: 'Mood' },
    { name: 'ADHD', tag: 'Attention' },
    { name: 'Schizophrenia', tag: 'Psychotic' },
    { name: 'PTSD', tag: 'Trauma' },
    { name: 'OCD', tag: 'Anxiety' },
    { name: 'Panic Disorder', tag: 'Anxiety' },
    { name: 'Insomnia', tag: 'Sleep' },
    { name: 'Medication Management', tag: 'Ongoing care' }
]

/**
 * Insurance plans this practice is credentialed with. Leading with the
 * largest carriers, since those names are what people scan for.
 * Keep this list current — an expired plan listed here is a bad first visit.
 */
const INSURERS = [
    'Aetna',
    'Anthem Blue Cross California',
    'Blue Shield of California',
    'Cigna',
    'United Healthcare (Optum)',
    'Oxford (Optum)',
    'Medi-Cal',
    'Medicare',
    'Magellan',
    'Carelon Behavioral Health',
    'Providence Health Plan',
    'Blue Cross Blue Shield of Massachusetts'
]

/* Cards fade in staggered when the band arrives. Only the first copy of each
   row is staggered — the duplicates are off screen when it plays. */
const stagger = (index) => ({ transitionDelay: `${Math.min(index, 12) * 0.05}s` })

const ConditionCard = ({ item, index }) => (
    <span className="condition-card" style={stagger(index)}>
        <span className="condition-name">{item.name}</span>
        <small className="condition-tag">{item.tag}</small>
    </span>
)

const InsurerCard = ({ name, index }) => (
    <span className="condition-card insurer-card" style={stagger(index)}>
        <span className="condition-name">{name}</span>
    </span>
)

/**
 * One scrolling row. The travel distance is measured from the rendered content
 * and the duration derived from it, so every row moves at the same
 * pixels-per-second no matter the screen size or how many items are listed.
 */
const Row = ({ items, speed, reverse, renderItem }) => {
    const frameRef = useRef(null)
    const trackRef = useRef(null)
    const groupRef = useRef(null)
    const [copies, setCopies] = useState(2)

    useEffect(() => {
        const frame = frameRef.current
        const track = trackRef.current
        const group = groupRef.current
        if (!frame || !track || !group) return undefined

        const measure = () => {
            const distance = group.getBoundingClientRect().width
            if (!distance) return
            track.style.setProperty('--distance', `${distance}px`)
            track.style.setProperty('--duration', `${distance / speed}s`)
            // Cover the visible frame plus one copy of travel so the tail
            // never empties on a wide display before the loop restarts.
            const frameWidth = frame.getBoundingClientRect().width
            const next = Math.max(2, Math.ceil(frameWidth / distance) + 1)
            setCopies((n) => (n === next ? n : next))
        }

        measure()

        let observer
        if (typeof ResizeObserver !== 'undefined') {
            observer = new ResizeObserver(measure)
            observer.observe(group)
            observer.observe(frame)
        } else {
            window.addEventListener('resize', measure)
        }

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(measure).catch(() => { })
        }

        return () => {
            if (observer) observer.disconnect()
            else window.removeEventListener('resize', measure)
        }
    }, [speed])

    const group = items.map(renderItem)

    return (
        <div className="condition-marquee" ref={frameRef} data-reverse={reverse ? 'true' : undefined}>
            <div className="condition-track" ref={trackRef}>
                <div className="condition-group" ref={groupRef}>{group}</div>
                {Array.from({ length: copies - 1 }, (_, i) => (
                    <div className="condition-group" aria-hidden="true" key={i}>{group}</div>
                ))}
            </div>
        </div>
    )
}

const Conditions = () => {
    const [ref, inView] = useInView()

    return (
        <section
            id="conditions"
            className={`section conditions${inView ? ' in' : ''}`}
            aria-labelledby="conditions-title"
            ref={ref}
        >
            <div className="container">
                <h2 id="conditions-title" className="section-title" data-reveal>Conditions I Treat</h2>
                <p className="section-subtitle" data-reveal style={{ transitionDelay: '0.08s' }}>
                    Evaluation, diagnosis, and ongoing medication management for children,
                    adults, and older adults anywhere in California — by secure video.
                </p>
            </div>

            {/* Animated row, hidden from assistive tech; the plain list below carries
                the meaning so nothing is announced twice. */}
            <div aria-hidden="true">
                <Row
                    items={CONDITIONS}
                    speed={38}
                    renderItem={(item, index) => <ConditionCard key={item.name} item={item} index={index} />}
                />
            </div>
            <ul className="visually-hidden">
                {CONDITIONS.map((item) => <li key={item.name}>{item.name}</li>)}
            </ul>

            <div id="insurance" className="container conditions-divider">
                <h3 className="conditions-subhead" data-reveal>Insurance I Accept</h3>
                <p className="conditions-subnote" data-reveal style={{ transitionDelay: '0.08s' }}>
                    I&apos;ll verify your coverage when you schedule, so you know your cost
                    before the first visit.
                </p>
            </div>

            <div aria-hidden="true">
                <Row
                    items={INSURERS}
                    speed={42}
                    reverse
                    renderItem={(name, index) => <InsurerCard key={name} name={name} index={index} />}
                />
            </div>
            <ul className="visually-hidden">
                {INSURERS.map((name) => <li key={name}>{name}</li>)}
            </ul>

            <div className="container text-center">
                <p className="conditions-note" data-reveal style={{ transitionDelay: '0.3s' }}>
                    Don&apos;t see your plan, or not sure whether your situation fits?{' '}
                    <a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_106361">
                        Book an evaluation
                    </a>{' '}
                    or call (909)&nbsp;755-6610.
                </p>
            </div>
        </section>
    )
}

export default Conditions

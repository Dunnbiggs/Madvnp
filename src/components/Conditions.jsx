import React, { useEffect, useRef } from 'react'

/**
 * Conditions treated. Edit this one array to add, remove, or rename an item —
 * both rows and the screen-reader list are generated from it.
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

/* Row two starts halfway through the list so the two rows never mirror each other. */
const ROW_ONE = CONDITIONS
const ROW_TWO = CONDITIONS.slice(5).concat(CONDITIONS.slice(0, 5))

const Card = ({ item }) => (
    <span className="condition-card">
        <span className="condition-name">{item.name}</span>
        <small className="condition-tag">{item.tag}</small>
    </span>
)

const Group = ({ items, hidden }) => (
    <div className="condition-group" aria-hidden={hidden ? 'true' : undefined}>
        {items.map((item) => (
            <Card key={item.name} item={item} />
        ))}
    </div>
)

/**
 * One scrolling row. The animation distance is measured from the rendered content
 * and the duration is derived from it, so every row travels at the same
 * pixels-per-second regardless of screen size or how many conditions are listed.
 */
const Row = ({ items, speed, reverse }) => {
    const trackRef = useRef(null)
    const groupRef = useRef(null)

    useEffect(() => {
        const track = trackRef.current
        const group = groupRef.current
        if (!track || !group) return undefined

        const measure = () => {
            const distance = group.getBoundingClientRect().width
            if (!distance) return
            track.style.setProperty('--distance', `${distance}px`)
            track.style.setProperty('--duration', `${distance / speed}s`)
        }

        measure()

        let observer
        if (typeof ResizeObserver !== 'undefined') {
            observer = new ResizeObserver(measure)
            observer.observe(group)
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

    return (
        <div className="condition-marquee" data-reverse={reverse ? 'true' : undefined}>
            <div className="condition-track" ref={trackRef}>
                <div className="condition-group" ref={groupRef}>
                    {items.map((item) => (
                        <Card key={item.name} item={item} />
                    ))}
                </div>
                <Group items={items} hidden />
            </div>
        </div>
    )
}

const Conditions = () => {
    return (
        <section id="conditions" className="section conditions" aria-labelledby="conditions-title">
            <div className="container">
                <h2 id="conditions-title" className="section-title">Conditions I Treat</h2>
                <p className="section-subtitle">
                    Evaluation, diagnosis, and ongoing medication management for adults
                    anywhere in California — by secure video, with most major insurance accepted.
                </p>
            </div>

            {/* Visible, animated rows. Hidden from assistive tech so the list is
                announced once, from the plain list below, instead of four times. */}
            <div className="condition-rows" aria-hidden="true">
                <Row items={ROW_ONE} speed={38} />
                <Row items={ROW_TWO} speed={32} reverse />
            </div>

            {/* The same list, read by screen readers and indexed by search engines. */}
            <ul className="visually-hidden">
                {CONDITIONS.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>

            <div className="container text-center">
                <p className="conditions-note">
                    Not sure whether your situation fits?{' '}
                    <a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_106361">
                        Book an evaluation
                    </a>{' '}
                    and we&apos;ll figure it out together.
                </p>
            </div>
        </section>
    )
}

export default Conditions

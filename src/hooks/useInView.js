import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll primitive.
 *
 * Returns [ref, inView]. Attach the ref to a section and put the `in` class on
 * it when inView is true; the CSS in index.css does the rest.
 *
 * It fires once and then stops observing — these animations play on the way
 * down and never replay on the way back up, which is what keeps them from
 * feeling like a toy. Browsers without IntersectionObserver skip straight to
 * the finished state rather than hiding the content.
 */
export default function useInView() {
    const ref = useRef(null)
    /* No IntersectionObserver (very old browser) means no animation at all —
       start in the finished state rather than hiding the content. */
    const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

    useEffect(() => {
        const el = ref.current
        if (!el || typeof IntersectionObserver === 'undefined') return undefined

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    setInView(true)
                    observer.unobserve(entry.target)
                })
            },
            { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return [ref, inView]
}

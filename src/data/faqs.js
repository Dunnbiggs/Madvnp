/**
 * Frequently asked questions — the single source of truth.
 *
 * Both the visible FAQ section (src/components/FAQ.jsx) and the FAQPage
 * structured data injected into index.html at build time (see vite.config.js)
 * read from this array, so the two cannot drift apart. Google requires the
 * answer in the markup to be the same answer a visitor sees on the page.
 *
 * Every figure below was supplied by the practice. Do not edit rates, fees, or
 * policy without checking first.
 */
export const FAQS = [
    {
        q: 'What is a PMHNP, and can you prescribe medication?',
        a: [
            'A Psychiatric Mental Health Nurse Practitioner is an advanced practice registered nurse with graduate training and board certification in psychiatry. I evaluate, diagnose, and treat mental health conditions, and yes — I prescribe and manage psychiatric medication, sent electronically to the pharmacy you choose.',
            'I am board certified and licensed in California, license #95028122.'
        ]
    },
    {
        q: 'Do you take my insurance? What if I don’t have coverage?',
        a: [
            'I am in network with Aetna, Anthem Blue Cross California, Blue Shield of California, Cigna, United Healthcare (Optum), Oxford (Optum), Medi-Cal, Medicare, Magellan, Carelon Behavioral Health, Providence Health Plan, and Blue Cross Blue Shield of Massachusetts.',
            'I will verify your coverage when you schedule, so you know what your visit will cost before we meet.',
            'If you would rather not use insurance, self-pay is $250 for the initial 60-minute evaluation and $125 for a 30-minute follow-up.'
        ]
    },
    {
        q: 'What happens in the first appointment?',
        a: [
            'The first visit is a full psychiatric evaluation and runs about 60 minutes. We will talk through what brought you in, your history, your medical background, and anything you have tried before. I will ask questions, but mostly I will listen.',
            'By the end we will have a working diagnosis and a plan — which may include medication, lifestyle changes, referrals, or simply a follow-up to keep talking. Nothing is decided without you.'
        ]
    },
    {
        q: 'What conditions do you treat, and what ages do you see?',
        a: [
            'I treat depression, anxiety, bipolar disorder, ADHD, schizophrenia, PTSD, OCD, panic disorder, and insomnia, and I provide ongoing medication management for patients already stable on a regimen.',
            'I see children and adolescents ages 6 to 18, adults, and older adults. If your situation would be better served in a higher level of care, I will tell you directly and help you find the right referral.'
        ]
    },
    {
        q: 'Can you prescribe ADHD medication or other controlled substances by telehealth?',
        a: [
            'Yes, when it is clinically appropriate and after a thorough evaluation. I do not prescribe controlled medication reflexively at a first visit — an accurate diagnosis comes first, and that sometimes means records, rating scales, or labs.',
            'If you are prescribed a controlled medication, plan on a visit every 30 days. That is how the prescription is renewed and how we keep an eye on how it is working.'
        ]
    },
    {
        q: 'Do you provide therapy, or only medication management?',
        a: [
            'My practice centers on psychiatric evaluation and medication management, delivered with real conversation rather than a rushed check-in — supportive therapy is part of every visit.',
            'I also have working relationships with therapists and can refer you to one and coordinate your care. Medication and therapy work better together than either does alone.'
        ]
    },
    {
        q: 'How does a telehealth visit work? Do I need to be in California?',
        a: [
            'You will get a secure, HIPAA-compliant video link before your appointment. No special software and no waiting room — a phone, tablet, or computer with a camera and a steady connection is enough. Find a private spot where you can speak freely.',
            'You do need to be physically located in California at the time of the visit, since that is where I am licensed. If you are traveling out of state on your appointment day, we will reschedule.'
        ]
    },
    {
        q: 'How often will I be seen, and how do refills work?',
        a: [
            'It depends on where you are in treatment. Starting or changing a medication usually means following up in two to four weeks so we can see how it is landing. Once you are stable, visits typically stretch further apart. Controlled medications require a visit every 30 days.',
            'Refills are handled at your appointments. If you run short between visits, message me through the patient portal and I will respond within one business day — staying on schedule with follow-ups is the surest way to avoid a gap.'
        ]
    },
    {
        q: 'How soon can I be seen, and what are your cancellation and paperwork policies?',
        a: [
            'New patients are typically seen within one to two weeks. Office hours are Monday through Thursday, 9:00 AM to 4:00 PM. You can book online any time, or call (909) 755-6610.',
            'Please give at least 24 hours’ notice to cancel or reschedule. Missed appointments are charged a $15 no-show fee, which insurance does not cover.',
            'Completion of FMLA paperwork, disability forms, and similar letters is $50 per form, with about five business days’ turnaround. Emotional support animal documentation requires an established relationship of at least 30 days and a clinical evaluation so it is not something I can provide at a first visit.'
        ]
    },
    {
        q: 'What if I am in crisis, or something urgent comes up between visits?',
        a: [
            'If you are in immediate danger or having a medical emergency, call 911, or call or text 988 to reach the Suicide & Crisis Lifeline. This is an outpatient practice and I am not able to provide emergency or after-hours crisis coverage.',
            'For non-urgent questions during office hours — a side effect, a scheduling problem, a question about your plan — message me through the patient portal or call (909) 755-6610, and I will get back to you within one business day.'
        ]
    }
]

export default FAQS

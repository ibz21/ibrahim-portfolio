"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const CREDENTIALS = [
    {
        title: "BEng Mechanical Engineering (2:1)",
        sub: "University of Huddersfield",
        date: "2011 to 2014",
    },
    {
        title: "Autodesk Certified Instructor (ACI)",
        sub: "Full Manufacturing Suite",
        date: "Graitec · 2019",
    },
    {
        title: "Airedale Module 1 and 2",
        sub: "Refrigeration, A/C, Installation",
        date: "2024",
    },
    {
        title: "IMechE Railway Challenge Winner",
        sub: "Huddersfield team, outright",
        date: "2013 · Energy storage",
    },
    {
        title: "Active Learning",
        sub: "Bandit · Linux Upskill · CS50P",
        date: "2025 ongoing",
    },
];

export function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.15 });

    return (
        <section id="about" className="section section-bg-deep" ref={ref}>
            <div className="section-inner">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <span className="section-label">// 001 · About</span>
                    <h2 className="section-title">Background</h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                    >
                        <p>
                            The career started in precision engineering at Bibby Turboflex, designing bespoke
                            high-performance disc couplings for oil and gas turbomachinery: full 3D models,
                            torsional vibration analysis, ANSYS FEA at 14,000rpm, and proposals costed from
                            first principles on jobs ranging from £20,000 to over £500,000. Every job required
                            direct client contact, engineering judgement, and enough commercial awareness to
                            price accurately from raw material through to shopfloor hours.
                        </p>

                        <p>
                            From there, Autodesk certified training and pre-sales at Graitec — 250 engineers
                            trained across 30 to 40 client organisations, and a solo 60-minute presentation to
                            200 people at a London conference. Then site engineering at Collett and Sons,
                            producing FEM simulation and multi-stage ground pressure calculations for 185-tonne
                            power transformer moves onto National Grid substations. Then KnowBe4, maintaining
                            99% CSAT across the most complex enterprise accounts on the platform. Then Airedale,
                            running a multi-million pound Frankfurt hyperscale data centre project alongside the
                            Commercial Lead through Phase 3 of 5.
                        </p>

                        <p>
                            Now Ring2Book, as the sole technical person in the business — building the product
                            from a concept, running more than 20 tailored pre-sales demos, and serving as the
                            only technical authority between a prospect and a commercial commitment. The BEng in
                            Mechanical Engineering and Autodesk Certified Instructor qualification sit alongside
                            active work on Linux, Python, FastAPI, and Docker, tracked publicly on GitHub through
                            a structured 24-week programme.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="credentials-panel">
                            <div className="credentials-title">Credentials</div>
                            {CREDENTIALS.map((c, i) => (
                                <div key={i} className="credential-item">
                                    <div className="credential-title">{c.title}</div>
                                    <div className="credential-sub">{c.sub}</div>
                                    <div className="credential-date">{c.date}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

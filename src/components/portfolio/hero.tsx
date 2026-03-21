"use client";

import { motion, type Variants } from "motion/react";

const STATS = [
    {
        number: "99",
        unit: "%",
        tolerance: "// maintained across full tenure",
        label: "CSAT_SCORE",
        context: "KnowBe4 · 70,000+ orgs globally",
    },
    {
        number: "65",
        unit: "%",
        tolerance: "// design time reduction",
        label: "EFFICIENCY_GAIN",
        context: "Bibby Turboflex · £572k trigger project",
    },
    {
        number: "250",
        unit: "+",
        tolerance: "// across 30–40 client organisations",
        label: "ENGINEERS_TRAINED",
        context: "Graitec · Autodesk Certified Instructor",
    },
    {
        number: "2.8",
        unit: "×",
        tolerance: "// Standard plan baseline",
        label: "ROI_DELIVERED",
        context: "Ring2Book · ~£550/month recovered",
    },
    {
        number: "£1.8m",
        unit: "",
        tolerance: "// 9 gearboxes · 3 ships · 6 years",
        label: "CONTRACT_VALUE",
        context: "Collett and Sons · marine programme",
    },
    {
        number: "20",
        unit: "+",
        tolerance: "// tailored to each prospect stack",
        label: "POC_DEMOS",
        context: "Ring2Book · sole technical authority",
    },
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
    return (
        <section id="home" className="hero-section">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                style={{ width: "100%", maxWidth: "900px" }}
            >
                <motion.h1 variants={item} className="hero-name">
                    <span className="hero-name-first">Ibrahim </span>
                    <span className="hero-name-last">Kathrada</span>
                </motion.h1>

                <motion.p variants={item} className="hero-role">
                    Solutions Engineer · APIs, Integrations &amp; Implementation · Building toward DevOps and Backend
                </motion.p>

                <motion.p variants={item} className="hero-summary">
                    Ten years across precision engineering, enterprise SaaS, and critical infrastructure.
                    Solutions engineer with a consistent record of technical discovery, integration design,
                    proof-of-concept delivery, onboarding, and commercial handover — from ANSYS FEA on
                    14,000rpm turbomachinery to building Ring2Book&apos;s full SE function from scratch.
                    Now building backend and cloud depth in public at github.com/ibz21.
                </motion.p>

                <motion.div variants={item} className="hero-stats">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="stat-card">
                            <div className="stat-number">
                                <span>{stat.number}</span>
                                {stat.unit && <span className="stat-unit">{stat.unit}</span>}
                            </div>
                            <div className="stat-tolerance">{stat.tolerance}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-context">{stat.context}</div>
                        </div>
                    ))}
                </motion.div>

                <motion.div variants={item} className="hero-ctas">
                    <a
                        href="mailto:ibrahimkathrada09@gmail.com"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get in touch ↗
                    </a>
                    <a
                        href="/Ibrahim_Kathrada_CV.pdf"
                        className="btn btn-ghost"
                        download
                    >
                        Download CV
                    </a>
                    <a
                        href="https://linkedin.com/in/ibrahim-k-975607374"
                        className="btn btn-ghost"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn ↗
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}

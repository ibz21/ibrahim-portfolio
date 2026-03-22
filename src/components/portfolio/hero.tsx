"use client";

import { motion, type Variants } from "motion/react";

const STATS = [
    {
        number: "99",
        unit: "%",
        tolerance: "// CSAT maintained",
        label: "CSAT_SCORE",
        context: "KnowBe4 · enterprise support",
    },
    {
        number: "20",
        unit: "+",
        tolerance: "// tailored POC demos",
        label: "POC_DEMOS",
        context: "Ring2Book · sole technical authority",
    },
    {
        number: "250",
        unit: "+",
        tolerance: "// engineers trained",
        label: "ENGINEERS_TRAINED",
        context: "Graitec · ACI certified",
    },
    {
        number: "65",
        unit: "%",
        tolerance: "// design time reduction",
        label: "DESIGN_EFFICIENCY",
        context: "Bibby Turboflex · £572k trigger",
    },
    {
        number: "2.8–4.4",
        unit: "×",
        tolerance: "// modelled ROI range",
        label: "ROI_RANGE",
        context: "Ring2Book · pilot-backed",
    },
    {
        number: "10,000",
        unit: "+",
        tolerance: "// users supported",
        label: "USERS_SUPPORTED",
        context: "KnowBe4 · MSP and multi-tenant",
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
                    Solutions Engineer | APIs, Integrations &amp; Implementation | SaaS · Onboarding · Technical Discovery
                </motion.p>

                <motion.p variants={item} className="hero-role">
                    Building backend and cloud capability in public: github.com/ibz21
                </motion.p>

                <motion.p variants={item} className="hero-summary">
                    Solutions engineer with 10 years across enterprise SaaS, technical pre-sales, and complex engineering environments.
                    Built Ring2Book&apos;s complete SE function from scratch as the sole technical authority: 20+ tailored POC engagements
                    across API, webhook, messaging, and workflow integrations, with pilot data validating 2.8–4.4× ROI.
                    Maintained 99% CSAT at KnowBe4 across complex enterprise environments spanning SSO, SCIM, Okta, Microsoft Active Directory,
                    and Mimecast. At Airedale, ran a multi-million pound Frankfurt hyperscale programme alongside the Commercial Lead.
                    Now building backend and cloud capability in public at github.com/ibz21.
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

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
        title: "Current Technical Development",
        sub: "Linux · Python · FastAPI · PostgreSQL · Docker · GitHub Actions · AWS · Terraform",
        date: "2026 ongoing",
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
                            The career has moved consistently toward work where technical scoping, customer need, and commercial decisions meet.
                        </p>

                        <p>
                            At Bibby Turboflex, every job ran end-to-end from RFQ through design, costing, and proposal, with direct client contact throughout. Proposals were priced from first principles on jobs from £20,000 to over £500,000. Each job covered discovery, design, quotation, and ownership from initial enquiry through to delivery.
                        </p>

                        <p>
                            At Graitec, a SaaS and professional services business built around the Autodesk platform, the work moved into pre-sales and enablement: running technical discovery and demos alongside account executives, building iLogic configurations to show automation against each prospect&apos;s actual workflow, delivering webinars to support upsell, and training 250+ engineers across 30 to 40 client organisations. This period also included a solo 60-minute technical presentation to 200 engineers at a London conference.
                        </p>

                        <p>
                            From there, Lead Project Engineer at Collett and Sons, a specialist heavy haulage firm, with responsibility for 100 to 300 tonne transformer moves for National Grid, ABB, and Siemens. Each operation was underpinned by detailed calculations, route assessment, and risk analysis. Then Extract Technology, brought in specifically for Autodesk Vault expertise to lead a cross-border design migration across UK, Polish, and US engineering teams.
                        </p>

                        <p>
                            At KnowBe4, the focus was the most complex enterprise accounts on the platform: MSP and multi-tenant deployments with 10,000+ users, SSO across Okta and Microsoft AD, SCIM provisioning, Mimecast configuration, and 99% CSAT maintained throughout. The role combined discovery, debugging, and practical solutions across a wide range of technical issues.
                        </p>

                        <p>
                            At Airedale, a multi-million pound Frankfurt hyperscale programme alongside the Commercial Lead through Phase 3 of 5: RFP and RFQ responses, contract negotiation, costing justifications, and SAP order processing for clients including Google and Oracle.
                        </p>

                        <p>
                            Now Ring2Book: the sole technical person in the business from day one. The missed-call recovery workflow was built from scratch, more than 20 tailored pre-sales demos were delivered, and the role served as the only technical authority between a prospect and a commercial commitment.
                        </p>

                        <span className="section-label">Current Technical Development</span>

                        <p>
                            Structured 24-week programme tracked publicly at github.com/ibz21. Built around solutions engineering and implementation use cases: APIs, webhooks, onboarding flows, integration troubleshooting, and technical documentation. Working output at each stage.
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

"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const WORKFLOW_STAGES = [
    { num: "01", action: "Call missed", tech: "Twilio virtual number" },
    { num: "02", action: "WhatsApp outreach", tech: "WhatsApp API, SMS fallback" },
    { num: "03", action: "Customer qualifies", tech: "Voice note and photo to AWS S3" },
    { num: "04", action: "Automation", tech: "Make, Airtable" },
    { num: "05", action: "One-tap approval", tech: "Softr dashboard" },
    { num: "06", action: "Deposit", tech: "Stripe, optional" },
    { num: "07", action: "Booking and reminder", tech: "Calendly, 24h auto-reminder" },
    { num: "08", action: "ROI report", tech: "Dashboard" },
];

const RESULT_METRICS = [
    { value: "£550/mo", desc: "avg monthly recovery" },
    { value: "2.8×", desc: "ROI, Standard plan" },
    { value: "4.4×", desc: "with deposits active" },
    { value: "2–3 wk", desc: "deployment window" },
];

const BULLETS = [
    "Designed the full eight-stage workflow from missed call detection through outreach, qualification, approval, booking, and reporting. Turned a concept into a product with a defined and repeatable shape.",
    "Ran 20+ tailored proof-of-concept demos, each built around the prospect's existing tools, workflow, and constraints. Every demo ran live within that environment, not against a generic walkthrough.",
    "Mapped API, webhook, messaging, and routing requirements before any commercial commitment, defining what was native, what needed a workaround, and what was out of scope.",
    "Built the ROI model using actual prospect call volumes and job values to produce a specific commercial case for each prospect.",
];

export function Featured() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="featured" className="section section-bg" ref={ref}>
            <div className="section-inner" style={{ maxWidth: "900px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <span className="section-label">// 002 · Featured</span>
                    <h2 className="section-title">Case Study</h2>
                </motion.div>

                <motion.div
                    className="featured-card"
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                    <div className="featured-header">
                        <div>
                            <div className="featured-badge">Solutions Engineer and Product Lead</div>
                            <h3 className="featured-title">Missed call recovery for UK tradespeople</h3>
                            <div className="featured-subtitle">
                                SaaS · WhatsApp automation · January 2025 to present · Built from zero
                            </div>
                        </div>
                        <div className="featured-authority-tag">Sole technical authority</div>
                    </div>

                    <div className="featured-body">
                        {/* Problem statement */}
                        <div className="problem-box">
                            <div className="problem-label">// problem statement</div>
                            <p className="problem-text">
                                UK trades businesses lose revenue when inbound calls go unanswered, particularly on emergency and out-of-hours work. Ring2Book was designed to recover that missed demand through a narrow, fast-to-deploy workflow: immediate outreach, lead capture, qualification, approval, booking, and reporting. The scope stayed deliberately focused on missed-call recovery and measurable commercial impact, not broad field service management.
                            </p>
                        </div>

                        {/* Workflow */}
                        <div className="workflow-label">// automated workflow</div>
                        <div className="workflow-stages">
                            {WORKFLOW_STAGES.map((stage) => (
                                <div key={stage.num} className="workflow-stage">
                                    <div className="workflow-num">{stage.num}</div>
                                    <div className="workflow-action">{stage.action}</div>
                                    <div className="workflow-tech">{stage.tech}</div>
                                </div>
                            ))}
                        </div>

                        {/* Result metrics */}
                        <div className="result-metrics">
                            {RESULT_METRICS.map((m) => (
                                <div key={m.value} className="result-metric">
                                    <span className="result-value">{m.value}</span>
                                    <span className="result-desc">{m.desc}</span>
                                </div>
                            ))}
                        </div>

                        {/* Contribution bullets */}
                        <div className="bullets-label">// contributions</div>
                        {BULLETS.map((text, i) => (
                            <div key={i} className="bullet-item">
                                <span className="bullet-marker">›</span>
                                <p className="bullet-text">{text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stack tags */}
                    <div className="stack-tags">
                        {["Twilio", "WhatsApp Business API", "Make/Zapier", "Airtable to Baserow"].map((t) => (
                            <span key={t} className="tag tag-accent">{t}</span>
                        ))}
                        {["REST APIs", "Webhooks", "AWS S3", "OAuth"].map((t) => (
                            <span key={t} className="tag tag-tech">{t}</span>
                        ))}
                        {["Softr", "Stripe", "Calendly", "Netlify"].map((t) => (
                            <span key={t} className="tag tag-neutral">{t}</span>
                        ))}
                    </div>

                    {/* What this proves */}
                    <div style={{
                        padding: "16px 36px 28px",
                        borderTop: "1px solid var(--border)",
                    }}>
                        <div className="workflow-label" style={{ marginBottom: "12px" }}>// what this proves</div>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "6px 24px",
                        }}>
                            {[
                                "Technical discovery",
                                "Solution design",
                                "Integration mapping",
                                "Demo delivery",
                                "Scope control",
                                "Commercial feasibility",
                            ].map((item) => (
                                <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ color: "var(--accent)", fontSize: "0.7rem", lineHeight: 1 }}>›</span>
                                    <span style={{
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "0.68rem",
                                        color: "var(--text-muted)",
                                        letterSpacing: "0.02em",
                                    }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

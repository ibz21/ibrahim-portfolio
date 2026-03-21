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
    "Designed the full 8-stage automation architecture from nothing, turning a concept into a product with a defined and repeatable shape — including the workflow design, the scope boundary decisions, the demo environment build, and the scoping templates used across every single sales conversation.",
    "Ran more than 20 tailored proof-of-concept demos, each one preceded by discovery to map the prospect's existing tools, then built to show Ring2Book running within that environment rather than presenting a generic walkthrough.",
    "Served as the sole technical reviewer for all proposed configurations, mapping API and webhook requirements before any commercial commitment was made, identifying what was native, what needed a workaround, and what was out of scope.",
    "Built the ROI model as a working calculation using actual prospect call volumes and job values, producing a specific monthly recovery figure per prospect rather than a marketing estimate.",
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
                                UK tradespeople miss between 25 and 47 percent of inbound calls. Each missed
                                emergency call forfeits approximately £110 in revenue, compounding to between
                                £1,000 and £2,000 per month in lost income for a sole trader. No WhatsApp-native
                                solution existed in this segment. FSM platforms like Jobber are overbuilt and take
                                weeks to deploy. Ring2Book fills the gap with narrow scope, fast deployment, and
                                measurable revenue recovery from the first month.
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
                                "Integration mapping",
                                "Demo delivery",
                                "Feasibility judgement",
                                "Scope control",
                                "Commercial translation",
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

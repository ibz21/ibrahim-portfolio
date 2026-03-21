"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface SkillCard {
    title: string;
    badge?: string;
    badgeType?: "accent" | "tech";
    items: string[];
}

const SKILL_CARDS: SkillCard[] = [
    {
        title: "Technical Pre-Sales and SE",
        items: [
            "Discovery and technical scoping",
            "Proof-of-concept demo delivery",
            "Feasibility gating and scope control",
            "ROI modelling and commercial translation",
            "RFP and RFQ response management",
            "Contract review and negotiation",
        ],
    },
    {
        title: "Customer Success and Enablement",
        items: [
            "Customer success planning",
            "Adoption and enablement programmes",
            "Onboarding and implementation",
            "Health checks and optimisation",
            "Escalation management and resolution",
            "Cross-functional stakeholder coordination",
        ],
    },
    {
        title: "APIs and Integrations",
        items: [
            "REST APIs, Webhooks, OAuth",
            "Twilio, WhatsApp Business API",
            "Make and Zapier automation",
            "Airtable, Baserow, Softr",
            "Stripe, Calendly, AWS S3",
            "JSON, API debugging, Postman",
        ],
    },
    {
        title: "Identity and Security",
        items: [
            "Okta SSO configuration",
            "Microsoft Active Directory",
            "SCIM provisioning",
            "Mimecast email filtering",
            "Datadog log analysis",
            "VPNs, proxies, DLP concepts",
        ],
    },
    {
        title: "Engineering Foundation",
        items: [
            "ANSYS FEA simulation",
            "FEM stress and ground pressure",
            "Torsional vibration analysis",
            "Autodesk Inventor and iLogic",
            "AutoCAD and Autodesk Vault",
            "API 671, ATEX, ISO 10441",
        ],
    },
    {
        title: "Backend and API Development",
        items: [
            "Python · FastAPI · PostgreSQL",
            "REST API design and documentation",
            "Webhook event handling",
            "SQL and data modelling",
            "Docker and Docker Compose",
            "Git, GitHub, CI/CD via GitHub Actions",
        ],
    },
    {
        title: "Cloud and DevOps",
        items: [
            "Linux CLI · Bash scripting",
            "AWS — EC2, S3, IAM, VPC",
            "Terraform — Infrastructure as Code",
            "Kubernetes and Helm",
            "GitOps and Argo CD",
            "Prometheus and Grafana observability",
        ],
    },
    {
        title: "Platform and Tooling",
        items: [
            "SAP — order processing and BOM management",
            "Zendesk and Jira",
            "Salesforce — CRM and account management",
            "Autodesk CALCS, proprietary",
            "Excel VBA and macro automation",
            "Technical documentation",
        ],
    },
];

export function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.05 });

    return (
        <section id="skills" className="section section-bg-deep" ref={ref}>
            <div className="section-inner" style={{ maxWidth: "900px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <span className="section-label">// 005 · Skills</span>
                    <h2 className="section-title">Capabilities</h2>
                </motion.div>

                <div className="skills-grid">
                    {SKILL_CARDS.map((card, i) => (
                        <motion.div
                            key={card.title}
                            className="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                        >
                            <div className="skill-card-header">
                                <div className="skill-card-title">{card.title}</div>
                                {card.badge && (
                                    <div className={`skill-card-badge ${card.badgeType === "tech" ? "tech" : ""}`}>
                                        {card.badge}
                                    </div>
                                )}
                            </div>
                            <div className="skill-items">
                                {card.items.map((item) => (
                                    <div key={item} className="skill-item">
                                        <div className="skill-dot" aria-hidden="true" />
                                        <span className="skill-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

interface Outcome {
    metric: string;
    label: string;
}

interface Role {
    id: string;
    dates: string;
    title: string;
    company: string;
    context: string;
    responsibilities: string;
    achievements: string[];
    outcomes: Outcome[];
    tags: { text: string; type: "accent" | "tech" | "neutral" }[];
    images?: { src: string; alt: string; caption?: string }[];
    imageSingle?: { src: string; alt: string; caption: string; rotate?: boolean; maxHeight?: string; objectPosition?: string };
    imagesPair?: { images: { src: string; alt: string }[]; caption: string };
}

const ROLES: Role[] = [
    {
        id: "ring2book",
        dates: "January 2025 to present",
        title: "Solutions Engineer and Product Lead",
        company: "Ring2Book · Remote",
        context:
            "SaaS startup built to convert missed calls into confirmed bookings for UK tradespeople. No technical person was in the business on joining. Every product decision, demo environment, integration mapping, and feasibility call passed through this role as the sole technical authority.",
        responsibilities:
            "Product definition from zero, pre-sales engineering, proof-of-concept demo delivery, feasibility gating, and technical sign-off for all proposed configurations before any commercial commitment was made.",
        achievements: [
            "Designed the full missed-call recovery workflow from nothing — eight stages from Twilio call detection through WhatsApp outreach, qualification, Softr approval, Stripe deposit, Calendly booking, and ROI dashboard.",
            "Validated the product model through pilot implementations demonstrating approximately £550 recovered per client per month, with a 2.8x return on the Standard plan rising to 4.4x with deposit collection active.",
            "Delivered more than 20 tailored proof-of-concept demos and served as the sole technical reviewer across every configuration before build.",
        ],
        outcomes: [
            { metric: "20+", label: "Tailored POC demos" },
            { metric: "8-stage", label: "Workflow designed" },
            { metric: "2.8× to 4.4×", label: "Modelled ROI range" },
        ],
        tags: [
            { text: "Twilio", type: "accent" },
            { text: "REST APIs", type: "accent" },
            { text: "Webhooks", type: "accent" },
            { text: "Make", type: "accent" },
            { text: "Softr", type: "neutral" },
            { text: "Stripe", type: "neutral" },
            { text: "Airtable", type: "neutral" },
            { text: "Calendly", type: "neutral" },
        ],
    },
    {
        id: "airedale",
        dates: "October 2024 to January 2025",
        title: "Application Engineer",
        company: "Airedale International Air Conditioning (Airedale by Modine) · Leeds",
        context:
            "Leeds-based specialist in critical cooling with over 50 years in data centre cooling, now a division of Modine Manufacturing (NYSE: MOD). The Data Center Solutions team handles hyperscale and colocation projects globally. Frankfurt sits within the FLAP-D cluster, Europe's primary hyperscale data centre region. Clients included Google and Oracle.",
        responsibilities:
            "Part of the specialist DCS team, not standard product sales — selecting and configuring cooling systems up to 2MW against heat load, PUE, acoustic, and compliance requirements. Contributed to RFP and RFQ responses, contract review, and SAP order processing for large multi-phase programmes.",
        achievements: [
            "Ran a multi-million pound multi-phase Frankfurt data centre project alongside the Commercial Lead — RFP and RFQ responses, contract review and direct negotiation, scope alignment, costing justifications, and SAP order processing through Phase 3 of 5.",
            "Reviewed contracts and negotiated scope and terms directly with clients, identifying exclusions, flagging risk, and aligning Airedale's commercial position against what the engineering team could realistically deliver.",
            "Completed Airedale's certified training: Module 1 in Basic Refrigeration and Air Conditioning, and Module 2 in Installation, Commissioning, and Maintenance.",
        ],
        outcomes: [
            { metric: "2MW", label: "Max cooling capacity" },
            { metric: "Multi-million £", label: "Frankfurt programme" },
            { metric: "Hyperscale", label: "Google and Oracle" },
        ],
        tags: [
            { text: "Critical Cooling", type: "neutral" },
            { text: "SAP", type: "neutral" },
            { text: "RFP and RFQ", type: "neutral" },
            { text: "Hyperscale", type: "neutral" },
            { text: "Contract Negotiation", type: "neutral" },
        ],
        imagesPair: {
            images: [
                { src: "/images/airedale_datacentre.jpg", alt: "Airedale data centre cooling installation" },
                { src: "/images/Chillers_thumb.jpg", alt: "Airedale critical cooling chiller units" },
            ],
            caption: "Airedale · data centre cooling and critical infrastructure",
        },
    },
    {
        id: "extract",
        dates: "February 2024 to September 2024",
        title: "Application Engineer",
        company: "Extract Technology (DEC Group) · Huddersfield",
        context:
            "UK specialist in pharmaceutical and chemical containment solutions — downflow booths, process isolators, and systems for high-potency API manufacturing. Acquired by DEC Group (Swiss-headquartered global leader in integrated process solutions) in 2021. Brought in specifically for Autodesk Inventor and Vault expertise the existing team did not have.",
        responsibilities:
            "Set up and led the Vault migration across three countries, converted legacy 2D designs to 3D models, and supported application engineering on pharmaceutical containment proposals.",
        achievements: [
            "Set up Autodesk Vault from scratch for the UK operation and led the migration of legacy 2D AutoCAD designs into Inventor 3D models, working across UK, Polish, and US engineering teams following a cross-border scoping trip to Poland to agree structure and naming conventions before any migration began.",
            "Converted a senior engineer's 2D nuclear containment system designs into Inventor 3D models — specialist capability the team did not have, delivered outside the formal job description in response to a live project need.",
            "Supported application engineering on downflow booth and containment solution proposals for pharmaceutical and chemical clients under strict regulatory requirements.",
        ],
        outcomes: [
            { metric: "3 countries", label: "Cross-border migration" },
            { metric: "2D to 3D", label: "Legacy conversion" },
            { metric: "Regulated", label: "Pharma and chemical" },
        ],
        tags: [
            { text: "Autodesk Inventor", type: "neutral" },
            { text: "Vault", type: "neutral" },
            { text: "Pharmaceutical", type: "neutral" },
            { text: "3D Modelling", type: "neutral" },
            { text: "Nuclear Containment", type: "neutral" },
        ],
        imagesPair: {
            images: [
                { src: "/images/Dec_isolators.avif", alt: "Extract Technology process isolators for pharmaceutical containment" },
                { src: "/images/dec_nuclear_containment.avif", alt: "Extract Technology nuclear containment system" },
            ],
            caption: "Extract Technology · process isolators and nuclear containment",
        },
    },
    {
        id: "knowbe4",
        dates: "March 2022 to June 2023",
        title: "Core Support Technician",
        company: "KnowBe4 · York",
        context:
            "World's largest security awareness training and simulated phishing platform, serving more than 70,000 organisations globally, consistently ranked G2 Leader. The HRM+ platform combines awareness training, phishing simulation, email security, and AI-driven coaching. The role sat at the intersection of technical support and customer success — handling fault resolution and platform enablement across enterprise accounts at all lifecycle stages.",
        responsibilities:
            "High-volume inbound support via Zendesk, product demos, and webinars across global time zones, with escalation ownership for the most complex enterprise accounts on the platform.",
        achievements: [
            "Maintained a 99% CSAT score across the role, averaging more than 20 tickets closed per day and consistently ranking among the top performers on the team.",
            "Handled the most technically complex accounts on the platform — MSP and multi-tenant deployments with more than 10,000 users, covering permission hierarchies, tenant-level configuration, and cross-site onboarding coordination.",
            "Diagnosed and resolved SSO failures across Okta and Microsoft Active Directory, SCIM provisioning issues, and Mimecast configuration problems using Datadog logs, Zendesk, and direct platform investigation.",
            "Delivered two to three product demos and webinars each week across multiple KnowBe4 products and global time zones alongside the full support workload.",
        ],
        outcomes: [
            { metric: "99%", label: "CSAT maintained" },
            { metric: "20+ / day", label: "Tickets closed" },
            { metric: "Enterprise", label: "MSP and multi-tenant" },
        ],
        tags: [
            { text: "Okta SSO", type: "tech" },
            { text: "Microsoft AD", type: "tech" },
            { text: "SCIM", type: "tech" },
            { text: "Datadog", type: "neutral" },
            { text: "Zendesk", type: "neutral" },
            { text: "Mimecast", type: "neutral" },
            { text: "Jira", type: "neutral" },
        ],
    },
    {
        id: "collett",
        dates: "March 2020 to December 2021",
        title: "Lead Project Engineer",
        company: "Collett and Sons Ltd · Goole",
        context:
            "One of the UK's leading heavy haulage and specialist transport companies, ISO 9001, 14001, 45001, and 27001 certified. Services span abnormal loads up to 500 tonnes, SPMT operations, jacking and skidding, crane hire, and route consulting. Clients include National Grid, ABB, and Siemens. Stepped in as Lead Project Engineer taking over from the departing Principal Engineer with no structured handover period.",
        responsibilities:
            "Route planning, swept path analysis, transformer site engineering, FEM simulation, crane selection, custom frame design, and end-to-end delivery of the marine export programme.",
        achievements: [
            "Produced multi-stage stress and ground pressure calculations for transformer moves onto National Grid substations — SPMT axle loads, skid track forces, jacking support forces, and Ekki timber plate sizing. Maximum jacking pressure reached 162.5 tonnes per square metre.",
            "Ran FEM simulations of skid track systems across multiple load stages using S355JR steel and Ekki timber material properties, including the 112,000kg ABB reactor move and the 185,000kg Siemens transformer move.",
            "Managed a recurring marine export programme end to end — structural frame design, costing, commercial terms, and delivery for 9 gearboxes across 3 ships, totalling £1.8 million in project value over 6 years.",
            "Designed a bespoke carry frame for a 100-tonne marine export gearbox (4m × 8m, reusable, multi-trip), calculating static and dynamic loads, chain lashing forces, and lug design against a restricted fixing footprint.",
        ],
        outcomes: [
            { metric: "£1.8m", label: "Marine programme value" },
            { metric: "185 tonnes", label: "Transformer move scale" },
            { metric: "162 t/m²", label: "National Grid install" },
        ],
        tags: [
            { text: "FEM Simulation", type: "neutral" },
            { text: "Structural Calculations", type: "neutral" },
            { text: "National Grid", type: "neutral" },
            { text: "SPMT", type: "neutral" },
            { text: "ABB", type: "neutral" },
            { text: "Siemens", type: "neutral" },
        ],
        imageSingle: {
            src: "/images/collett_girder_bridge.png",
            alt: "Collett and Sons heavy haulage vehicle transporting a large girder bridge section",
            caption: "Collett and Sons · transformer move in transit",
            maxHeight: "220px",
            objectPosition: "top",
        },
    },
    {
        id: "graitec",
        dates: "January 2019 to March 2020",
        title: "Application Specialist Engineer",
        company: "Graitec · Keighley",
        context:
            "One of the world's largest Autodesk partners, in the top 1% of Autodesk's worldwide network with Platinum Partner status across Europe and the USA. Operates as an Autodesk Authorised Training Centre, Authorised Developer, and Authorised Certification Centre. UK operation serves manufacturing, engineering, and construction businesses.",
        responsibilities:
            "Four parallel responsibilities — certified training delivery, Vault installation and configuration, technical pre-sales demos alongside account managers, and complex support escalation across thousands of manufacturing accounts.",
        achievements: [
            "Delivered Autodesk Inventor and Vault training to more than 250 engineers across 30 to 40 client organisations after qualifying as an Autodesk Certified Instructor across the full manufacturing suite, covering Essentials, Advanced, and bespoke workflow-specific courses.",
            "Presented Autodesk Fusion to 200 engineers at a live London conference, delivering more than an hour of solo technical content to a mixed audience of existing clients and prospective buyers.",
            "Ran technical pre-sales demos alongside account managers, building iLogic configurations to demonstrate design automation against each prospect's actual workflow rather than explaining the feature in the abstract.",
            "Installed and configured Autodesk Vault from scratch for clients of varying complexity, setting up folder structures, access controls, and check-in and check-out workflows matched to each client's team.",
        ],
        outcomes: [
            { metric: "250+", label: "Engineers trained" },
            { metric: "30–40", label: "Client organisations" },
            { metric: "200", label: "Live presentation audience" },
        ],
        tags: [
            { text: "Autodesk Inventor", type: "neutral" },
            { text: "Vault", type: "neutral" },
            { text: "ACI Certified", type: "neutral" },
            { text: "iLogic", type: "neutral" },
            { text: "Pre-Sales Demos", type: "neutral" },
            { text: "Training", type: "neutral" },
        ],
        imageSingle: {
            src: "/images/Cement_Factory_1.jpg",
            alt: "Autodesk Inventor 3D model of a cement plant assembly at Graitec",
            caption: "Graitec · Autodesk Inventor — cement plant model",
            maxHeight: "200px",
        },
    },
    {
        id: "bibby",
        dates: "June 2014 to December 2018",
        title: "Application Engineer",
        company: "Bibby Turboflex (now Regal Rexnord) · Dewsbury",
        context:
            "Global manufacturer of highly-engineered industrial couplings, founded in 1917 and now a brand under Regal Rexnord. Products include disc, grid, and gear couplings for oil and gas, power generation, marine, mining, and aerospace. The Turboflex and Torsiflex disc coupling ranges are API 671/ISO 10441 compliant and ATEX certified for critical turbomachinery. The High Performance Sales Team handled all custom designs and complex requirements the standard range could not meet.",
        responsibilities:
            "End-to-end from RFQ to delivery — design, calculations, manufacturing drawings, costing, and proposal sent to client. Direct client contact throughout. Required engineering judgement, commercial awareness, and manufacturing knowledge sufficient to cost each job from first principles.",
        achievements: [
            "Cut design time on repeat orders by 65% by standardising the coupling range by hub size in 10mm increments with fixed DBSE dimensions — eliminating repeated engineering after a £572,000 Dresser-Rand proposal requiring over 100 near-identical designs exposed the structural inefficiency. Extended from Nuovo Pignone to other major clients once the approach was validated.",
            "Halved proposal turnaround from approximately one week to one to two days by building Excel macros for stress analysis and torsional inertia calculations, removing the primary manual bottleneck from every job.",
            "Designed bespoke high-performance disc couplings across the full job lifecycle — 3D models, manufacturing drawings, torsional vibration analysis, and ANSYS FEA on complex cases including a 14,000rpm material removal simulation to locate the failure boundary. All designs API 671 and ATEX compliant.",
            "Costed proposals from first principles on jobs from £20,000 to over £500,000, sourcing billet directly from European suppliers and estimating shopfloor hours per machining operation rather than using catalogue rates. Direct client contact from initial RFQ through to delivery.",
        ],
        outcomes: [
            { metric: "65%", label: "Design time reduction" },
            { metric: "1–2 days", label: "Proposal turnaround" },
            { metric: "£500k+", label: "Max project value" },
        ],
        tags: [
            { text: "ANSYS FEA", type: "neutral" },
            { text: "API 671", type: "neutral" },
            { text: "ATEX", type: "neutral" },
            { text: "Autodesk Inventor", type: "neutral" },
            { text: "Excel VBA", type: "neutral" },
            { text: "iLogic", type: "neutral" },
            { text: "Oil and Gas", type: "neutral" },
        ],
        imageSingle: {
            src: "/images/ac-shaft-couplings-tidal.jpg",
            alt: "Bibby Turboflex high-performance disc coupling range for tidal and industrial applications",
            caption: "Bibby Turboflex · high-performance disc coupling range",
            maxHeight: "200px",
        },
    },
];

function ExpCard({ role, index }: { role: Role; index: number }) {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            className={`exp-card ${expanded ? "expanded" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
        >
            <button
                className="exp-header"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                style={{ width: "100%", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
            >
                <div className="exp-header-left">
                    <div className="exp-dates">{role.dates}</div>
                    <div className="exp-title">{role.title}</div>
                    <div className="exp-company">{role.company}</div>
                </div>
                <div className="exp-header-right">
                    <div className="exp-expand-icon" aria-hidden="true">
                        {expanded ? "−" : "+"}
                    </div>
                </div>
            </button>

            <div className="exp-outcomes" aria-hidden="true">
                {role.outcomes.map((o) => (
                    <div key={o.label} className="exp-outcome">
                        <span className="exp-outcome-metric">{o.metric}</span>
                        <span className="exp-outcome-label">{o.label}</span>
                    </div>
                ))}
            </div>

            <motion.div
                className="exp-body"
                initial={false}
                animate={{ height: expanded ? "auto" : 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
            >
                <div className="exp-body-inner">
                    <div className={role.images ? "exp-with-image" : ""}>
                        <div>
                            <p className="exp-context">{role.context}</p>

                            <div className="exp-responsibilities-label">// responsibilities</div>
                            <p className="exp-responsibilities">{role.responsibilities}</p>

                            <div className="exp-achievements-label">// achievements</div>
                            {role.achievements.map((a, i) => (
                                <div key={i} className="bullet-item">
                                    <span className="bullet-marker">›</span>
                                    <p className="bullet-text">{a}</p>
                                </div>
                            ))}
                        </div>

                        {role.images && (
                            <div className="exp-image-panel">
                                {role.images.map((img, i) => (
                                    <div key={i}>
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={260}
                                            height={130}
                                            style={{ objectFit: "cover", width: "100%", height: "130px", borderRadius: "4px", border: "1px solid var(--border)" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {role.imageSingle && (
                        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {role.imageSingle.rotate ? (
                                <div className="img-portrait-to-landscape">
                                    <Image
                                        src={role.imageSingle.src}
                                        alt={role.imageSingle.alt}
                                        width={220}
                                        height={400}
                                    />
                                </div>
                            ) : (
                                <Image
                                    src={role.imageSingle.src}
                                    alt={role.imageSingle.alt}
                                    width={800}
                                    height={440}
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "auto",
                                        maxHeight: role.imageSingle.maxHeight ?? "320px",
                                        objectPosition: role.imageSingle.objectPosition ?? "center",
                                        borderRadius: "4px",
                                        border: "1px solid rgba(184,115,51,0.30)",
                                    }}
                                />
                            )}
                            <div className="exp-image-caption" style={{ marginTop: "8px" }}>
                                {role.imageSingle.caption}
                            </div>
                        </div>
                    )}

                    {role.imagesPair && (
                        <div style={{ marginTop: "24px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                                {role.imagesPair.images.map((img, i) => (
                                    <Image
                                        key={i}
                                        src={img.src}
                                        alt={img.alt}
                                        width={400}
                                        height={260}
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "220px",
                                            borderRadius: "4px",
                                            border: "1px solid rgba(184,115,51,0.30)",
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="exp-image-caption" style={{ marginTop: "8px" }}>
                                {role.imagesPair.caption}
                            </div>
                        </div>
                    )}

                    <div className="stack-tags" style={{ padding: "20px 0 0", borderTop: "1px solid var(--border)", marginTop: "20px" }}>
                        {role.tags.map((t) => (
                            <span key={t.text} className={`tag tag-${t.type}`}>{t.text}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.05 });

    return (
        <section id="experience" className="section section-bg-deep" ref={ref}>
            <div className="section-inner" style={{ maxWidth: "900px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <span className="section-label">// 003 · Experience</span>
                    <h2 className="section-title">Career</h2>
                </motion.div>

                <div className="experience-list">
                    {ROLES.map((role, i) => (
                        <ExpCard key={role.id} role={role} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

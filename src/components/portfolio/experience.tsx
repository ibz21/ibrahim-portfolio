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
            "SaaS startup built to convert missed calls into confirmed bookings for UK tradespeople. There was no technical person in the business before this role. Every product decision, demo environment, integration mapping, and feasibility call ran through here as the sole technical authority.",
        responsibilities:
            "Product definition from zero, pre-sales engineering, proof-of-concept demo delivery, feasibility gating, and technical sign-off for all proposed configurations before any commercial commitment was made.",
        achievements: [
            "Designed the full missed-call recovery workflow from nothing: eight stages from Twilio call detection through WhatsApp outreach, qualification, Softr approval, Stripe deposit, Calendly booking, and ROI dashboard.",
            "Pilot implementations validated the product model: approximately £550 recovered per client per month, 2.8× on the Standard plan, rising to 4.4× with deposit collection active.",
            "Delivered more than 20 tailored proof-of-concept demos and served as the sole technical reviewer across every configuration before build.",
            "Productised delivery into a repeatable deployment model. Clients went live in two to three weeks through standard integration patterns, with configuration adapted to each client's tool stack.",
            "Produced all platform documentation, integration maps, scoping templates, and onboarding playbooks from scratch.",
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
            "Leeds-based specialist in critical cooling with over 50 years in data centre cooling, now a division of Modine Manufacturing (NYSE: MOD). The Data Center Solutions team handles hyperscale and colocation projects globally. Frankfurt is part of the FLAP-D cluster, Europe's primary hyperscale data centre region. Clients included Google and Oracle.",
        responsibilities:
            "Part of the specialist DCS team, not standard product sales: selecting and configuring cooling systems up to 2MW against heat load, PUE, acoustic, and compliance requirements. Contributed to RFP and RFQ responses, contract review, and SAP order processing for large multi-phase programmes.",
        achievements: [
            "Ran a multi-million pound multi-phase Frankfurt data centre project alongside the Commercial Lead through Phase 3 of 5, covering RFP and RFQ responses, contract review and direct negotiation, scope alignment, and costing justifications.",
            "Reviewed contracts and negotiated scope and terms directly with clients. Exclusions were identified, risks flagged, and Airedale's commercial position aligned with what the engineering team could realistically deliver.",
            "Managed SAP order processing and BOM governance for confirmed enterprise orders. Purchasing inputs were accurate and aligned with engineering deliverables before handover.",
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
            "UK specialist in pharmaceutical and chemical containment solutions: downflow booths, process isolators, and high-potency API manufacturing systems. Products operate under strict regulatory requirements across GMP-governed environments. Acquired by DEC Group in 2021. Brought in specifically for Autodesk Inventor and Vault expertise the existing team did not have.",
        responsibilities:
            "Vault system setup and legacy migration, 3D model conversion, and application engineering on containment proposals for pharmaceutical and chemical clients.",
        achievements: [
            "Set up Autodesk Vault from scratch for the UK operation and led the migration of legacy 2D AutoCAD designs into Inventor 3D models across UK, Polish, and US engineering teams. A cross-border scoping trip to Poland agreed structure and naming conventions before any migration began.",
            "Converted a senior engineer's 2D nuclear containment system designs into Inventor 3D models. Specialist capability the team did not have, delivered outside the formal job description in response to a live project need.",
            "Translated customer requirements into engineered containment solutions for pharmaceutical and chemical clients, working across sales and engineering to define scope and support bid development under strict regulatory requirements.",
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
            "World's largest security awareness training and simulated phishing platform, serving more than 70,000 organisations globally and consistently ranked G2 Leader. The HRM+ platform combines awareness training, phishing simulation, email security, and AI-driven coaching. The role covered fault resolution and platform enablement across enterprise accounts at all lifecycle stages, from onboarding through to ongoing technical support.",
        responsibilities:
            "High-volume inbound support via Zendesk, product demos and webinars across global time zones, and escalation ownership for the most complex enterprise accounts on the platform.",
        achievements: [
            "Handled the most technically complex accounts on the platform: MSP and multi-tenant deployments with more than 10,000 users, with permission hierarchies, tenant-level configuration, and cross-site onboarding coordination all part of the work.",
            "Diagnosed and resolved SSO failures across Okta and Microsoft Active Directory, SCIM provisioning issues, and Mimecast configuration problems using Datadog logs, Zendesk, and direct platform investigation.",
            "Supported enterprise onboarding alongside pre-sales engineers, from agreed solution scope through to a working live deployment, for complex MSP and multi-tenant environments.",
            "Maintained a 99% CSAT score across the role. More than 20 tickets closed per day on average, with a consistent place among the top performers on the team.",
            "Delivered two to three product demos and webinars each week across KnowBe4's product suite and global time zones. Identified upsell opportunities, including PhishER, where customer email security gaps made the need clear.",
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
            "One of the UK's leading heavy haulage and specialist transport companies, ISO 9001, 14001, 45001, and 27001 certified. Services span abnormal loads up to 500 tonnes, SPMT operations, jacking and skidding, crane hire, and route consulting. Clients include National Grid, ABB, and Siemens. Stepped in as Lead Project Engineer taking over from the departing Principal Engineer with no structured handover.",
        responsibilities:
            "Route planning, swept path analysis, transformer site engineering, FEM simulation, crane selection, custom frame design, and end-to-end delivery of the marine export programme.",
        achievements: [
            "Stepped in as Lead Project Engineer with no handover and immediately took on live delivery projects for National Grid, ABB, and Siemens. Multi-stage feasibility, ground pressure, and FEM calculations were completed before site operations began on each.",
            "Produced multi-stage stress and ground pressure calculations for transformer moves onto National Grid substations: SPMT axle loads, skid track forces, jacking support forces, and Ekki timber plate sizing. Maximum jacking pressure reached 162.5 tonnes per square metre.",
            "Ran FEM simulations of skid track systems across multiple load stages using S355JR steel and Ekki timber material properties, including the 112,000kg ABB reactor move and the 185,000kg Siemens transformer move.",
            "Managed a recurring marine export programme end to end: structural frame design, costing, commercial terms, and delivery for 9 gearboxes across 3 ships. Total programme value was £1.8 million over 6 years.",
            "Designed a bespoke carry frame for a 100-tonne marine export gearbox (4m × 8m, reusable, multi-trip). Static and dynamic loads, chain lashing forces, and lug design were all calculated against a restricted fixing footprint.",
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
            "Graitec is one of the world's largest Autodesk resellers, holding Platinum Partner status across Europe and the USA and operating as an Autodesk Authorised Training Centre, Authorised Developer, and Authorised Certification Centre. It is a SaaS and professional services business: revenue comes from software licences, implementation, training, and technical services sold to manufacturing, engineering, and construction clients. The role was the technical bridge between the sales team and the customer, running pre-sales demos, supporting account executives to close deals, implementing the software post-sale, training the client's team, and handling technical escalations the front-line team could not resolve.",
        responsibilities:
            "Pre-sales demo delivery alongside account executives, certified training delivery, Autodesk Vault installation and configuration, technical escalation support, and weekly webinars to drive upsell across existing accounts.",
        achievements: [
            "Ran technical pre-sales demos alongside account executives and built iLogic configurations to show design automation working against each prospect's actual workflow. Delivered weekly webinars to existing clients to drive upsell, marketed to trained delegates and on the Graitec site.",
            "Presented Autodesk Fusion to 200 engineers at a live London conference. More than an hour of solo technical content, delivered to a mixed audience of existing clients and prospective buyers.",
            "Trained 250+ engineers across 30 to 40 client organisations after qualifying as an Autodesk Certified Instructor across the full manufacturing suite: Inventor Essentials, Inventor Advanced, and bespoke workflow-specific courses tailored to each client.",
            "Installed and configured Autodesk Vault from scratch for clients of varying complexity. Each setup covered folder structures, access controls, naming conventions, and check-in and check-out workflows matched to the client's team.",
            "Handled complex escalation support across thousands of Graitec manufacturing accounts, reproducing edge-case issues directly in the software where the standard knowledge base had no answer.",
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
            "End-to-end from RFQ to delivery: design, calculations, manufacturing drawings, costing, and proposal sent to client. Direct client contact throughout. Required engineering judgement, commercial awareness, and manufacturing knowledge sufficient to cost each job from first principles.",
        achievements: [
            "Cut design time on repeat orders by 65% by standardising the coupling range by hub size in 10mm increments with fixed DBSE dimensions. A £572,000 Dresser-Rand proposal requiring over 100 near-identical designs exposed the structural inefficiency. Extended from Nuovo Pignone to other major oil and gas clients once the approach was validated.",
            "Halved proposal turnaround from approximately one week to one to two days by building Excel macros for stress analysis and torsional inertia calculations. This removed the primary manual bottleneck from every bid.",
            "Designed bespoke high-performance disc couplings across the full job lifecycle: 3D models, manufacturing drawings, torsional vibration analysis, and ANSYS FEA on complex cases including a 14,000rpm material removal simulation to locate the failure boundary. All designs API 671 and ATEX compliant.",
            "Costed proposals from first principles on jobs from £20,000 to over £500,000. Material pricing came direct from European billet suppliers; shopfloor hours were estimated per machining operation, not catalogue rates. Direct client contact from initial RFQ through to delivery.",
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

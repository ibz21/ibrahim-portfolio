"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

type TagType = "accent" | "tech" | "neutral";
type StatusType = "completed" | "in-progress" | "planned" | "flagship";

interface Project {
    title: string;
    status: StatusType;
    statusLabel: string;
    desc: string;
    tags: { text: string; type: TagType }[];
    link?: string;
    image?: string;
    imageAlt?: string;
    imagePair?: { src: string; alt: string }[];
    imageHeight?: number;
}

const ENGINEERING_PROJECTS: Project[] = [
    {
        title: "IMechE Railway Challenge",
        status: "completed",
        statusLabel: "Completed · 2013",
        desc: "Energy storage system for the University of Huddersfield's 1/5-scale competition locomotive, specifically the challenge measuring energy reclaimed under braking. The Huddersfield team won the IMechE Railway Challenge outright, beating Birmingham, Interfleet, and Manchester Metropolitan University.",
        tags: [
            { text: "Mechanical Engineering", type: "neutral" },
            { text: "Energy Recovery", type: "neutral" },
            { text: "Competition Winner", type: "tech" },
        ],
        image: "/images/IMG_20131016_100856.jpeg",
        imageAlt: "Overhead view of IMechE Railway Challenge bogie assembly on track with steel flanged wheels and chain drive",
        imageHeight: 160,
    },
    {
        title: "Collett FEM Engineering",
        status: "completed",
        statusLabel: "Completed · 2020 to 2021",
        desc: "FEM simulation of skid track systems for 185-tonne National Grid transformer moves onto live substations. Multi-stage ground pressure calculations covering SPMT axle loads, jacking forces, and Ekki timber plate sizing. Maximum jacking pressure reached 162.5 tonnes per square metre.",
        tags: [
            { text: "FEM Simulation", type: "neutral" },
            { text: "Structural Calculations", type: "neutral" },
            { text: "National Grid", type: "neutral" },
        ],
        imagePair: [
            { src: "/images/IMG_2756.jpeg", alt: "Power transformer on SPMT trailer at National Grid substation" },
            { src: "/images/IMG_2755.jpeg", alt: "Transformer approaching skid track with crew and heavy steel rails" },
        ],
    },
];

const SE_PROJECTS: Project[] = [
    {
        title: "Ring2Book ROI Calculator",
        status: "in-progress",
        statusLabel: "In Progress",
        desc: "Interactive Python and JavaScript tool generating client-specific ROI projections from actual call volumes, job values, and missed-call rates. Removes abstraction from the sales conversation — produces a verifiable monthly recovery figure per prospect rather than a marketing estimate.",
        tags: [
            { text: "Python", type: "accent" },
            { text: "JavaScript", type: "neutral" },
            { text: "Ring2Book", type: "neutral" },
        ],
        link: "https://github.com/ibz21",
    },
    {
        title: "Integration Sandbox API",
        status: "flagship",
        statusLabel: "Next Build",
        desc: "A Python-based integration sandbox receiving inbound webhook events, validating payloads, storing event data, tracking processing state, and exposing clean API routes for testing and demonstration. Ships with documentation, sample payloads, Docker support, CI/CD, and a Postman collection to simulate a realistic partner integration environment.",
        tags: [
            { text: "FastAPI", type: "tech" },
            { text: "Python", type: "tech" },
            { text: "PostgreSQL", type: "tech" },
            { text: "Docker", type: "neutral" },
            { text: "GitHub Actions", type: "neutral" },
            { text: "Postman", type: "neutral" },
        ],
        link: "https://github.com/ibz21/career-roadmap",
    },
    {
        title: "Customer Onboarding Workflow Demo",
        status: "planned",
        statusLabel: "Next Build",
        desc: "A mock SaaS onboarding system simulating how a new customer connects a service, submits configuration, runs a validation check, triggers a test sync, and moves through onboarding states. Shows both the customer-facing flow and a simple internal admin view for tracking onboarding status.",
        tags: [
            { text: "FastAPI", type: "tech" },
            { text: "Python", type: "tech" },
            { text: "PostgreSQL", type: "tech" },
            { text: "Docker", type: "neutral" },
        ],
    },
    {
        title: "Mock API and Demo Environment",
        status: "planned",
        statusLabel: "Next Build",
        desc: "A mock partner API and demo portal with endpoints, example requests and responses, auth examples, sandbox data, usage notes, and a short demo guide — simulating how a pre-sales team evaluates an integration before a live implementation exists.",
        tags: [
            { text: "FastAPI", type: "tech" },
            { text: "Postman", type: "neutral" },
            { text: "REST APIs", type: "tech" },
        ],
    },
    {
        title: "API Monitoring and Failure Triage Dashboard",
        status: "planned",
        statusLabel: "Next Build",
        desc: "A monitoring and triage tool collecting failed API events, grouping them by issue type, surfacing the last failed payload, tracking retry counts, and showing a simple health and status view for integration workflows.",
        tags: [
            { text: "Python", type: "tech" },
            { text: "FastAPI", type: "tech" },
            { text: "PostgreSQL", type: "tech" },
            { text: "Observability", type: "neutral" },
        ],
    },
    {
        title: "Notification Orchestration Service",
        status: "planned",
        statusLabel: "Next Build",
        desc: "A service receiving events and routing notifications across different channels — email, SMS, webhook callbacks, or team messaging. Includes retry logic, delivery status tracking, and per-customer routing rules.",
        tags: [
            { text: "Python", type: "tech" },
            { text: "FastAPI", type: "tech" },
            { text: "Webhooks", type: "tech" },
            { text: "Docker", type: "neutral" },
        ],
    },
];

const DEVOPS_PROJECTS: Project[] = [
    {
        title: "Cloud Resume Challenge",
        status: "planned",
        statusLabel: "Next Build",
        desc: "A public-facing cloud deployment using AWS services, connected to a visitor counter or basic automation flow. Proves cloud fundamentals, Terraform IaC, and CI/CD pipeline deployment in a public artefact with a live URL.",
        tags: [
            { text: "AWS", type: "tech" },
            { text: "GitHub Actions", type: "tech" },
            { text: "Terraform", type: "tech" },
        ],
    },
    {
        title: "DevOps Observability Lab",
        status: "planned",
        statusLabel: "Next Build",
        desc: "A containerised service deployment with Prometheus metrics collection, Grafana dashboards, log surfacing, and documented deployment steps showing application health and operational visibility end to end. Built to demonstrate the full DevOps loop: deploy, monitor, alert, and respond.",
        tags: [
            { text: "Docker", type: "neutral" },
            { text: "Kubernetes", type: "neutral" },
            { text: "Prometheus", type: "tech" },
            { text: "Grafana", type: "tech" },
        ],
    },
    {
        title: "Integration Troubleshooting Playbook",
        status: "planned",
        statusLabel: "Next Build",
        desc: "A documentation-first repo containing common integration failure types, example payloads, triage steps, recovery options, and incident notes. Reads as an operational troubleshooting guide that turns the KnowBe4 and Ring2Book troubleshooting experience into visible, structured proof.",
        tags: [
            { text: "Documentation", type: "neutral" },
            { text: "Incident Analysis", type: "neutral" },
            { text: "Markdown", type: "neutral" },
        ],
    },
];

function ProjectCard({ project }: { project: Project }) {
    const statusClass = project.status;

    return (
        <div className={`project-card ${project.link ? "has-link" : ""}`}>
            {project.imagePair && (
                <div className="project-image-two-col">
                    {project.imagePair.map((img, i) => (
                        <Image
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            width={300}
                            height={140}
                            style={{ objectFit: "cover", width: "100%", height: "140px" }}
                        />
                    ))}
                </div>
            )}
            {project.image && (
                <Image
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    width={500}
                    height={160}
                    className="project-image"
                    style={{ height: `${project.imageHeight || 160}px` }}
                />
            )}

            <div className="project-body">
                <div className={`project-status ${statusClass}`}>{project.statusLabel}</div>
                <div className="project-title">
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            {project.title} ↗
                        </a>
                    ) : (
                        project.title
                    )}
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                    {project.tags.map((t) => (
                        <span key={t.text} className={`tag tag-${t.type}`}>{t.text}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProjectCategory({
    title,
    desc,
    projects,
    index,
}: {
    title: string;
    desc: string;
    projects: Project[];
    index: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            className="project-category"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
        >
            <div className="project-category-header">
                <span className="project-category-title">{title}</span>
                <span className="project-category-desc">{desc}</span>
            </div>
            <div className="project-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </motion.div>
    );
}

export function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.05 });

    return (
        <section id="projects" className="section section-bg" ref={ref}>
            <div className="section-inner" style={{ maxWidth: "900px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <span className="section-label">// 004 · Projects</span>
                    <h2 className="section-title">Work</h2>
                </motion.div>

                <motion.p
                    className="projects-intro"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                    These projects are being built as part of a structured career roadmap focused on
                    Technical Solutions Engineering, backend and API credibility, and staged DevOps depth.
                    Each is designed to demonstrate real job-relevant skills — integrations, documentation,
                    testing, deployment, troubleshooting, and technical communication — rather than
                    generic tutorial builds.
                </motion.p>

                <ProjectCategory
                    title="Engineering Proof"
                    desc="Real delivered professional work. These are not side projects."
                    projects={ENGINEERING_PROJECTS}
                    index={0}
                />
                <ProjectCategory
                    title="Solutions Engineering"
                    desc="SE-focused technical builds, in build order. These directly support target roles."
                    projects={SE_PROJECTS}
                    index={1}
                />
                <ProjectCategory
                    title="DevOps and Cloud"
                    desc="Concrete builds planned for Phase 2 and Phase 3 of the engineering programme."
                    projects={DEVOPS_PROJECTS}
                    index={2}
                />
            </div>
        </section>
    );
}

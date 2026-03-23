"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface BuildingProps {
    commitCount: number;
}

export function Building({ commitCount }: BuildingProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.05 });

    return (
        <section id="building" className="section section-bg" ref={ref}>
            <div className="section-inner" style={{ maxWidth: "900px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <span className="section-label">// 006 · Building in Public</span>
                    <h2 className="section-title">Technical Roadmap</h2>
                </motion.div>

                <motion.div
                    className="building-grid"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                    <div>
                        <p className="building-intro">
                            A structured engineering programme building backend, API, cloud, and DevOps
                            depth from first principles. Everything is tracked publicly on GitHub: weekly notes
                            in markdown, proof screenshots from labs, and projects deployed as they are built.
                        </p>

                        {/* Three-path specialisation note */}
                        <div className="paths-note">
                            <div className="paths-title">// programme splits into three specialisation paths in Phase 3</div>
                            <div className="path-row">
                                <span className="path-label">TSE path</span>
                                <span className="path-desc">integration architecture, OpenAPI, onboarding workflows, demo tooling</span>
                            </div>
                            <div className="path-row">
                                <span className="path-label">DevOps path</span>
                                <span className="path-desc">Kubernetes, Helm, GitOps, Argo CD, Prometheus, Grafana</span>
                            </div>
                            <div className="path-row" style={{ marginBottom: 0 }}>
                                <span className="path-label">Backend path</span>
                                <span className="path-desc">deeper FastAPI, auth, background jobs, caching, system design</span>
                            </div>
                        </div>

                        {/* Phase 1 */}
                        <div className="phase">
                            <div className="phase-header">
                                <span className="phase-title">Phase 1 — Foundations (Weeks 1 to 8)</span>
                                <span className="phase-status active">IN PROGRESS</span>
                            </div>
                            <div>
                                <div className="week-row">
                                    <div className="week-indicator done" aria-hidden="true" />
                                    <div className="week-content">
                                        <div className="week-label">Module 0 — Audit and setup</div>
                                        <div className="week-detail">GitHub repo created, folder structure committed, goals and role targets documented at github.com/ibz21</div>
                                    </div>
                                </div>
                                <div className="week-row">
                                    <div className="week-indicator active" aria-hidden="true" />
                                    <div className="week-content">
                                        <div className="week-label">Module 1 — Linux and Git</div>
                                        <div className="week-detail">Linux fundamentals, file system, permissions, and Git basics.</div>
                                    </div>
                                </div>
                                <div className="week-row">
                                    <div className="week-indicator planned" aria-hidden="true" />
                                    <div className="week-content">
                                        <div className="week-label">Module 2 — Linux deeper</div>
                                        <div className="week-detail">permissions, processes, bash scripting</div>
                                    </div>
                                </div>
                                <div className="week-row">
                                    <div className="week-indicator planned" aria-hidden="true" />
                                    <div className="week-content">
                                        <div className="week-label">Module 3 — Python foundations</div>
                                    </div>
                                </div>
                                <div className="week-row">
                                    <div className="week-indicator planned" aria-hidden="true" />
                                    <div className="week-content">
                                        <div className="week-label">Module 4 — Python files, JSON, APIs</div>
                                    </div>
                                </div>
                                <div className="week-row">
                                    <div className="week-indicator planned" aria-hidden="true" />
                                    <div className="week-content">
                                        <div className="week-label">Module 5 — Networking and HTTP</div>
                                    </div>
                                </div>
                                <div className="week-row">
                                    <div className="week-indicator planned" aria-hidden="true" />
                                    <div className="week-content">
                                        <div className="week-label">Module 6 — SQL and PostgreSQL</div>
                                    </div>
                                </div>
                                <div className="week-row">
                                    <div className="week-indicator planned" aria-hidden="true" />
                                    <div className="week-content">
                                        <div className="week-label">Module 7 — FastAPI and API design</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="phase">
                            <div className="phase-header">
                                <span className="phase-title">Phase 2 — Build and Deploy (Weeks 9 to 16)</span>
                                <span className="phase-status planned">PLANNED</span>
                            </div>
                            <div>
                                {[
                                    "Docker and Docker Compose with PostgreSQL",
                                    "GitHub Actions CI/CD pipeline",
                                    "AWS basics — EC2, S3, IAM",
                                    "Terraform IaC for first cloud resource",
                                    "Integration Sandbox API — flagship project, Weeks 15 and 16",
                                ].map((item) => (
                                    <div key={item} className="week-row">
                                        <div className="week-indicator planned" aria-hidden="true" />
                                        <div className="week-content">
                                            <div className="week-label">{item}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="phase">
                            <div className="phase-header">
                                <span className="phase-title">Phase 3 — Specialisation (Weeks 17 to 24)</span>
                                <span className="phase-status planned">PLANNED</span>
                            </div>
                            <div>
                                {[
                                    { label: "TSE path", detail: "OpenAPI, Postman, integration architecture, customer onboarding demo" },
                                    { label: "DevOps path", detail: "Kubernetes, Helm, GitOps, Argo CD, Prometheus and Grafana" },
                                    { label: "Backend path", detail: "auth, background jobs, queues, caching, system design" },
                                ].map((item) => (
                                    <div key={item.label} className="week-row">
                                        <div className="week-indicator planned" aria-hidden="true" />
                                        <div className="week-content">
                                            <div className="week-label">{item.label}</div>
                                            <div className="week-detail">{item.detail}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* GitHub panel */}
                    <div>
                        <div className="github-panel">
                            <div className="github-header">
                                <div className="github-icon" aria-hidden="true">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-muted)" aria-hidden="true">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="github-repo">career-roadmap</div>
                                    <div className="github-handle">github.com/ibz21</div>
                                </div>
                            </div>

                            <div className="github-stats">
                                <div className="github-stat">
                                    <span className="github-stat-label">Commits</span>
                                    <span className="github-stat-value">{commitCount}</span>
                                </div>
                                <div className="github-stat">
                                    <span className="github-stat-label">Repositories</span>
                                    <span className="github-stat-value">1</span>
                                </div>
                                <div className="github-stat">
                                    <span className="github-stat-label">Programme</span>
                                    <span className="github-stat-value">24 weeks</span>
                                </div>
                            </div>

                            <a
                                href="https://github.com/ibz21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                Progress, notes, and project repos tracked live at github.com/ibz21
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

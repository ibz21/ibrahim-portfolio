"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "featured", label: "Featured" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "building", label: "Building" },
    { id: "contact", label: "Contact" },
];

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const sectionEls = NAV_ITEMS.map((item) =>
            document.getElementById(item.id)
        ).filter(Boolean) as HTMLElement[];

        observerRef.current = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    const topmost = visible.reduce((a, b) =>
                        a.boundingClientRect.top < b.boundingClientRect.top ? a : b
                    );
                    setActiveSection(topmost.target.id);
                }
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
        );

        sectionEls.forEach((el) => observerRef.current?.observe(el));
        return () => observerRef.current?.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="nav-sidebar" aria-label="Portfolio navigation">
                <div className="nav-logo">
                    <div className="nav-logo-name">Ibrahim Kathrada</div>
                    <div className="nav-logo-role">Solutions Engineer</div>
                </div>

                <div className="nav-items">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-item ${activeSection === item.id ? "active" : ""}`}
                            onClick={() => scrollTo(item.id)}
                            aria-current={activeSection === item.id ? "true" : undefined}
                        >
                            <div className="nav-diamond" aria-hidden="true" />
                            <span className="nav-label">{item.label}</span>
                        </button>
                    ))}
                </div>

                <div className="nav-footer">
                    <div className="nav-status">
                        <div className="nav-status-dot" aria-hidden="true" />
                        <span className="nav-status-label">Open to roles</span>
                    </div>
                    <div className="nav-links">
                        <a
                            href="mailto:ibrahimkathrada09@gmail.com"
                            className="nav-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email
                        </a>
                        <a
                            href="https://linkedin.com/in/ibrahim-k-975607374"
                            className="nav-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/ibz21"
                            className="nav-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Bar */}
            <div className="mobile-nav-bar">
                <span className="mobile-nav-name">Ibrahim Kathrada</span>
                <button
                    className="mobile-hamburger"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
                        <motion.div
                            className="mobile-drawer-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            className="mobile-drawer-panel"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "24px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "0.65rem",
                                        color: "var(--text-muted)",
                                        letterSpacing: "0.08em",
                                    }}
                                >
                                    NAVIGATION
                                </span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    style={{
                                        background: "none",
                                        border: "1px solid var(--border-2)",
                                        color: "var(--text-muted)",
                                        borderRadius: "4px",
                                        padding: "6px 10px",
                                        cursor: "pointer",
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "0.65rem",
                                    }}
                                    aria-label="Close navigation"
                                >
                                    ✕
                                </button>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                {NAV_ITEMS.map((item) => (
                                    <button
                                        key={item.id}
                                        className={`nav-item ${activeSection === item.id ? "active" : ""}`}
                                        onClick={() => scrollTo(item.id)}
                                        style={{ justifyContent: "flex-start" }}
                                    >
                                        <div className="nav-diamond" aria-hidden="true" />
                                        <span className="nav-label">{item.label}</span>
                                    </button>
                                ))}
                            </div>

                            <div style={{ marginTop: "24px", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                                <div className="nav-status" style={{ marginBottom: "12px" }}>
                                    <div className="nav-status-dot" />
                                    <span className="nav-status-label">Open to roles</span>
                                </div>
                                <div className="nav-links">
                                    <a href="mailto:ibrahimkathrada09@gmail.com" className="nav-link" target="_blank" rel="noopener noreferrer">Email</a>
                                    <a href="https://linkedin.com/in/ibrahim-k-975607374" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    <a href="https://github.com/ibz21" className="nav-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

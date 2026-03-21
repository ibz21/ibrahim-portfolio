"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const CONTACT_ROWS = [
    {
        icon: "✉",
        label: "Email",
        value: "ibrahimkathrada09@gmail.com",
        href: "mailto:ibrahimkathrada09@gmail.com",
        external: false,
    },
    {
        icon: "in",
        label: "LinkedIn",
        value: "linkedin.com/in/ibrahim-k-975607374",
        href: "https://linkedin.com/in/ibrahim-k-975607374",
        external: true,
    },
    {
        icon: "{}",
        label: "GitHub",
        value: "github.com/ibz21",
        href: "https://github.com/ibz21",
        external: true,
    },
    {
        icon: "↓",
        label: "CV",
        value: "Ibrahim_Kathrada_CV.pdf",
        href: "/Ibrahim_Kathrada_CV.pdf",
        download: true,
        external: false,
    },
];

export function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.15 });

    return (
        <section id="contact" className="section section-bg-deep" ref={ref}>
            <div className="section-inner">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <span className="section-label">// 007 · Contact</span>
                </motion.div>

                <motion.h2
                    className="contact-tagline"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                    Let&apos;s work together.
                </motion.h2>

                <motion.p
                    className="contact-subtext"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                >
                    Open to Solutions Engineer, Pre-Sales Engineer, Technical CSM, and
                    Implementation Engineer roles. UK-based, remote-first. Available for interviews now.
                </motion.p>

                <motion.div
                    className="contact-rows"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                    {CONTACT_ROWS.map((row) => (
                        <a
                            key={row.label}
                            href={row.href}
                            className="contact-row"
                            target={row.external ? "_blank" : undefined}
                            rel={row.external ? "noopener noreferrer" : undefined}
                            download={row.download ? true : undefined}
                            aria-label={`${row.label}: ${row.value}`}
                        >
                            <span className="contact-row-icon" aria-hidden="true">{row.icon}</span>
                            <span className="contact-row-label">{row.label}</span>
                            <span className="contact-row-value">{row.value}</span>
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    className="contact-footer"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                    Built with precision · Steel and Copper · 2025
                </motion.div>
            </div>
        </section>
    );
}

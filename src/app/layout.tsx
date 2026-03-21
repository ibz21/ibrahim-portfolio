import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/portfolio.css";

const fraunces = Fraunces({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fraunces",
    weight: ["300", "400"],
    style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jetbrains",
    weight: ["400", "500"],
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
    weight: ["300", "400"],
});

export const metadata: Metadata = {
    title: "Ibrahim Kathrada — Solutions Engineer",
    description:
        "Solutions Engineer with ten years across precision engineering, enterprise SaaS, and critical infrastructure. APIs, integrations, implementation, and backend depth in public.",
    openGraph: {
        title: "Ibrahim Kathrada — Solutions Engineer",
        description:
            "Solutions Engineer with a consistent record of technical discovery, integration design, proof-of-concept delivery, onboarding, and commercial handover.",
        type: "website",
    },
};

export const viewport: Viewport = {
    themeColor: "#0f0e0b",
    colorScheme: "dark",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${fraunces.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}
            suppressHydrationWarning
        >
            <body className="portfolio-body antialiased">{children}</body>
        </html>
    );
}

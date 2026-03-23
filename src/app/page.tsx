import { Navigation } from "@/components/portfolio/navigation";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Featured } from "@/components/portfolio/featured";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { BuildingWrapper } from "@/components/portfolio/building-wrapper";
import { Contact } from "@/components/portfolio/contact";

export default function PortfolioPage() {
    return (
        <>
            {/* Engineering grid overlay */}
            <div className="grid-overlay" aria-hidden="true" />

            {/* Navigation */}
            <Navigation />

            {/* Main content */}
            <main className="portfolio-main">
                <Hero />
                <About />
                <Featured />
                <Experience />
                <Projects />
                <Skills />
                <BuildingWrapper />
                <Contact />
            </main>
        </>
    );
}

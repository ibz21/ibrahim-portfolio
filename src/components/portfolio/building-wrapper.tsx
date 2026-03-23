import { Building } from "@/components/portfolio/building";

async function getCommitCount(): Promise<number> {
    try {
        const res = await fetch(
            "https://api.github.com/repos/ibz21/career-roadmap/commits?per_page=1",
            { next: { revalidate: 86400 } },
        );
        const link = res.headers.get("link");
        if (link) {
            const match = link.match(/page=(\d+)>; rel="last"/);
            if (match) return parseInt(match[1], 10);
        }
        // If no link header, there is only one page — count the single response item
        if (res.ok) {
            const data = await res.json();
            return Array.isArray(data) ? data.length : 0;
        }
        return 0;
    } catch {
        return 0;
    }
}

export async function BuildingWrapper() {
    const commitCount = await getCommitCount();
    return <Building commitCount={commitCount} />;
}

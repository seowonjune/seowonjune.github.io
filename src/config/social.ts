import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Mail",
        href: "mailto:wonjuneseo@unist.ac.kr",
        linkTitle: `Send an email to Wonjune Seo`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=EpmIX2YAAAAJ",
        linkTitle: `Wonjune Seo on Google Scholar`,
        isActive: true,
    },
    {
        name: "Github",
        href: "https://github.com/seowonjune", // ← 본인 GitHub 주소로 변경
        linkTitle: `Wonjune Seo on Github`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/YOUR-ID/",
        linkTitle: `Wonjune Seo on LinkedIn`,
        isActive: false, // LinkedIn 있으면 true로
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
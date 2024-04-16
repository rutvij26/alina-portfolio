export interface IExperiences {
    [id: string]: {
        name: string;
        photo_url: string;
        title: string;
        brands?: string[];
        points?: string[];
    }
}
// alina edit
export const experiences: IExperiences = {
    "1": {
        name: "North Strategic",
        photo_url: "/publicis_square.png",
        brands: [
            "/amex.png",
            "/playstation.png",
            "/royallepage.png",
            "/kruger.png",
            "/scene_plus.png",
            "/jazwares.png",
        ],
        title: "Public Relations Intern",
        points: [
            "Developing and supporting PR and social media communications to meet client objectives including pitching magazines, bloggers, online publications, TV, Radio etc.",
            "Drafting and editing media materials including editorial pieces, media advisories, press releases, fact sheets and briefing books.",
            "Building relationships with media contacts, influencers, and management of media lists.",
            "Doing daily media monitoring and PR control for established global brands.",
            "Written and verbal outreach with media contacts.",
            "Supporting PR and social team with media drops, tracking shipments, sending mailers, etc.",
        ]
    },
    "2": {
        name: "North Strategic 2",
        photo_url: "/publicis_square.png",
        title: "Experience Title 2",   
    },
    "3": {
        name: "North Strategic 3",
        photo_url: "/publicis_square.png",
        title: "Experience Title 3"
    },
    "4": {
        name: "North Strategic 4",
        photo_url: "/publicis_square.png",
        title: "Experience Title 4"
    },
    "5": {
        name: "North Strategic 5",
        photo_url: "/publicis_square.png",
        title: "Experience Title 5"
    },
}
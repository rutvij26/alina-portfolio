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
            "/publicis_square.png",
            "/publicis_square.png",
            "/publicis_square.png",
            "/publicis_square.png",
            "/publicis_square.png",
        ],
        title: "Public Relations Intern",
        points: [
            "A creative thinker and visual storyteller who believes in transforming ideas into impactful content across various mediums.",
            "A creative thinker and visual storyteller who believes in transforming ideas into impactful content across various mediums.",
            "A creative thinker and visual storyteller who believes in transforming ideas into impactful content across various mediums.",
            "A creative thinker and visual storyteller who believes in transforming ideas into impactful content across various mediums.",
            "A creative thinker and visual storyteller who believes in transforming ideas into impactful content across various mediums.",
            "A creative thinker and visual storyteller who believes in transforming ideas into impactful content across various mediums.",
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
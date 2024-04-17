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
            "Supporting PR and social team with media drops, tracking shipments, sending mailers, etc."
            
        ]
    },
    "2": {
        name: "CQBC",
        photo_url: "/cqbc.png",
        title: "Copywriter Intern",
        points: [
            "Worked on ICCF's video shoots by writing scripts for social media and for hosting youth workshops..",
            "Created digital content like posts, stories on sensitive topics like anti-racism, dementia, senior safety etc.",
            "Revamped the website with new design, content, and creative ideas.",
            "Creating brand guidelines document to help art directors design a new brand identity in the market.",
            "Writing their monthly newsletters and drafting/editing client presentations.",
        ],
        brands: [
            
            "/iccf.png",
        ],
    },
    "3": {
        name: "Togglehead",
        photo_url: "/TH.png",
        title: "Experience Title 3",
        points: [
            "Handled the social media of Gits band along with website building, prepared launch campaigns, social media weekly calendars with post content and captions .",
            "Preparing fun and interactive agency related content, promoting the brands and collaborations of our company through posts and videos.",
            "Worked on the creative ideation and brand pitches like Priya Oil, Eva, Discovery channel, Group Satellite Builders.",
            "Working cross functionally with multiple teams of graphic designers, account managers and senior leadership teams.",
            
        ],
        brands: [
            "/gits.png",
            "/dc.png",
            "/yardley.png",
        ]
    },
    "4": {
        name: "BlueBuzz",
        photo_url: "/BlueBuzz.png",
        title: "Social Media Intern",
        points: [
            "Contributed to Mind Wars GK Olympiad by conducting live quizzes, creating soical media posts, captions and bringing influers/hosts on board.",
            "Helped the team achieve two awards: Digies Digital Awards- Best Use of Facebook, CMO Asia-Best Digital Marketing Campaign",
            "Managed the beauty pageant director'ssocial media content.Created content calendars, media strategies and weekly posts that resulted in getting her Instagram verified.",
            "Mrs India World 2020-2021 social media coverage of the whole event through posts, stories,reels and content creation accross all social platforms.",
            
        ],
        brands: [
            "/mrsindia.png",
            "/mindwars.png",
        ]
    },
}
export interface IProjects {
    [id: string]: {
        name: string;
        photo_url: string;
        title: string;
        idea?: string;
        insight?: string;
        images?: string[];
    }
}

export const projects: IProjects = {
    "1": {
        name: "Paw Patrol",
        photo_url: "/paw.png",
        title: "Paw Patrol",
        idea: "One show is all it takes to make you cool",
        insight: "87% of today's parents believe that having a friendship with their children is important",
        images: [
            "/paw cover.png",
            "/paw bill.png",
            "/paw social.png",
            "/paw x indigo.png",
            "/paw web.png",
            "/paw book.png",
            
        ]

    },
    "2": {
        name: "Heinz",
        photo_url: "/heinz.png",
        title: "Heinz",
        idea: "No Sodium on the Podium",
        insight: "Salt is seen as a core part of gaming, but it doesn't have to be",
        images: [
            "/Heinz cover.png",
            "/execution 1.png",
            "/execution ooh.png",
            "/execution 2.png",
            "/execution 3.png",
            "/execution 4.png",
            "/execution 5.png",
            "/event.png",
        ]
    },
    "3": {
        name: "Toyota",
        photo_url: "/toyota.png",
        title: "Toyota",
        idea: "Built for the Better",
        insight: "Customers are seeking more economical EVs without sacrificing features in the EV industry",
        images: [
            "/toyota cover.png",
            "/built.png",
            "/toyota ooh 1.png",
            "/toyota ooh 2.png",
            "/toyota ooh.png",
            "/toyota sm.png",
        ]
    },
    "4": {
        name: "Hershey's Eatmore",
        photo_url: "/eatmore.png",
        title: "Hershey's Eatmore",
        idea: "Just....chew on it",
        insight: "Gen Z does not know Eat More exists. The product lacks awareness.",
        images: [
            "/eatmore cover.png",
            "/eatmore ooh.png",
            "/eatmore sm.png",
            "/eatmore activation.png",
            
        ]
    },
    "5": {
        name: "The Beer Store",
        photo_url: "/beer store.png",
        title: "The Beer Store",
        idea: "Discover the world one pint at a time",
        insight: "30-40 year old's love to travel but cant due to life responsiblities.",
        images: [
            "/tbs cover.png",
            "/tbs ooh.png",
            "/tbs ooh 1.png",
            "/beer points.png",
            "/beer passport.png",
        ]
            
    },
}
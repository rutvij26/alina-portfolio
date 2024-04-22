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
        photo_url: "/projects/paw.png",
        title: "Paw Patrol",
        idea: "One show is all it takes to make you cool",
        insight: "87% of today's parents believe that having a friendship with their children is important",
        images: [
            "/projects/paw-cover.png",
            "/projects/paw-bill.png",
            "/projects/paw-social.png",
            "/projects/paw-indigo.png",
            "/projects/paw-web.png",
            "/projects/paw-book.png",

        ]

    },
    "2": {
        name: "Heinz",
        photo_url: "/projects/heinz.png",
        title: "Heinz",
        idea: "No Sodium on the Podium",
        insight: "Salt is seen as a core part of gaming, but it doesn't have to be",
        images: [
            "/projects/Heinz-cover.png",
            "/projects/execution-1.png",
            "/projects/execution-ooh.png",
            "/projects/execution-2.png",
            "/projects/execution-3.png",
            "/projects/execution-4.png",
            "/projects/execution-5.png",
            "/projects/event.png",
        ]
    },
    "3": {
        name: "Toyota",
        photo_url: "/projects/toyota.png",
        title: "Toyota",
        idea: "Built for the Better",
        insight: "Customers are seeking more economical EVs without sacrificing features in the EV industry",
        images: [
            "/projects/toyota-cover.png",
            "/projects/built.png",
            "/projects/toyota-ooh1.png",
            "/projects/toyota-ooh2.png",
            "/projects/toyota-ooh.png",
            "/projects/toyota-sm.png",
        ]
    },
    "4": {
        name: "Hershey's Eatmore",
        photo_url: "/projects/eatmore.png",
        title: "Hershey's Eatmore",
        idea: "Just....chew on it",
        insight: "Gen Z does not know Eat More exists. The product lacks awareness.",
        images: [
            "/projects/eatmore-cover.png",
            "/projects/eatmore-ooh.png",
            "/projects/eatmore-sm.png",
            "/projects/eatmore-activation.png",

        ]
    },
    "5": {
        name: "The Beer Store",
        photo_url: "/projects/beer-store.png",
        title: "The Beer Store",
        idea: "Discover the world one pint at a time",
        insight: "30-40 year old's love to travel but cant due to life responsiblities.",
        images: [
            "/projects/tbs-cover.png",
            "/projects/tbs-ooh.png",
            "/projects/tbs-ooh1.png",
            "/projects/beer-points.png",
            "/projects/beer-passport.png",
        ]

    },
    "6": {
        name: "Philadelphia Cream Cheese",
        photo_url: "/projects/philly.png",
        title: "Philadelphia Cream Cheese",
        idea: "It's time for a creamy conversation #TweetsFromAnAngel",
        insight: "The Philly Angel (icon and spokesperson of Philadelphia Cream Cheese) shares her views of the world from 3000 feet above earth, commenting on all things culture, cream cheese, breakfast, workplace, and more.",
        images: [
            "/projects/salad.png",
            "/projects/spreadsheet.png",
            "/projects/sunday.png",
            "/projects/thirdwheel.png",
            "/projects/waking.png",
            "/projects/weirdest.png",
        ]
            
    },
}
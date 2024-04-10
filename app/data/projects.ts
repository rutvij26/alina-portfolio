export interface IProjects {
    [id: string]: {
        name: string;
        photo_url: string;
        title: string;
    }
}

export const projects: IProjects = {
    "1": {
        name: "Project 1",
        photo_url: "/publicis_square.png",
        title: "Project title 1"
    },
    "2": {
        name: "Project 2",
        photo_url: "/publicis_square.png",
        title: "Project title 2"
    },
    "3": {
        name: "Project 3",
        photo_url: "/publicis_square.png",
        title: "Project title 3"
    },
    "4": {
        name: "Project 4",
        photo_url: "/publicis_square.png",
        title: "Project title 4"
    },
    "5": {
        name: "Project 5",
        photo_url: "/publicis_square.png",
        title: "Project title 5"
    },
}
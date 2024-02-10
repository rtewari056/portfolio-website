type Properties = {
    _type: string;
    asset: Asset;
}

type Asset = {
    _ref: string;
    _type: string;
}

// Home model
export type Home = {
    profileBackgroundCircle: Properties;
    profilePic: Properties;
    circleImg1: Properties;
    circleImg2: Properties;
    circleImg3: Properties;
}

// About model
export type About = {
    description: string;
    resumeLink: string;
    imgUrl: Properties;
}

// Contact model
export type Contact = {
    email: string;
    phoneNumber: string;
}

// Open Source model
export type OpenSource = {
    name: string;
    prLink: string;
    imgUrl: string;
}

// Experience model

export type Experience = {
    year: string;
    works: {
        role: string;
        company: string;
        description: string;
    }[];
}

// Skills model
export type Skill = {
    name: string;
    bgColor: string;
    icon: Properties;
}

// Works model
export type Work = {
    title: string;
    description: string;
    projectLink: string;
    codeLink: string;
    imgUrl: Properties;
    tags: string[]
}

// Contact Form model
export type ContactForm = {
    name: string;
    email: string;
    message: string;
}
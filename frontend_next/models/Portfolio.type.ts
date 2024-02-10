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
    profileBackgroundCircle: Properties,
    profilePic: Properties;
    circleImg1: Properties;
    circleImg2: Properties;
    circleImg3: Properties;
}
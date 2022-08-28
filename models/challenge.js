const challenges = [
    {
        id: "HundredDaysOfCSS",
        status: 'Active',
        name: '100 days CSS Challenge',
        description: [
            "The challenge is to reproduce a given HTML and CSS snippets for 100 consecutive days.",
            "Participants use CodePen to write and save their code and publish the results every day on the challenge website."
        ],
        url: 'https://100dayscss.com/'
    },
    {
        id: "GoogleKickStart2022",
        status: 'Active',
        name: 'Google Kick Start 2022',
        description: [
            "Kick Start offers coders around the world the chance to develop and hone their programming skills through online-hosted competition rounds.",
            "The three-hour rounds feature a variety of algorithmic challenges, all developed by Google engineers so that you get a taste of the technical skills needed for a career at Google (the top competitors from our Kick Start rounds may be invited to interview at Google!)."
        ],
        url: 'https://codingcompetitions.withgoogle.com/kickstart/about'
    }
];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(challenges))));
}

exports.findById = (id) => {
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(challenges)).find(challenge =>
        challenge.id == id)
        )
    );
}
const challenges = [
    {
        id: "HundredDaysOfCSS",
        status: 'Active',
        name: '100 days CSS Challenge',
        description: [
            "The challenge is to reproduce a given HTML, CSS snippets for 100 consecutive days.",
            "The code need to be written and saved on CodePen",
            "Once it is done, the CodePen link has to be published every day on the challenge website."
        ],
        url: 'https://100dayscss.com/'
    },
    {
        id: "GoogleKickStart2022",
        status: 'Active',
        name: 'Google Kick Start 2022',
        description: [
            "Kick Start is an online coding competition divided in rounds.",
            "The three-hour rounds feature a variety of algorithmic challenges, all developed by Google engineers (the top competitors from the Kick Start rounds may be invited to interview at Google!)."
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
const challenges = [
    {
        id: 1,
        status: 'Active',
        name: '100 days CSS Challenge',
        description: [
            "The challenge is to reproduce a given HTML and CSS snippets for 100 consecutive days.",
            "Participants use CodePen to write and save their code and publish the results every day on the challenge website."
        ],
        website: 'https://100dayscss.com/',
        url: '#'
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
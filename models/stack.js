const stacks = [
    {
        "id": "Angular",
        "name": "Angular",
        "url": "/Stack/angular.svg"
    },
    {
        "id": "CSS-3",
        "name": "CSS 3",
        "url": "/Stack/css3.svg"
    },
    {
        "id": "Express-js",
        "name": "Express.js",
        "url": "/Stack/express.svg"
    },
    {
        "id": "Git",
        "name": "Git",
        "url": "/Stack/git.svg"
    },
    {
        "id": "GitHub",
        "name": "GitHub",
        "url": "/Stack/github.svg"
    },
    {
        "id": "HTML-5",
        "name": "HTML 5",
        "url": "/Stack/html5.svg"
    },
    {
        "id": "JavaScript",
        "name": "JavaScript",
        "url": "/Stack/javascript.svg"
    },
    {
        "id": "MongoDB",
        "name": "MongoDB",
        "url": "/Stack/mongodb.svg"
    },
    {
        "id": "MySQL",
        "name": "MySQL",
        "url": "/Stack/mysql.svg"
    },
    {
        "id": "Node-js",
        "name": "Node.js",
        "url": "/Stack/nodejs.svg"
    },
    {
        "id": "React",
        "name": "React",
        "url": "/Stack/react.svg"
    },
    {
        "id": "Sass",
        "name": "Sass",
        "url": "/Stack/sass.svg"
    }
]

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(stacks))));
}

exports.findById = (id) => {
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(stacks)).find(stack =>
        stack.id == id)
        )
    );
}
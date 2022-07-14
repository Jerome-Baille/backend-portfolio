const abouts = [
    {
        "id": "myself",
        "description" : [
            "I am Jérôme, a professional and passionate developer based in the south of France.",
            "Over the years, my curiosity led me to explore different aspects of new technologies including 2 years as ambassador for Microsoft France (Microsoft’s “House of Fans” program).",
            "After a career in the banking sector, where I acquired and sharpened my listening skills, my flexibility and my rigor, I decided to get back to my true passion: coding.",
            "With great determination, I went back to school to finally get certificated in Web Development.  Throughout this journey, I carried out multiple professional projects in perfect autonomy and precision.",
            "At this moment, I am tenaciously looking to put my diverse and rich background at the service of ambitious and challenging projects.",
            "Thanks to the manifold projects I have worked on, I have been able to manage both the front and the back end, giving me as global vision of the development of a web application.",
            "My goal is to create a clean and sharp code that generates a web app that is both accessible, user-friendly and performing.",
            "If you would like to know more about me and my projects feel free to contact me!",
            "With my best regards,"
        ]
    }
]

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(abouts))));
}

exports.findById = (id) => {
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(abouts)).find(about =>
        about.id == id)
        )
    );
}
const hundredDaysOfCSS = [
    {
        id: 1,
        title: "CSS Challenge - Day1",
        src: "https://codepen.io/jerome-baille/embed/bGvMPQB",
        name: "Day 1"
    },
    {
        id: 2,
        title: "CSS Challenge - Day2",
        src: "https://codepen.io/jerome-baille/embed/zYWjgob",
        name: "Day 2"
    },
    {
        id: 3,
        title: "CSS Challenge - Day3",
        src: "https://codepen.io/jerome-baille/embed/QWmremx",
        name: "Day 3"
    },
    {
        id: 4,
        title: "CSS Challenge - Day4",
        src: "https://codepen.io/jerome-baille/embed/MWVXgzK",
        name: "Day 4"
    },
    {
        id: 5,
        title: "CSS Challenge - Day5",
        src: "https://codepen.io/jerome-baille/embed/QWmxWVp",
        name: "Day 5"
    },
    {
        id: 6,
        title: "CSS Challenge - Day6",
        src: "https://codepen.io/jerome-baille/embed/ExERaWJ",
        name: "Day 6"
    },
    {
        id: 7,
        title: "CSS Challenge - Day7",
        src: "https://codepen.io/jerome-baille/embed/PoRawvE",
        name: "Day 7"
    },
    {
        id: 8,
        title: "CSS Challenge - Day8",
        src: "https://codepen.io/jerome-baille/embed/zYWaGOx",
        name: "Day 8"
    },
    {
        id: 9,
        title: "CSS Challenge - Day9",
        src: "https://codepen.io/jerome-baille/embed/ZExRKwW",
        name: "Day 9"
    },
    {
        id: 10,
        title: "CSS Challenge - Day10",
        src: "https://codepen.io/jerome-baille/embed/JjLZJWv",
        name: "Day 10"
    },
    {
        id: 11,
        title: "CSS Challenge - Day11",
        src: "https://codepen.io/jerome-baille/embed/LYdrLzJ",
        name: "Day 11"
    },
    {
        id: 12,
        title: "CSS Challenge - Day12",
        src: "https://codepen.io/jerome-baille/embed/BarVZYN",
        name: "Day 12"
    },
    {
        id: 13,
        title: "CSS Challenge - Day13",
        src: "https://codepen.io/jerome-baille/embed/LYdrjVo",
        name: "Day 13"
    },
    {
        id: 14,
        title: "CSS Challenge - Day14",
        src: "https://codepen.io/jerome-baille/embed/KKoevzZ",
        name: "Day 14"
    },
    {
        id: 15,
        title: "CSS Challenge - Day15",
        src: "https://codepen.io/jerome-baille/embed/rNdKzjq",
        name: "Day 15"
    },
    {
        id: 16,
        title: "CSS Challenge - Day16",
        src: "https://codepen.io/jerome-baille/embed/BarVdwZ",
        name: "Day 16"
    },
    {
        id: 17,
        title: "CSS Challenge - Day17",
        src: "https://codepen.io/jerome-baille/embed/MWVXvGP",
        name: "Day 17"
    },
    {
        id: 18,
        title: "CSS Challenge - Day18",
        src: "https://codepen.io/jerome-baille/embed/NWYzvOY",
        name: "Day 18"
    },
    {
        id: 19,
        title: "CSS Challenge - Day19",
        src: "https://codepen.io/jerome-baille/embed/QWmxMXV",
        name: "Day 19"
    },
    {
        id: 20,
        title: "CSS Challenge - Day20",
        src: "https://codepen.io/jerome-baille/embed/abYKLoO",
        name: "Day 20"
    },
    {
        id: 21,
        title: "CSS Challenge - Day21",
        src: "https://codepen.io/jerome-baille/embed/dymKVyO",
        name: "Day 21"
    },
    {
        id: 22,
        title: "CSS Challenge - Day22",
        src: "https://codepen.io/jerome-baille/embed/XWEYebW",
        name: "Day 22"
    },
    {
        id: 23,
        title: "CSS Challenge - Day23",
        src: "https://codepen.io/jerome-baille/embed/yLKEzJW",
        name: "Day 23"
    },
    {
        id: 24,
        title: "CSS Challenge - Day24",
        src: "https://codepen.io/jerome-baille/embed/YzavEQd",
        name: "Day 24"
    }
];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(hundredDaysOfCSS))));
}

exports.findById = (id) => {
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(hundredDaysOfCSS)).find(hundredDays =>
            hundredDays.id == id)
        )
    );
}
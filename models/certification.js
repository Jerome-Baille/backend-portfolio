const certifications = {
    "MetaFrontendDeveloper": {
        "id": "MetaFrontendDeveloper",
        "status" : "Active",
        "name" : "Front-end Developer",
        "author" : "Meta",
        "type" : "Professional Certificate",
        "url" : "https://www.coursera.org/professional-certificates/meta-front-end-developer",
        "img" : "/Blog/meta.svg",
        "descriptions" : [
            "Introduction to Front-End Development",
            "Programming with JavaScript",
            "Version Control",
            "HTML and CSS in depth",
            "React Basics",
            "Advanced React",
            "Principles of UI/UX Design",
            "Front-End Developer Capstone",
            "Coding Interview Preparation"
        ]      
    },
    "GoogleUXDesign": {
        "id": "GoogleUXDesign",
        "status" : "Active",
        "name" : "UX Design",
        "author" : "Google",
        "type" : "Professional Certificate",
        "url" : "https://www.coursera.org/professional-certificates/google-ux-design",
        "img" : "/Blog/google.svg",
        "descriptions" : [
            "Foundations of User Experience (UX) Design",
            "Start the UX Design Process: Empathize, Define, and Ideate",
            "Build Wireframes and Low-Fidelity Prototypes",
            "Conduct UX Research and Test Early Concepts",
            "Create High-Fidelity Designs and Prototypes in Figma",
            "Responsive Web Design in Adobe XD",
            "Design a User Experience for Social Good & Prepare for Jobs"
        ]       
    },
    "MetaBackendDeveloper": {
        "id": "MetaBackendDeveloper",
        "status" : "Planned",
        "name" : "Back-end Developer",
        "author" : "Meta",
        "type" : "Professional Certificate",
        "url" : "https://www.coursera.org/professional-certificates/meta-back-end-developer",
        "img" : "/Blog/meta.svg",
        "descriptions" : [
            "Introduction to Back-End Development",
            "Programming in Python",
            "Version Control",
            "Databases",
            "Django Web Framework",
            "APIs",
            "The Full Stack",
            "Cloud Computing",
            "Back-End Developer Capstone",
            "Coding Interview Preparation"
        ]      
    },
    "GoogleProjectManager": {
        "id": "GoogleProjectManager",
        "status" : "Planned",
        "name" : "Project Manager",
        "author" : "Google",
        "type" : "Professional Certificate",
        "url" : "https://www.coursera.org/professional-certificates/google-project-management",
        "img" : "/Blog/google.svg",
        "descriptions" : [
            "Foundations of Project Management",
            "Project Initiation: Starting a Successful Project",
            "Project Planning: Putting It All Together",
            "Project Execution: Running the Project",
            "gestion de projet agile",
            "Capstone: Applying Project Management in the Real World"
        ]       
    },
    "AWSCloudPractitionerEssentials": {
        "id": "AWSCloudPractitionerEssentials",
        "status" : "Planned",
        "name" : "AWS Cloud Practitioner Essentials",
        "author" : "AWS",
        "type" : "Courses",
        "url" : "https://www.coursera.org/learn/aws-cloud-practitioner-essentials",
        "img" : "/Blog/aws.svg",
        "descriptions" : [
            "Introduction to Amazon Web Services, Compute in the Cloud",
            "Global Infrastructure and Reliability, Networking",
            "Storage and Databases",
            "Security",
            "Monitoring and Analytics, Pricing and Support",
            "Migration and Innovation, The Cloud Journey",
            "AWS Certified Cloud Practitioner Basics"
        ]       
    },
    "AWSDevOps":{
        "id": "AWSDevOps",
        "status" : "Planned",
        "name" : "DevOps on AWS",
        "author" : "AWS",
        "type" : "Specializations",
        "url" : "https://www.coursera.org/specializations/aws-devops",
        "img" : "/Blog/aws.svg",
        "descriptions" : [
            "AWS Cloud Technical Essentials",
            "DevOps on AWS: Code, Build, and Test",
            "DevOps on AWS: Release and Deploy",
            "DevOps on AWS: Operate and Monitor"
        ]       
    }
};

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(certifications))));
}

exports.findById = (id) => {
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(certifications)).find(certification =>
        certification.id == id)
        )
    );
}
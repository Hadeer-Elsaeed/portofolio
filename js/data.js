// Portfolio data in base64 encoded format to add basic obfuscation
const portfolioData = {
    personal: btoa(JSON.stringify({
        name: "Hadeer Elsaeed",
        title: "Senior Software Engineer",
        description: "Software engineer with 5 years of experience in designing and developing efficient, scalable software solutions. Skilled in multiple programming languages, with a strong analytical mindset and a commitment to writing high-quality, maintainable code.",
        social: {
            github: "https://github.com/Hadeer-Elsaeed",
            linkedin: "https://linkedin.com/in/hadeer-elsaeed-65318218a"
        }
    })),
    
    experience: btoa(JSON.stringify([
        {
            title: "Senior Software Engineer at Trufla Technology",
            date: "11/2021 - Present",
            location: "Egypt-Canada",
            description: "Led development of Django-based applications, implementing features and optimizing performance. Architected scalable backend systems and mentored junior developers.",
            technologies: ["Django", "PostgreSQL", "AWS", "Python"]
        },
        {
            title: "Junior Software Engineer at Swira Designs",
            date: "10/2020 - 10/2021",
            location: "Egypt",
            description: "Built Testing Engine using Flask framework and AWS S3. Developed backend systems using Django and implemented ERPnext applications.",
            technologies: ["Flask", "Django", "AWS", "ERPnext"]
        },
        {
            title: "Open Source Contributions",
            description: "Python-keycloak Library Contributor\nImplemented new methods for authorized scopes and permissions management.",
            technologies: ["Python", "Keycloak", "OAuth", "Security"]
        }
    ])),

    skills: btoa(JSON.stringify({
        languages: ["Python", "TypeScript", "PHP", "Bash"],
        frameworks: ["Django", "Flask", "Laravel", "Node.js"],
        databases: ["MongoDB", "MySQL", "PostgreSQL"],
        cloudDevops: ["AWS", "Docker", "GitHub Actions", "keycloak", "Vault"],
        tools: ["Git", "Jira", "Postman"],
        OperatingSystems: ["Linux", "Windows"]
    })),

    education: btoa(JSON.stringify([
        {
            degree: "Bachelor of Engineering, Computer System Department",
            school: "Faculty Of Engineering Zagazig University",
            date: "2014 - 2019"
        },
        {
            degree: "Professional Diploma in Open Source Applications Development",
            date: "2019 - 2020"
        }
    ]))
};

// Function to decode and get data
function getPortfolioData(key) {
    try {
        return JSON.parse(atob(portfolioData[key]));
    } catch (e) {
        console.error('Error decoding data:', e);
        return null;
    }
}

// Expose only the getter function
window.getPortfolioData = getPortfolioData; 
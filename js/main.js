// Active navigation link highlighting
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Load personal info
    const personal = getPortfolioData('personal');
    if (personal) {
        document.querySelector('.hero h1').textContent = `Hi, I'm ${personal.name}`;
        document.querySelector('.hero .subtitle').textContent = personal.title;
        document.querySelector('.hero .description').textContent = personal.description;
        
        // Update social links
        const githubLink = document.querySelector('a[title="GitHub"]');
        const linkedinLink = document.querySelector('a[title="LinkedIn"]');
        if (githubLink) githubLink.href = personal.social.github;
        if (linkedinLink) linkedinLink.href = personal.social.linkedin;
    }

    // Load experience
    const experience = getPortfolioData('experience');
    if (experience) {
        const projectGrid = document.querySelector('.project-grid');
        projectGrid.innerHTML = ''; // Clear existing content
        
        experience.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.className = 'project-card';
            jobElement.innerHTML = `
                <div class="project-content">
                    <h3>${job.title}</h3>
                    ${job.date ? `<p class="project-date">${job.date}${job.location ? ` | ${job.location}` : ''}</p>` : ''}
                    <p>${job.description}</p>
                    <div class="project-tech">
                        ${job.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            projectGrid.appendChild(jobElement);
        });
    }

    // Load skills
    const skills = getPortfolioData('skills');
    if (skills) {
        const skillsGrid = document.querySelector('.skills-grid');
        skillsGrid.innerHTML = ''; // Clear existing content
        
        Object.entries(skills).forEach(([category, items]) => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'skill-category';
            categoryElement.innerHTML = `
                <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <ul>
                    ${items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
            skillsGrid.appendChild(categoryElement);
        });
    }

    // Load education
    const education = getPortfolioData('education');
    if (education) {
        const educationSection = document.querySelector('.education');
        educationSection.innerHTML = '<h3>Education</h3>';
        
        education.forEach(edu => {
            const eduElement = document.createElement('div');
            eduElement.innerHTML = `
                <p>${edu.degree}</p>
                ${edu.school ? `<p>${edu.school}</p>` : ''}
                <p>${edu.date}</p>
            `;
            educationSection.appendChild(eduElement);
        });
    }
}); 
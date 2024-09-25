document.addEventListener('DOMContentLoaded', () => {
    const jobs = [
        {
            "company": "Photosnap",
            "position": "Senior Frontend Developer",
            "location": "● Full Time",
            "skills": ["HTML", "CSS", "JavaScript"],
            "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSy7N3KQQeOWnQ9-vddNmB9FXbft4nIRZxQilC8ZFAlxU68fzbF",
            "tags": ["New!"]
        },
        {
            "company": "Manage",
            "position": "Fullstack Developer",
            "location": "● Remote",
            "skills": ["Python", "React"],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KU2k5nUw55aUpHrB5FdrJL7XGrWJq3K1nW_00gim9F8lC3ws",
            "tags": ["New!", "Featured"]
        },
        {
            "company": "Account",
            "position": "Junior Frontend Developer",
            "location": "● USA Only",
            "skills": ["JavaScript", "React", "Sass"],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnLU78g0Z-Td-rnN_U6g7pmnED_OX7yUkSB7j46D1H17RjmgX",
            "tags": ["New!", "Featured"]
        },
        {
            "company": "Loop Studios",
            "position": "Software Engineer",
            "location": "● Worldwide",
            "skills": ["Ruby", "Rails", "JavaScript"],
            "tags": ["New!", "Featured"]
        },
        {
            "company": "FaceIt",
            "position": "DevOps Engineer",
            "location": "● UK Only",
            "skills": ["Docker", "Kubernetes", "AWS"],
            "tags": ["New!", "Featured"]
        },
        {
            "company": "Airbnb",
            "position": "Backend Developer",
            "location": "● USA Only",
            "skills": ["Node.js", "Express", "MongoDB"],
            "tags": ["New!", "Featured"]
        },
        {
            "company": "Google",
            "position": "Mobile Developer",
            "location": "● Remote",
            "skills": ["Kotlin", "Swift", "Flutter"],
            "tags": ["New!", "Featured"]
        },
        {
            "company": "Spotify",
            "position": "UI/UX Designer",
            "location": "● Remote",
            "skills": ["Figma", "Sketch", "Adobe XD"],
            "tags": ["New!", "Featured"]
        },
        {
            "company": "Netflix",
            "position": "Frontend Developer",
            "location": "● Canada",
            "skills": ["HTML", "CSS", "React"],
            "tags": ["New!", "Featured"]
        },
        {
            "company": "Amazon",
            "position": "Cloud Engineer",
            "location": "● USA Only",
            "skills": ["AWS", "Azure", "Terraform"],
            "tags": ["New!", "Featured"]
        }
    ];

    const jobList = document.getElementById('jobList'); // Corrected selector to match HTML
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('searchButton');

    function displayJobs(jobs) {
        jobList.innerHTML = ''; // Clear previous listings
        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            jobCard.innerHTML = `
                <div class="job-header">
                    <div class="company-logo">
                        <img src="${job.image}" alt="${job.company} Logo">
                    </div>
                    <div class="company-info">
                        <h3>${job.company}</h3>
                    </div>
                </div>
                <div class="job-info">
                    <h2>${job.position}</h2>
                    <p>${job.location}</p>
                    <div class="tags">
                        ${job.tags ? job.tags.map(tag => `<span class="tags ${tag.toLowerCase()}">${tag}</span>`).join('') : ''}
                    </div>
                    <div class="skills">
                        ${job.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
                    </div>
                </div>
            `;
            jobList.appendChild(jobCard);
        });
    }

    displayJobs(jobs); // Display all jobs initially

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        const filteredJobs = jobs.filter(job =>
            job.company.toLowerCase().includes(query) ||
            job.skills.some(skill => skill.toLowerCase().includes(query))
        );
        displayJobs(filteredJobs); // Display filtered jobs
    });

    searchInput.addEventListener('input', () => {
        if (searchInput.value === '') {
            displayJobs(jobs); // Reset to display all jobs if input is empty
        }
    });
});

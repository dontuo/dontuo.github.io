function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'projects') {
        loadProjects();
    }
}

// Завантаження проектів з JSON
function loadProjects() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('project-container');
            container.innerHTML = ''; // Очищуємо перед завантаженням нових проектів

            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project-item';

                const img = document.createElement('img');
                img.src = project.image;
                projectElement.appendChild(img);

                const title = document.createElement('h3');
                title.textContent = project.name;
                projectElement.appendChild(title);

                const description = document.createElement('p');
                description.textContent = project.description;
                projectElement.appendChild(description);

                // Кнопка "Докладніше"
                const button = document.createElement('button');
                button.textContent = 'Докладніше';
                button.onclick = () => {
                    window.open(project.url, '_blank');
                };
                projectElement.appendChild(button);

                container.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
}


document.addEventListener("DOMContentLoaded", () => {
    showSection('about');
});

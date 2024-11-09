// Example TypeScript code for interaction
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Career Objective Section
    const careerObjectiveSection = document.getElementById('career-objective');
    const toggleObjectiveButton = document.createElement('button');
    toggleObjectiveButton.textContent = 'Toggle Career Objective';
    document.body.insertBefore(toggleObjectiveButton, careerObjectiveSection);

    toggleObjectiveButton.addEventListener('click', () => {
        if (careerObjectiveSection) {
            careerObjectiveSection.classList.toggle('hidden');
        }
    });

    // Toggle Skills Section
    const skillsSection = document.getElementById('skills');
    const toggleSkillsButton = document.createElement('button');
    toggleSkillsButton.textContent = 'Toggle Skills Section';
    document.body.insertBefore(toggleSkillsButton, skillsSection);

    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection) {
            skillsSection.classList.toggle('hidden');
        }
    });
});

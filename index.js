// Get all section elements
const sections = document.querySelectorAll('section');

// Function to handle smooth scrolling to a section
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Attach click event listeners to all navigation links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

// Function to handle hiding other sections when scrolling to a specific section
function hideOtherSections() {
    sections.forEach(section => {
        if (section.id !== window.location.hash.substring(1)) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}

// Add scroll event listener to hide other sections when scrolling to a specific section
window.addEventListener('scroll', hideOtherSections);

// Hide other sections initially
hideOtherSections();

/** @format */

//Elemets
const presentation = document.getElementById('presentation');
const tecnologies = document.getElementById('tecnologies');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

const sections = [presentation, tecnologies, projects, contact];

const State = {
  currentSection: 0,
};

const moveSection = (direction = "up") => {
  if (direction) {
    if (State.currentSection === sections.length - 1) State.currentSection = 0;
    else State.currentSection++;
  }
  else {
    if (State.currentSection === 0) State.currentSection = sections.length - 1;
    else State.currentSection--;
  }
};

window.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        moveSection("up");
        sections[State.currentSection].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
})
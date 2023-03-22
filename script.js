// #Mobile
const buttonswitch = document.getElementsByClassName('button_switch')[0];
const wayFinderlines = document.getElementsByClassName('navigation_options')[0];
const shadowedsurface = document.getElementsByClassName('shadowed_surface')[0];
const closeMobileButton = document.getElementsByClassName('closemob-table')[0];
const explorer = document.getElementsByClassName('explorer');[0];
  buttonswitch.addEventListener('click', () => {
  wayFinderlines.classList.toggle('active');
  shadowedsurface.classList.toggle('active');
  buttonswitch.classList.toggle('active');
  closeMobileButton.classList.toggle('active');
});
closeMobileButton.addEventListener('click', () => {
  wayFinderlines.classList.toggle('active');
  shadowedsurface.classList.toggle('active');
  buttonswitch.classList.toggle('active');
  closeMobileButton.classList.toggle('active');
});
for (let i = 0; i < explorer.length; i += 1) {
  explorer[i].addEventListener('click', () => {
    wayFinderlines.classList.toggle('active');
    shadowedsurface.classList.toggle('active');
    buttonswitch.classList.toggle('active');
    closeMobileButton.classList.toggle('active');
  });
}
// #Data
const projectsList = [
  {
    name: 'Project One',
    description: 'your description here.',
    technologies: ['language one', 'language two', 'language three', 'language four'],
    feturedImageMobile: 'mobilepeojectpreview.jpg',
    feauturedImageDesktop: 'desktopSnapshot.svg',
    livelink: 'https://www.google.com/',
    sourcelink: 'https://www.github.com/',
  },
  {
    name: 'Project Two',
    description: 'your description here',
    technologies: ['language one', 'language two', 'language three', 'language four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'Project Three',
    description: 'your description here',
    technologies: ['language one', 'language two', 'language three', 'language four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'Project Four',
    description: 'your description here',
    technologies: ['language one', 'language two', 'language three', 'language four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'Project Five',
    description: 'your description here',
    technologies: ['language one', 'language two', 'language three', 'language four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'Project Six',
    description: 'your description here',
    technologies: ['language one', 'language two', 'language three', 'language four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
];
// #Pattern
const patternPopUp = document.getElementsByClassName('patternholder')[0];
const coverupBg = document.getElementById('coverup');[0];
const liveL = document.getElementById('see-live');[0];
const sourceL = document.getElementById('see-source');[0];
let currentScrollPosition = window.scrollY;
function Showpattern(index) {

  const project = projectsList[index];
  currentScrollPosition = window.scrollY;
 
  patternPopUp.classList.toggle('active');
  coverupBg.classList.toggle('active');
  
  window.scrollTo(0, 0);
  patternPopUp.querySelector('h3').textContent = project.name;
  patternPopUp.querySelectorAll('.badge').forEach((badge, index) => {
    badge.textContent = project.technologies[index];
  });
  patternPopUp.querySelector('p').textContent = project.description;
  liveL.setAttribute('onclick', `window.location.href='${project.livelink}'`);
  sourceL.setAttribute('onclick', `window.location.href='${project.sourcelink}'`);
}
const projectiddesing = document.getElementById('iddesing');[0];
const projectsholder = document.querySelector('.projects');[0];
for (let i = 0; i < projectsList.length; i += 1) {
  const projectid = projectiddesing.content.cloneNode(true);
  const project = projectsList[i];
  projectid.querySelector('h3').textContent = project.name;
  projectid.querySelectorAll('.badge').forEach((badge, index) => {
    badge.textContent = project.technologies[index];
  });
  projectid.querySelector('.button').textContent = 'See Project';
  projectid.querySelector('.button').addEventListener('click', () => {
    Showpattern(i);
  });
  projectsholder.appendChild(projectid);
}
function Camouflagepattern() { // eslint-disable-line no-unused-vars
  patternPopUp.classList.toggle('active');
  coverupBg.classList.toggle('active');
  window.scrollTo(0, currentScrollPosition);
}
// #Formulary
const form = document.getElementsByClassName('message_form')[0];
const emailField = document.getElementById('email');
const setError = (message) => {
  const errorholder = form.querySelector('.error');
  errorholder.innerHTML = message;
  errorholder.classList.add('error');
};
const validateInputs = () => {
  const emailSubmission = emailField.value;
  if (!(emailSubmission === emailSubmission.toLowerCase())) {
    setError('Your email needs to be lowercase');
    emailField.classList.toggle('activeerror');
  } else if (emailSubmission === '') {
    setError('Your email can not be empty');
    emailField.classList.toggle('activeerror');
  } else {
    setError('');
    emailField.classList.toggle('activeerror');
    form.submit();
  }
};
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

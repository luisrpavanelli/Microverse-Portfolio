// #Mobile
const buttonswitch = document.getElementsByClassName('button_switch')[0];
const wayFinderlines = document.getElementsByClassName('navigation_options')[0];
const shadowedsurface = document.getElementsByClassName('shadowed_surface')[0];
const closeMobileButton = document.getElementsByClassName('closemob-table')[0];
const explorer = document.getElementsByClassName('explorer');
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
    description: 'Briefly introduce your project and its key features.',
    technologies: ['software one', 'software two', 'software three', 'software four'],
    feturedImageMobile: 'mobilepeojectpreview.jpg',
    feauturedImageDesktop: 'desktopSnapshot.svg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Project Two',
    description: 'Briefly introduce your project and its key features.',
    technologies: ['software one', 'software two', 'software three', 'software four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    sharepoint: '#',
    reference: '#',
  },
  {
    name: 'Project Three',
    description: 'Briefly introduce your project and its key features.',
    technologies: ['software one', 'software two', 'software three', 'software four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    sharepoint: '#',
    reference: '#',
  },
  {
    name: 'Project Four',
    description: 'Briefly introduce your project and its key features.',
    technologies: ['software one', 'software two', 'software three', 'software four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    sharepoint: '#',
    reference: '#',
  },
  {
    name: 'Project Five',
    description: 'Briefly introduce your project and its key features.',
    technologies: ['software one', 'software two', 'software three', 'software four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    sharepoint: '#',
    reference: '#',
  },
  {
    name: 'Project Six',
    description: 'Briefly introduce your project and its key features.',
    technologies: ['software one', 'software two', 'software three', 'software four'],
    feturedImageMobile: 'idplaceholder.png',
    feauturedImageDesktop: 'idplaceholder.png',
    sharepoint: '#',
    reference: '#',
  },
];
// #Pattern
const patternPopUp = document.getElementsByClassName('patternholder')[0];
const coverupBg = document.getElementById('coverup');
const shareP = document.getElementById('see-live');
const reference = document.getElementById('see-source');
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
  shareP.setAttribute('onclick', `window.location.href='${project.sharepoint}'`);
  reference.setAttribute('onclick', `window.location.href='${project.reference}'`);
}
const projectiddesing = document.getElementById('iddesing');
const projectsholder = document.querySelector('.projects');
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
const messageform = document.getElementsByClassName('message_form')[0];
const addressEmail = document.getElementById('address');
const setError = (message) => {
  const errorholder = messageform.querySelector('.error');
  errorholder.innerHTML = message;
  errorholder.classList.add('error');
};
const validateInputs = () => {
  const sendingEmail = addressEmail.value;
  if (!(sendingEmail === sendingEmail.toLowerCase())) {
    setError('Please ensure that your email address is in all lowercase letters.');
    addressEmail.classList.toggle('activeerror');
  } else if (sendingEmail === '') {
    setError('Please enter your email address, the field cannot be left blank.');
    addressEmail.classList.toggle('activeerror');
  } else {
    setError('');
    addressEmail.classList.toggle('activeerror');
    messageform.submit();
  }
};
messageform.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});
// Get references to the input fields LocalStorage
const inputFirstname = document.getElementById('firstname');
const inputLastname = document.getElementById('lastname');
const inputAddress = document.getElementById('address');
const inputFeedback = document.getElementById('feedback');
// Load any saved data from local storage
const savedData = JSON.parse(localStorage.getItem('formData'));
// If there is saved data, pre-fill the input fields
if (savedData) {
  inputFirstname.value = savedData.firstname;
  inputLastname.value = savedData.lastname;
  inputAddress.value = savedData.address;
  inputFeedback.value = savedData.feedback;
}
// Add event listeners to the input fields to save changes to local storage
inputFirstname.addEventListener('input', saveFormData);
inputLastname.addEventListener('input', saveFormData);
inputAddress.addEventListener('input', saveFormData);
inputFeedback.addEventListener('input', saveFormData);
// Function to save form data to local storage
function saveFormData() {
  const formData = {
    firstname: inputFirstname.value,
    lastname: inputLastname.value,
    address: inputAddress.value,
    feedback: inputFeedback.value
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}
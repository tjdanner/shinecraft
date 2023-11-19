const contactButton = document.getElementById('contact-button');
const endCTA = document.getElementById('end-cta');

const welcomeImage = document.getElementsByClassName('welcome-image');
const welcomeImageArray = Array.from(welcomeImage);
const serviceCard = document.getElementsByClassName('service-card');
const serviceCardArray = Array.from(serviceCard);

contactButton.addEventListener('click', () => {
  console.log('it works');
  endCTA.scrollIntoView({ behavior: 'smooth' });
});

welcomeImageArray.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.style.scale = '1.3';
    element.style.transition = '400ms';
  });
  element.addEventListener('mouseout', () => {
    element.style.scale = '';
  });
});

serviceCardArray.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.style.scale = '1.1';
    element.style.transition = '400ms';
  });
  element.addEventListener('mouseout', () => {
    element.style.scale = '';
  });
});

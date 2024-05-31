
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    distance: '10px',
    duration: 2700,
    reset: true
});

sr.reveal('.home-text', {delay:350, origin: 'left'});
sr.reveal('.home-img', {delay:350, origin: 'right'});
sr.reveal('.about-text', {delay:350, origin: 'left'});
sr.reveal('.about-img', {delay:350, origin: 'right'});
sr.reveal('.education', {delay:350, origin: 'top'});
sr.reveal('.skill', {delay:350, origin: 'top'});

sr.reveal('.project-heading', {delay:350, origin: 'top'});
sr.reveal('.project-content', {delay:350, origin: 'left'});
sr.reveal('.contact-image', {delay:350, origin: 'left'});
sr.reveal('.contact-form', {delay:350, origin: 'right'});





  (function() {
    emailjs.init('pLFNm0-WYzdsprfJm')
  })();


var form = document.getElementById('contact-form');

function sendMail(e){
  e.preventDefault();
 
  const serviceID = 'service_e1vzutx';
  const templateID = 'template_gwzjfh4';

  emailjs.sendForm(serviceID, templateID,this )
  .then(function() {
    alert('Email sent successfully!');
    this.form.name.value = '';
    this.form.email.value = '';
    this.form.phone.value = '';
    this.form.message.value = '';
  }).catch(function(err){
    console.log(err);
  })
}

form.addEventListener('submit', sendMail);
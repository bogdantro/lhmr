window.addEventListener("scroll", function(){
    const productSearch = document.getElementById('productSearch');
    productSearch.classList.toggle("sticky", window.scrollY > 55)
  })

window.addEventListener("scroll", function(){
    const quickLinks = document.getElementById('quickLinks');
    quickLinks.classList.toggle("sticky", window.scrollY > 333)
  })



function info(){
  const infoSec =  document.getElementById('infoSec');
  const reviewsSec =  document.getElementById('reviewsSec');
  const contactSec =  document.getElementById('contactSec');

  const infoQucikLink =  document.getElementById('infoQucikLink');
  const reviewsQucikLink =  document.getElementById('reviewsQucikLink');
  const contactQucikLink =  document.getElementById('contactQucikLink');

  window.scrollTo({ top: 150, behavior: 'smooth'});

  infoQucikLink.classList.add('active')
  reviewsQucikLink.classList.remove('active')
  contactQucikLink.classList.remove('active')
  
  infoSec.classList.add('active')
  infoSec.classList.remove('hidden')
  
  reviewsSec.classList.remove('active')
  contactSec.classList.remove('active')
}

function reviews(){
  const infoSec =  document.getElementById('infoSec');
  const reviewsSec =  document.getElementById('reviewsSec');
  const contactSec =  document.getElementById('contactSec');

  const infoQucikLink =  document.getElementById('infoQucikLink');
  const reviewsQucikLink =  document.getElementById('reviewsQucikLink');
  const contactQucikLink =  document.getElementById('contactQucikLink');

  window.scrollTo({ top: 150, behavior: 'smooth'});

  infoQucikLink.classList.remove('active')
  contactQucikLink.classList.remove('active')

  reviewsQucikLink.classList.add('active')

  infoSec.classList.remove('active')
  infoSec.classList.add('hidden')

  contactSec.classList.remove('active')
  contactSec.classList.add('hidden')

  reviewsSec.classList.add('active')
  reviewsSec.classList.remove('hidden')
}

function contact(){
  const infoSec =  document.getElementById('infoSec');
  const reviewsSec =  document.getElementById('reviewsSec');
  const contactSec =  document.getElementById('contactSec');

  const infoQucikLink =  document.getElementById('infoQucikLink');
  const reviewsQucikLink =  document.getElementById('reviewsQucikLink');
  const contactQucikLink =  document.getElementById('contactQucikLink');

  window.scrollTo({ top: 150, behavior: 'smooth'});

  infoQucikLink.classList.remove('active')
  reviewsQucikLink.classList.remove('active')
  
  contactQucikLink.classList.add('active')

  infoSec.classList.remove('active')
  infoSec.classList.add('hidden')

  reviewsSec.classList.remove('active')
  reviewsSec.classList.add('hidden')
  
  contactSec.classList.add('active')
  contactSec.classList.remove('hidden')
}
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

  const infoQucikLink =  document.getElementById('infoQucikLink');
  const reviewsQucikLink =  document.getElementById('reviewsQucikLink');

  window.scrollTo({ top: 150, behavior: 'smooth'});

  infoQucikLink.classList.add('active')
  reviewsQucikLink.classList.remove('active')
  
  infoSec.classList.add('active')
  infoSec.classList.remove('hidden')
  
  reviewsSec.classList.remove('active')

}

function reviews(){
  const infoSec =  document.getElementById('infoSec');
  const reviewsSec =  document.getElementById('reviewsSec');

  const infoQucikLink =  document.getElementById('infoQucikLink');
  const reviewsQucikLink =  document.getElementById('reviewsQucikLink');

  window.scrollTo({ top: 150, behavior: 'smooth'});

  infoQucikLink.classList.remove('active')
  reviewsQucikLink.classList.add('active')

  infoSec.classList.remove('active')
  infoSec.classList.add('hidden')

  reviewsSec.classList.add('active')
}
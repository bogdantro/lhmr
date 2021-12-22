// const cookieStorage = {
//     getItem: (key) => {
//         const cookies = document.cookie
//             .split(';')
//             .map(cookie => cookie.split('='))
//             .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
//         return cookies[key];
//     },
//     setItem: (key, value) => {
//         document.cookie = `${key}=${value}`;
//     },
// };

// const storageType = cookieStorage;
// const consentPropertyName = 'webiser';

// const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
// const saveToStorage = () => storageType.setItem(consentPropertyName, true);

// window.onload = () => {
//     const consentPopup = document.getElementById('popup');
//     const acceptBtn = document.getElementById('accept');


//     const acceptFn = event => {
//         saveToStorage(storageType);
//         consentPopup.classList.add('hidden')
//     };
    
//     acceptBtn.addEventListener('click', acceptFn);
    
//     if (shouldShowPopup(storageType)) {
//         setTimeout(() => {
//             consentPopup.classList.remove('hidden')
//         }, 3000);
//     }
// };

$.ajax({
    type: "GET",
    url: "/",
    success: function (response){
        document.getElementById('homeLoader').classList.add('hidden');
        console.log('Ok');
    },
    error: function(er){
      console.log('Not ok');  
    },
})

window.addEventListener("scroll", function(){
    const backToTop = document.getElementById('backToTop');
    backToTop.classList.toggle("active", window.scrollY > 1200)
    // backToTop.classList.toggle("active", window.scrollY > 500)
})

function backToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth'});
}


function cover(){
    const coverContent = document.getElementById('coverContent');

    coverContent.classList.add('active')
}
    
window.onload=cover();

$(window).scroll(function() {
    const services = document.getElementById('services');
    var hT = $('#services').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+260-wH)){
        services.classList.add('active');
    }
 });

 $(window).scroll(function() {
    const productHomePage = document.getElementById('productHomePage');
    var hT = $('#productHomePage').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+300-wH)){
        productHomePage.classList.add('active');
    }
 });

 $(window).scroll(function() {
    const info = document.getElementById('info');
    var hT = $('#info').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+300-wH)){
        info.classList.add('active');
    }
 });

 $(window).scroll(function() {
    const info = document.getElementById('orderNow');
    var hT = $('#orderNow').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+280-wH)){
        info.classList.add('active');
    }
 });

 
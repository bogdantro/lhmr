const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`;
    },
};

const storageType = cookieStorage;
const consentPropertyName = 'webiser';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    const consentPopup = document.getElementById('popup');
    const acceptBtn = document.getElementById('accept');

    const coverContent = document.getElementById('coverContent');

    coverContent.classList.add('active')
    
    
    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden')
        document.getElementById('popupCircleBackground').classList.remove('active');
    };
    
    acceptBtn.addEventListener('click', acceptFn);
    
    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
            document.getElementById('popupCircleBackground').classList.add('active');
        }, 6000);
    }
};

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
    backToTop.classList.toggle("active", window.scrollY > 2000)
})

function backToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth'});
}


window.addEventListener("scroll", function(){
    const bottomNav = document.getElementById('bottomNav');
    bottomNav.classList.toggle("active", window.scrollY > 1200)
})



window.addEventListener("scroll", function(){
    const coverContent = document.getElementById('coverContent');
    coverContent.classList.toggle("hide", window.scrollY > 200)
})


    



$(window).scroll(function() {
    const benefits = document.getElementById('benefits');
    var hT = $('#benefits').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+80-wH)){
        benefits.classList.add('active');
    }
 });

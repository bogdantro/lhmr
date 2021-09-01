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
// const consentPropertyName = 'stellcare';

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

window.onload = function () {
    setTimeout(function(){
        document.getElementById('coverText2').classList.add('active')
    }, 500)
};

var prev_handler = window.onload;
window.onload = function () {
    if (prev_handler) {
        prev_handler();
    }
    setTimeout(function(){
        const hamburger = document.getElementById('hamburger');
        const allContentArea = document.getElementById('allContentArea');
        const html = document.querySelector("html");
        const body = document.body;
        const logo = document.getElementById('logo');
        
        document.getElementById('myAccountIcon').style.filter = 'brightness(40%)';
        document.getElementById('loginORSignUp').classList.add('active')
          html.style.overflow = 'hidden'
          body.style.overflow = 'hidden'
          hamburger.style.pointerEvents = 'none'
          hamburger.style.filter = 'brightness(40%)'
          logo.style.pointerEvents = 'none'
          logo.style.filter = 'brightness(40%)'      
          allContentArea.style.filter = 'brightness(40%)';
    }, 10000)
};


$(window).scroll(function() {
    const services = document.getElementById('services');
    var hT = $('#services').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+360-wH)){
        services.classList.add('active');
    }
 });

function prices(){
    const scrollDiv = document.getElementById("productHomePage").offsetTop;
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');
    const allContentArea = document.getElementById('allContentArea');
    const html = document.querySelector("html");
    const body = document.body;
  
    window.scrollTo({ top: scrollDiv-60, behavior: 'smooth'});
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
    sidebar.classList.remove('active')  
    hamburger.classList.remove('click')  
    sidebarLi.classList.remove('active')  
    navbar.classList.remove('menu-active')  
    allContentArea.style.filter = 'brightness(100%)';
}

function about(){
    const scrollDiv = document.getElementById("aboutUs").offsetTop;
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');
    const allContentArea = document.getElementById('allContentArea');
    const html = document.querySelector("html");
    const body = document.body;
  
    window.scrollTo({ top: scrollDiv-60, behavior: 'smooth'});
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
    sidebar.classList.remove('active')  
    hamburger.classList.remove('click')  
    sidebarLi.classList.remove('active')  
    navbar.classList.remove('menu-active')  
    allContentArea.style.filter = 'brightness(100%)';
}

function contact(){
    const scrollDiv = document.getElementById("contactUs").offsetTop;
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');
    const allContentArea = document.getElementById('allContentArea');
    const html = document.querySelector("html");
    const body = document.body;
  
    window.scrollTo({ top: scrollDiv-60, behavior: 'smooth'});
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
    sidebar.classList.remove('active')  
    hamburger.classList.remove('click')  
    sidebarLi.classList.remove('active')  
    navbar.classList.remove('menu-active')  
    allContentArea.style.filter = 'brightness(100%)';
}

function frontend(){
    const scrollDiv = document.getElementById("frontend").offsetTop;
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');
    const allContentArea = document.getElementById('allContentArea');
    const html = document.querySelector("html");
    const body = document.body;
  
    window.scrollTo({ top: scrollDiv-60, behavior: 'smooth'});
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
    sidebar.classList.remove('active')  
    hamburger.classList.remove('click')  
    sidebarLi.classList.remove('active')  
    navbar.classList.remove('menu-active')  
    allContentArea.style.filter = 'brightness(100%)';
}

function html(){
    const scrollDiv = document.getElementById("html").offsetTop;  
    window.scrollTo({ top: scrollDiv-60, behavior: 'smooth'});
}
function css(){
    const scrollDiv = document.getElementById("css").offsetTop;  
    window.scrollTo({ top: scrollDiv-60, behavior: 'smooth'});
}
function javascript(){
    const scrollDiv = document.getElementById("javascript").offsetTop;  
    window.scrollTo({ top: scrollDiv-60, behavior: 'smooth'});
}



function aboutUsReadMore(){
    document.getElementById('secondText').style.display = 'block';
    document.getElementById('firstText').style.display = 'none';
    document.getElementById('opacity0').style.opacity = '0.5';
    document.getElementById('readMore').style.display = 'none';
}


function servicesReadMore1(){
    const firstText = document.getElementById('servicesSecondText1');
    if (window.getComputedStyle(firstText ,null).getPropertyValue("display") == 'none'){  
    firstText.style.display = 'block';
    document.getElementById('readMoreServices1').classList.add('active')
    document.getElementById('readMoreServices1').innerHTML = "Lukk";
    } else{
        firstText.style.display = 'none';
        document.getElementById('readMoreServices1').classList.remove('active')
        document.getElementById('readMoreServices1').innerHTML = "Les mer";
    }
}
function servicesReadMore2(){
    const firstText = document.getElementById('servicesSecondText2');
    if (window.getComputedStyle(firstText ,null).getPropertyValue("display") == 'none'){  
    firstText.style.display = 'block';
    document.getElementById('readMoreServices2').classList.add('active')
    document.getElementById('readMoreServices2').innerHTML = "Lukk";
    } else{
        firstText.style.display = 'none';
        document.getElementById('readMoreServices2').classList.remove('active')
        document.getElementById('readMoreServices2').innerHTML = "Les mer";
    }
}
function servicesReadMore3(){
    const firstText = document.getElementById('servicesSecondText3');
    if (window.getComputedStyle(firstText ,null).getPropertyValue("display") == 'none'){  
    firstText.style.display = 'block';
    document.getElementById('readMoreServices3').classList.add('active')
    document.getElementById('readMoreServices3').innerHTML = "Lukk";
    } else{
        firstText.style.display = 'none';
        document.getElementById('readMoreServices3').classList.remove('active')
        document.getElementById('readMoreServices3').innerHTML = "Les mer";
    }
}
function servicesReadMore4(){
    const firstText = document.getElementById('servicesSecondText4');
    if (window.getComputedStyle(firstText ,null).getPropertyValue("display") == 'none'){  
    firstText.style.display = 'block';
    document.getElementById('readMoreServices4').classList.add('active')
    document.getElementById('readMoreServices4').innerHTML = "Lukk";
    } else{
        firstText.style.display = 'none';
        document.getElementById('readMoreServices4').classList.remove('active')
        document.getElementById('readMoreServices4').innerHTML = "Les mer";
    }
}


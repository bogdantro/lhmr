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



$(window).scroll(function() {
    const services = document.getElementById('services');
    var hT = $('#services').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+360-wH)){
        services.classList.add('active');
    }
 });

$(window).scroll(function() {
    const services = document.getElementById('services');
    var hT = $('#services').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+360-wH)){
        services.classList.add('active');
    }
 });

 $(window).scroll(function() {
    const productHomePage = document.getElementById('productHomePage');
    var hT = $('#productHomePage').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+360-wH)){
        productHomePage.classList.add('active');
    }
 });

 $(window).scroll(function() {
    const info = document.getElementById('info');
    var hT = $('#info').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+360-wH)){
        info.classList.add('active');
    }
 });

 $(window).scroll(function() {
    const info = document.getElementById('contactUs');
    var hT = $('#contactUs').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+360-wH)){
        info.classList.add('active');
    }
 });
 
 function prices(){
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');
    const allContentArea = document.getElementById('allContentArea');
    const html = document.querySelector("html");
    const body = document.body;
    
    window.location.href = "#productScrollTo";
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
    sidebar.classList.remove('active')  
    hamburger.classList.remove('click')  
    sidebarLi.classList.remove('active')  
    navbar.classList.remove('menu-active')  
    allContentArea.style.filter = 'brightness(100%)';
}
 function info(){
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');
    const allContentArea = document.getElementById('allContentArea');
    const html = document.querySelector("html");
    const body = document.body;
    
    window.location.href = "#proccessScrollTo";
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
    sidebar.classList.remove('active')  
    hamburger.classList.remove('click')  
    sidebarLi.classList.remove('active')  
    navbar.classList.remove('menu-active')  
    allContentArea.style.filter = 'brightness(100%)';
}
 function contact(){
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');
    const allContentArea = document.getElementById('allContentArea');
    const html = document.querySelector("html");
    const body = document.body;
    
    window.location.href = "#contactScrollTo";
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
    sidebar.classList.remove('active')  
    hamburger.classList.remove('click')  
    sidebarLi.classList.remove('active')  
    navbar.classList.remove('menu-active')  
    allContentArea.style.filter = 'brightness(100%)';
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


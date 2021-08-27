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

function addToCartHomePage(){
    document.getElementById('cartNav').classList.add('active')
}

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


window.onload = () =>{
    const coverTxt = document.getElementById('coverTxt');
    const coverBtn = document.getElementById('coverBtn');
    setTimeout(function(){
        coverTxt.style.opacity = '1';
        coverTxt.style.top = '20px';
    }, 1000)
    setTimeout(function(){
        coverBtn.style.opacity = '1';
    }, 2500)
}


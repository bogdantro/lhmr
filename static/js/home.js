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
    document.getElementById('addToCartOverlay').classList.add('active')
}

function pricesHome(){
    location.href = "#";
    location.href = "#productHomePage";
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


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
    backToTop.classList.toggle("active", window.scrollY > 4000)
})

function backToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth'});
}


// PRODUCTS
function smallFunc(){
    const small = document.getElementById('small');
    const middle = document.getElementById('middle');
    const big = document.getElementById('big');
    
    small.classList.add('active')
    small.classList.remove('unactive')

    middle.classList.remove('active')
    middle.classList.add('unactive')

    big.classList.remove('active')
    big.classList.add('unactive')
}
function middleFunc(){
    const small = document.getElementById('small');
    const middle = document.getElementById('middle');
    const big = document.getElementById('big');
    
    middle.classList.add('active')
    middle.classList.remove('unactive')

    small.classList.remove('active')
    small.classList.add('unactive')


    big.classList.remove('active')
    big.classList.add('unactive')
}
function bigFunc(){
    const small = document.getElementById('small');
    const middle = document.getElementById('middle');
    const big = document.getElementById('big');
    
    big.classList.add('active')
    big.classList.remove('unactive')

    middle.classList.remove('active')
    middle.classList.add('unactive')

    small.classList.remove('active')
    small.classList.add('unactive')
}

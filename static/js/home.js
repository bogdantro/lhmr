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
    const blackOverlay = document.getElementById('blackOverlay');

    
    
    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden')
        blackOverlay.classList.remove('show');
    };
    
    acceptBtn.addEventListener('click', acceptFn);
    
    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
            blackOverlay.classList.add('show');
        }, 700);
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

    const productIsSmall = document.getElementById('productIsSmall');
    const productIsMiddle = document.getElementById('productIsMiddle');
    const productIsBig = document.getElementById('productIsBig');
    
    setTimeout(() => {
        small.classList.add('click')
    }, 70);
    setTimeout(() => {
        small.classList.remove('click')
    }, 180);

    setTimeout(() => {
        productIsSmall.classList.remove('scale-')
    }, 100);

    
    small.classList.add('active')
    small.classList.remove('unactive')

    middle.classList.remove('active')
    middle.classList.add('unactive')

    big.classList.remove('active')
    big.classList.add('unactive')

    productIsSmall.classList.remove('active')
    productIsMiddle.classList.remove('active')
    productIsBig.classList.remove('active')

    productIsMiddle.classList.remove('scale')
    productIsBig.classList.remove('scale')
}
function middleFunc(){
    const small = document.getElementById('small');
    const middle = document.getElementById('middle');
    const big = document.getElementById('big');

    const productIsSmall = document.getElementById('productIsSmall');
    const productIsMiddle = document.getElementById('productIsMiddle');
    const productIsBig = document.getElementById('productIsBig');

    setTimeout(() => {
        middle.classList.add('click')
    }, 70);
    setTimeout(() => {
        middle.classList.remove('click')
    }, 180);
    
    setTimeout(() => {
        productIsMiddle.classList.add('scale')
    }, 100);

    middle.classList.add('active')
    middle.classList.remove('unactive')

    small.classList.remove('active')
    small.classList.add('unactive')


    big.classList.remove('active')
    big.classList.add('unactive')

    productIsSmall.classList.add('active')
    productIsMiddle.classList.add('active')
    productIsBig.classList.remove('active')

    productIsSmall.classList.remove('scale')
    productIsSmall.classList.add('scale-')
    productIsBig.classList.remove('scale')
}
function bigFunc(){
    const small = document.getElementById('small');
    const middle = document.getElementById('middle');
    const big = document.getElementById('big');

    const productIsSmall = document.getElementById('productIsSmall');
    const productIsMiddle = document.getElementById('productIsMiddle');
    const productIsBig = document.getElementById('productIsBig');

    setTimeout(() => {
        big.classList.add('click')
    }, 70);
    setTimeout(() => {
        big.classList.remove('click')
    }, 180);

    setTimeout(() => {
        productIsBig.classList.add('scale')
    }, 100);
    
    big.classList.add('active')
    big.classList.remove('unactive')

    middle.classList.remove('active')
    middle.classList.add('unactive')

    small.classList.remove('active')
    small.classList.add('unactive')

    productIsSmall.classList.add('active')
    productIsMiddle.classList.remove('active')
    productIsBig.classList.add('active')

    productIsSmall.classList.remove('scale')
    productIsSmall.classList.add('scale-')
    productIsMiddle.classList.remove('scale')
}

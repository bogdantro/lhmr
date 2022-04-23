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
    backToTop.classList.toggle("active", window.scrollY > 2800)
})

function backToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth'});
}


function ecoScroll(){
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');

    const productChoose = document.getElementById('chooseTypeOfProductFlex');
    const ecoChoose = document.getElementById('chooseTypeOfProductEcoFlex');
    const persChoose = document.getElementById('chooseTypeOfProductPersFlex');
    const blogChoose = document.getElementById('chooseTypeOfProductBlogFlex');

    const productIsSmall = document.getElementById('productIsSmall');

    productChoose.classList.add('hide')
    ecoChoose.classList.add('show')
    blogChoose.classList.remove('show')
    persChoose.classList.remove('show')

    productIsSmall.classList.add('active')
    setTimeout(() => {
        productIsSmall.classList.add('scale')
    }, 40);
  
    navbar.classList.remove('menu') 
    hamburger.classList.remove('click')  
    sidebar.classList.remove('active')
    sidebarLi.classList.remove('active')
    logo.classList.remove('menu-click')
  
    setTimeout(function(){
      window.location.href='#prices';
    }, 50);
  }
function blogScroll(){
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');

    const productChoose = document.getElementById('chooseTypeOfProductFlex');
    const blogChoose = document.getElementById('chooseTypeOfProductBlogFlex');
    const ecoChoose = document.getElementById('chooseTypeOfProductEcoFlex');
    const persChoose = document.getElementById('chooseTypeOfProductPersFlex');


    productChoose.classList.add('hide')
    blogChoose.classList.add('show')
    ecoChoose.classList.remove('show')
    persChoose.classList.remove('show')
  
    navbar.classList.remove('menu') 
    hamburger.classList.remove('click')  
    sidebar.classList.remove('active')
    sidebarLi.classList.remove('active')
    logo.classList.remove('menu-click')
  
    setTimeout(function(){
      window.location.href='#prices';
    }, 50);
  }
function persScroll(){
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebarLi = document.getElementById('sidebarLi');

    const productChoose = document.getElementById('chooseTypeOfProductFlex');
    const persChoose = document.getElementById('chooseTypeOfProductPersFlex');
    const blogChoose = document.getElementById('chooseTypeOfProductBlogFlex');
    const ecoChoose = document.getElementById('chooseTypeOfProductEcoFlex');

    productChoose.classList.add('hide')
    persChoose.classList.add('show')
    blogChoose.classList.remove('show')
    ecoChoose.classList.remove('show')
  
    navbar.classList.remove('menu') 
    hamburger.classList.remove('click')  
    sidebar.classList.remove('active')
    sidebarLi.classList.remove('active')
    logo.classList.remove('menu-click')
  
    setTimeout(function(){
      window.location.href='#prices';
    }, 50);
  }





// PRODUCTS
// ECO
function ecoShowFunc(){
    const productChoose = document.getElementById('chooseTypeOfProductFlex');
    const ecoChoose = document.getElementById('chooseTypeOfProductEcoFlex');

    const productIsSmall = document.getElementById('productIsSmall');
    const productIsMiddle = document.getElementById('productIsMiddle');
    const productIsBig = document.getElementById('productIsBig');

    productChoose.classList.add('hide')
    ecoChoose.classList.add('show')

    productIsSmall.classList.add('active')
    setTimeout(() => {
        productIsSmall.classList.add('scale')
    }, 40);
}
function ecoShowFuncClose(){
    const productChoose = document.getElementById('chooseTypeOfProductFlex');
    const ecoChoose = document.getElementById('chooseTypeOfProductEcoFlex');

    const small = document.getElementById('small');
    const middle = document.getElementById('middle');
    const big = document.getElementById('big');

    const productIsSmall = document.getElementById('productIsSmall');
    const productIsMiddle = document.getElementById('productIsMiddle');
    const productIsBig = document.getElementById('productIsBig');


    productChoose.classList.remove('hide')
    ecoChoose.classList.remove('show')

    productIsSmall.classList.remove('active')
    productIsSmall.classList.remove('scale')

    productIsMiddle.classList.remove('active')
    productIsMiddle.classList.remove('scale')

    productIsBig.classList.remove('active')
    productIsBig.classList.remove('scale')

    small.classList.add('active')
    small.classList.remove('unactive')

    middle.classList.remove('active')
    middle.classList.add('unactive')

    big.classList.remove('active')
    big.classList.add('unactive')
}
// BLOG
function blogShowFunc(){
    const productChoose = document.getElementById('chooseTypeOfProductFlex');
    const blogChoose = document.getElementById('chooseTypeOfProductBlogFlex');

    const productIsBlog = document.getElementById('productIsBlog')

    productChoose.classList.add('hide')
    blogChoose.classList.add('show')

    productIsBlog.classList.add('active')
    setTimeout(() => {
        productIsBlog.classList.add('scale')
    }, 40);
}
function blogShowFuncClose(){
    const productChoose = document.getElementById('chooseTypeOfProductFlex');
    const blogChoose = document.getElementById('chooseTypeOfProductBlogFlex');

    const productIsBlog = document.getElementById('productIsBlog')

    productChoose.classList.remove('hide')
    blogChoose.classList.remove('show')

    productIsBlog.classList.remove('active')
    productIsBlog.classList.remove('scale')
}
// PERS
function persShowFunc(){
    const productChoose = document.getElementById('chooseTypeOfProductFlex');
    const persChoose = document.getElementById('chooseTypeOfProductPersFlex');
    const productIsPers = document.getElementById('productIsPers')

    productChoose.classList.add('hide')
    persChoose.classList.add('show')

    productIsPers.classList.add('active')
    setTimeout(() => {
        productIsPers.classList.add('scale')
    }, 40);
}
function persShowFuncClose(){
    const productChoose = document.getElementById('chooseTypeOfProductFlex');
    const persChoose = document.getElementById('chooseTypeOfProductPersFlex');
    const productIsPers = document.getElementById('productIsPers')

    productChoose.classList.remove('hide')
    persChoose.classList.remove('show')

    productIsPers.classList.remove('active')
    productIsPers.classList.remove('scale')
}


// PRODUCTS BLOG
// PRODUCTS PERS


// PRODUCTS ECO
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
        productIsSmall.classList.add('scale')
    }, 40);

    
    small.classList.add('active')
    small.classList.remove('unactive')

    middle.classList.remove('active')
    middle.classList.add('unactive')

    big.classList.remove('active')
    big.classList.add('unactive')

    productIsSmall.classList.add('active')
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
    }, 40);

    middle.classList.add('active')
    middle.classList.remove('unactive')

    small.classList.remove('active')
    small.classList.add('unactive')


    big.classList.remove('active')
    big.classList.add('unactive')

    productIsSmall.classList.remove('active')
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

    productIsSmall.classList.remove('active')
    productIsMiddle.classList.remove('active')
    productIsBig.classList.add('active')

    productIsSmall.classList.remove('scale')
    productIsSmall.classList.add('scale-')
    productIsMiddle.classList.remove('scale')
}

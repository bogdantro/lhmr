function menu(){
  const sidebar = document.getElementById('sidebar');
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const sidebarLi = document.getElementById('sidebarLi');
  const allContentArea = document.getElementById('allContentArea');
  const html = document.querySelector("html");
  const body = document.body;
  if (window.getComputedStyle(sidebar,null).getPropertyValue("pointer-events") == 'none'){  
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    sidebar.classList.add('active')  
    hamburger.classList.add('click')  
    sidebarLi.classList.add('active')  
    navbar.classList.add('menu-active')  
    allContentArea.style.transition = '.5s';
    document.getElementById('myAccountIcon').style.pointerEvents = 'none';
    setTimeout(function(){
      allContentArea.style.filter = 'brightness(50%)';
    }, 100)
  } else{
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
    sidebar.classList.remove('active')  
    hamburger.classList.remove('click')  
    sidebarLi.classList.remove('active')  
    navbar.classList.remove('menu-active')  
    allContentArea.style.filter = 'brightness(100%)';
    document.getElementById('myAccountIcon').style.pointerEvents = 'visible';
  }
};

window.addEventListener("scroll", function(){
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle("sticky", window.scrollY > 1)
})

function signUpORLogin(){
  const hamburger = document.getElementById('hamburger');
  const logo = document.getElementById('logo');
  const allContentArea = document.getElementById('allContentArea');
  const html = document.querySelector("html");
  const body = document.body;
  const makeOrder = document.getElementById('makeOrder');
  const navbar = document.getElementById('navbar');

  
  document.getElementById('loginORSignUp').classList.add('active')
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    hamburger.style.pointerEvents = 'none'
    logo.style.pointerEvents = 'none'
    makeOrder.style.pointerEvents = 'none'
    allContentArea.style.filter = 'brightness(40%)';
    navbar.classList.add("sticky")
}
function signUpORLoginBack(){
  const hamburger = document.getElementById('hamburger');
  const allContentArea = document.getElementById('allContentArea');
  const html = document.querySelector("html");
  const body = document.body;
  const navbar = document.getElementById('navbar');
  const makeOrder = document.getElementById('makeOrder');
  const logo = document.getElementById('logo');

  
  document.getElementById('loginORSignUp').classList.remove('active')
  document.getElementById('myAccountIcon').style.pointerEvents = 'visible';
  document.getElementById('myAccountIcon').style.filter = 'brightness(100%)';
    html.style.overflow = 'unset';
    body.style.overflow = 'unset';
    hamburger.style.pointerEvents = 'visible';  
    hamburger.style.filter = 'brightness(100%)'
    logo.style.pointerEvents = 'visible'
    logo.style.filter = 'brightness(100%)'
    makeOrder.style.pointerEvents = 'visible'
    makeOrder.style.filter = 'brightness(100%)'
    allContentArea.style.filter = 'brightness(100%)';
    navbar.classList.toggle("sticky", window.scrollY > 1)
}

function myaccount(){  
  document.getElementById('myAccount').classList.add('active')
  document.getElementById('myAccountIcon').style.pointerEvents = 'none';
  document.getElementById('choose').style.display = 'none';
}
function myAccountBack(){  
  document.getElementById('myAccount').classList.remove('active')
  document.getElementById('choose').style.display = 'block';
}

function login(){  
  document.getElementById('loginForm').classList.add('active')
  document.getElementById('myAccountIcon').style.pointerEvents = 'none';
  document.getElementById('choose').style.display = 'none';
}
function loginBack(){
  document.getElementById('choose').style.display = 'block';
  document.getElementById('loginForm').classList.remove('active')
}

function signup(){  
  document.getElementById('signUpForm').classList.add('active')
  document.getElementById('myAccountIcon').style.pointerEvents = 'none';
  document.getElementById('choose').style.display = 'none';
}
function signUpBack(){
  document.getElementById('choose').style.display = 'block';
  document.getElementById('signUpForm').classList.remove('active')
}


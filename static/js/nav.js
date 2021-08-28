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
    allContentArea.style.filter = 'brightness(50%)';
  } else{
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
    sidebar.classList.remove('active')  
    hamburger.classList.remove('click')  
    sidebarLi.classList.remove('active')  
    navbar.classList.remove('menu-active')  
    allContentArea.style.filter = 'brightness(100%)';
  }
};

window.addEventListener("scroll", function(){
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle("sticky", window.scrollY > 1)
})

function signUpORLogin(){
  const hamburger = document.getElementById('hamburger');
  const allContentArea = document.getElementById('allContentArea');
  const html = document.querySelector("html");
  const body = document.body;
  
  document.getElementById('loginORSignUp').classList.add('active')
  document.getElementById('logo').style.pointerEvents = 'none';
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    hamburger.style.pointerEvents = 'none'
    allContentArea.style.filter = 'brightness(50%)';
}
function signUpORLoginBack(){
  const hamburger = document.getElementById('hamburger');
  const allContentArea = document.getElementById('allContentArea');
  const html = document.querySelector("html");
  const body = document.body;
  
  document.getElementById('loginORSignUp').classList.remove('active')
  document.getElementById('logo').style.pointerEvents = 'visible';
  document.getElementById('myAccount').style.pointerEvents = 'visible';
    html.style.overflow = 'unset';
    body.style.overflow = 'unset';
    hamburger.style.pointerEvents = 'visible';  
    allContentArea.style.filter = 'brightness(100%)';
}
function signup(){  
  document.getElementById('signUpForm').classList.add('active')
  document.getElementById('logo').style.pointerEvents = 'none';
  document.getElementById('myAccount').style.pointerEvents = 'none';
  document.getElementById('choose').style.display = 'none';
}

function signUpBack(){

  document.getElementById('choose').style.display = 'block';
  document.getElementById('signUpForm').classList.remove('active')
}

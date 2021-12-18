window.addEventListener("scroll", function(){
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle("sticky", window.scrollY > 1)
})

// MENU
function menu(){
  const sidebar = document.getElementById('sidebar');
  const logo = document.getElementById('logo');
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const sidebarLi = document.getElementById('sidebarLi');
  const background = document.getElementById('sidebarCircleBackground');
  const backToTop = document.getElementById('backToTop');
  const html = document.querySelector("html");
  const body = document.body;

  if (window.getComputedStyle(sidebar,null).getPropertyValue("opacity") == '0'){
    hamburger.classList.add('click')  
    sidebar.classList.add('active')
    sidebarLi.classList.add('active')
    background.classList.add('active')
    backToTop.classList.add('menu-active')
    logo.classList.add('menu-click')
  } else{
    setTimeout(function(){ 
      hamburger.classList.remove('click')  
    }, 1000);
    sidebar.classList.remove('active')
    sidebarLi.classList.remove('active')
    background.classList.remove('active')
    logo.classList.remove('menu-click')
    setTimeout(function(){
      backToTop.classList.remove('menu-active')
    }, 900);
  }  
};
// ACCOUNT LOGIN/SIGNUP
function myaccount(){
  const user = document.getElementById('myAccountIcon');
  const loginORSignUp = document.getElementById('loginORSignUp');

  if (window.getComputedStyle(user,null).getPropertyValue("position") == 'absolute'){
    user.classList.add('click')
    loginORSignUp.classList.add('active')
  } else{
    user.classList.remove('click')
    loginORSignUp.classList.remove('active')  
  }
};
// ACCOUNT LOGIN/SIGNUP BACK
function myaccount_back(){
  const user = document.getElementById('myAccountIcon');
  const loginORSignUp = document.getElementById('loginORSignUp');
  
  user.classList.remove('click')
  loginORSignUp.classList.remove('active')
};
// ACCOUNT LOGIN
function login(){
  document.getElementById('loginForm').classList.add('active')
  document.getElementById('choose').classList.add('hidden')
}
// ACCOUNT LOGIN BACK
function loginBack(){
  document.getElementById('loginForm').classList.remove('active')
  document.getElementById('choose').classList.remove('hidden')
}
// ACCOUNT SIGNUP
function signup(){
  document.getElementById('signUpForm').classList.add('active')
  document.getElementById('choose').classList.add('hidden')
}
// ACCOUNT SIGNUP BACK
function signUpBack(){
  document.getElementById('signUpForm').classList.remove('active')
  document.getElementById('choose').classList.remove('hidden')
}
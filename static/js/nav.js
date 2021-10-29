window.addEventListener("scroll", function(){
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle("sticky", window.scrollY > 1)
})


function menu(){
  const sidebar = document.getElementById('sidebar');
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const sidebarLi = document.getElementById('sidebarLi');
  const background = document.getElementById('sidebarCircleBackground');
  const html = document.querySelector("html");
  const body = document.body;

  if (window.getComputedStyle(sidebar,null).getPropertyValue("opacity") == '0'){
    hamburger.classList.add('click')  
    sidebar.classList.add('active')
    sidebarLi.classList.add('active')
    background.classList.add('active')
  } else{
    setTimeout(function(){ 
      hamburger.classList.remove('click')  
    }, 1000);
    sidebar.classList.remove('active')
    sidebarLi.classList.remove('active')
    background.classList.remove('active')
  }  
};

function myaccount(){
  const user = document.getElementById('myAccountIcon');
  const loginORSignUp = document.getElementById('loginORSignUp');
  
  user.classList.add('click')
  loginORSignUp.classList.add('active')
};

function myaccount_back(){
  const user = document.getElementById('myAccountIcon');
  const loginORSignUp = document.getElementById('loginORSignUp');
  
  user.classList.remove('click')
  loginORSignUp.classList.remove('active')
};

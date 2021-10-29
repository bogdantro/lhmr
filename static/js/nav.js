window.addEventListener("scroll", function(){
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle("sticky", window.scrollY > 1)
})


function menu(){
  const sidebar = document.getElementById('sidebar');
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const sidebarLi = document.getElementById('sidebarLi');
  const allContentArea = document.getElementById('allContentArea');
  const html = document.querySelector("html");
  const body = document.body;

  if (window.getComputedStyle(sidebar,null).getPropertyValue("opacity") == '0'){
    hamburger.classList.add('click')  
    sidebar.classList.add('active')
    sidebarLi.classList.add('active')
  } else{
    hamburger.classList.remove('click')  
    sidebar.classList.remove('active')
    sidebarLi.classList.remove('active')
  }  
};

function myaccount(){
  const user = document.getElementById('myAccountIcon');
  
  user.classList.toggle('click')
};

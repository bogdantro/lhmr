window.addEventListener("scroll", function(){
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle("sticky", window.scrollY > 1)
})


/////////// MOBILE JAVASCRIPT
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
    navbar.classList.add('menu')  
    hamburger.classList.add('click')  
    sidebar.classList.add('active')
    document.getElementsByTagName('body').classList.add('menu');
    setTimeout(function(){
      sidebarLi.classList.add('active')
    }, 800)
    background.classList.add('active')
    backToTop.classList.add('menu-active')
    logo.classList.add('menu-click')
  } else{
    navbar.classList.remove('menu') 
    hamburger.classList.remove('click')  
    sidebar.classList.remove('active')
    sidebarLi.classList.remove('active')
    background.classList.remove('active')
    logo.classList.remove('menu-click')
    setTimeout(function(){
      backToTop.classList.remove('menu-active')
    }, 900);
  }  
};
// PRICES DROPDOWN
function prices(){
  const pricesToggle = document.getElementById('pricesToggle');
  const prices = document.getElementById('pricesDropdown');
  const about = document.getElementById('aboutDropdown');
  const account = document.getElementById('accountDropdown');
  const help = document.getElementById('helpDropdown');

  const aboutToggle = document.getElementById('aboutToggle');
  const helpToggle = document.getElementById('helpToggle');
  const accountToggle = document.getElementById('accountToggle');


  if (window.getComputedStyle(prices,null).getPropertyValue("display") == 'none'){
    prices.classList.add('active')
    about.classList.remove('active')
    account.classList.remove('active')
    help.classList.remove('active')
    pricesToggle.classList.add('click')
    aboutToggle.classList.remove('click')
    helpToggle.classList.remove('click')
    accountToggle.classList.remove('click')
  } else{
    prices.classList.remove('active')
    pricesToggle.classList.remove('click')
  }
}
// ABOUT DROPDOWN
function about(){
  const aboutToggle = document.getElementById('aboutToggle');
  const about = document.getElementById('aboutDropdown');
  const account = document.getElementById('accountDropdown');
  const prices = document.getElementById('pricesDropdown');
  const help = document.getElementById('helpDropdown');

  const pricesToggle = document.getElementById('pricesToggle');
  const helpToggle = document.getElementById('helpToggle');
  const accountToggle = document.getElementById('accountToggle');

  if (window.getComputedStyle(about,null).getPropertyValue("display") == 'none'){
    about.classList.add('active')
    account.classList.remove('active')
    help.classList.remove('active')
    prices.classList.remove('active')
    aboutToggle.classList.add('click')
    pricesToggle.classList.remove('click')
    helpToggle.classList.remove('click')
    accountToggle.classList.remove('click')
  } else{
    about.classList.remove('active')
    aboutToggle.classList.remove('click')
  }
}
// HELP DROPDOWN
function help(){
  const helpToggle = document.getElementById('helpToggle');
  const help = document.getElementById('helpDropdown');
  const about = document.getElementById('aboutDropdown');
  const account = document.getElementById('accountDropdown');
  const prices = document.getElementById('pricesDropdown');

  const aboutToggle = document.getElementById('aboutToggle');
  const pricesToggle = document.getElementById('pricesToggle');
  const accountToggle = document.getElementById('accountToggle');

  if (window.getComputedStyle(help,null).getPropertyValue("display") == 'none'){
    help.classList.add('active')
    about.classList.remove('active')
    prices.classList.remove('active')
    account.classList.remove('active')
    helpToggle.classList.add('click')
    accountToggle.classList.remove('click')
    pricesToggle.classList.remove('click')
    aboutToggle.classList.remove('click')
  } else{
    help.classList.remove('active')
    helpToggle.classList.remove('click')

  }
}
// ACCOUNT DROPDOWN
function account(){
  const accountToggle = document.getElementById('accountToggle');
  const account = document.getElementById('accountDropdown');
  const about = document.getElementById('aboutDropdown');
  const prices = document.getElementById('pricesDropdown');
  const help = document.getElementById('helpDropdown');

  const aboutToggle = document.getElementById('aboutToggle');
  const pricesToggle = document.getElementById('pricesToggle');
  const helpToggle = document.getElementById('helpToggle');

  if (window.getComputedStyle(account,null).getPropertyValue("display") == 'none'){
    account.classList.add('active')
    about.classList.remove('active')
    prices.classList.remove('active')
    help.classList.remove('active')
    accountToggle.classList.add('click')
    pricesToggle.classList.remove('click')
    aboutToggle.classList.remove('click')
    helpToggle.classList.remove('click')
  } else{
    account.classList.remove('active')
    accountToggle.classList.remove('click')
  }
}


/////// DESKTOP JAVASCRIPT

window.addEventListener("scroll", function(){
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle("sticky", window.scrollY > 1)
})


/////////// MOBILE JAVASCRIPT
// MENU
function menu(){
  const sidebar = document.getElementById('sidebar');
  const logo = document.getElementById('logo');
  const navbar = document.getElementById('navbar-small');
  const hamburger = document.getElementById('hamburger');
  const sidebarLi = document.getElementById('sidebarLi');

  if (window.getComputedStyle(sidebar,null).getPropertyValue("opacity") == '0'){
    navbar.classList.add('menu')  
    hamburger.classList.add('click')  
    sidebar.classList.add('active')
    setTimeout(function(){
      sidebarLi.classList.add('active')
    }, 800)
    logo.classList.add('menu-click')
  } else{
    navbar.classList.remove('menu') 
    hamburger.classList.remove('click')  
    sidebar.classList.remove('active')
    sidebarLi.classList.remove('active')
    logo.classList.remove('menu-click')
  }  
};
// PRICES DROPDOWN
function prices(){
  const pricesToggle = document.getElementById('pricesToggle');
  const prices = document.getElementById('pricesDropdown');
  const about = document.getElementById('aboutDropdown');
  const help = document.getElementById('helpDropdown');

  const pricesToggleExtra = document.getElementById('pricesToggleExtra');
  const pricesExtraDiv = document.getElementById('pricesExtraDiv');


  const aboutToggle = document.getElementById('aboutToggle');
  const helpToggle = document.getElementById('helpToggle');
  const accountToggle = document.getElementById('accountToggle');


  if (window.getComputedStyle(prices,null).getPropertyValue("display") == 'none'){
    prices.classList.add('active')
    about.classList.remove('active')
    help.classList.remove('active')
    pricesToggle.classList.add('click')
    aboutToggle.classList.remove('click')
    helpToggle.classList.remove('click')
    accountToggle.classList.remove('click')
  } else{
    prices.classList.remove('active')
    pricesToggle.classList.remove('click')
    pricesExtraDiv.classList.remove('active')
    pricesToggleExtra.classList.remove('click')
  }
}
function pricesExtra(){
  const pricesToggleExtra = document.getElementById('pricesToggleExtra');
  const pricesExtraDiv = document.getElementById('pricesExtraDiv');


  if (window.getComputedStyle(pricesExtraDiv,null).getPropertyValue("display") == 'none'){
    pricesExtraDiv.classList.add('active')
    pricesToggleExtra.classList.add('click')
  } else{
    pricesExtraDiv.classList.remove('active')
    pricesToggleExtra.classList.remove('click')
  }
}
// ABOUT DROPDOWN
function about(){
  const aboutToggle = document.getElementById('aboutToggle');
  const about = document.getElementById('aboutDropdown');
  const prices = document.getElementById('pricesDropdown');
  const help = document.getElementById('helpDropdown');

  const pricesToggle = document.getElementById('pricesToggle');
  const helpToggle = document.getElementById('helpToggle');
  const accountToggle = document.getElementById('accountToggle');

  if (window.getComputedStyle(about,null).getPropertyValue("display") == 'none'){
    about.classList.add('active')
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
  const prices = document.getElementById('pricesDropdown');

  const aboutToggle = document.getElementById('aboutToggle');
  const pricesToggle = document.getElementById('pricesToggle');
  const accountToggle = document.getElementById('accountToggle');

  if (window.getComputedStyle(help,null).getPropertyValue("display") == 'none'){
    help.classList.add('active')
    about.classList.remove('active')
    prices.classList.remove('active')
    helpToggle.classList.add('click')
    accountToggle.classList.remove('click')
    pricesToggle.classList.remove('click')
    aboutToggle.classList.remove('click')
  } else{
    help.classList.remove('active')
    helpToggle.classList.remove('click')

  }
}


/////// DESKTOP JAVASCRIPT

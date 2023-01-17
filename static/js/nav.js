  
  window.addEventListener("scroll", function(){
    const navbar = document.getElementById('mobileNav');
    navbar.classList.toggle("sticky", window.scrollY > 1)
  })

  window.addEventListener("scroll", function(){
    const navbar = document.getElementById('desNav');
    navbar.classList.toggle("sticky", window.scrollY > 1)
  })



/////////// MOBILE JAVASCRIPT
// MENU
function menu(){
  const sidebar = document.getElementById('sidebar');
  const navbar = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburger');
  const backToTop = document.getElementById('backToTop');

  if (window.getComputedStyle(sidebar,null).getPropertyValue("opacity") == '0'){
    navbar.classList.add('menu')  
    hamburger.classList.add('click')  
    sidebar.classList.add('active')
    backToTop.classList.add('menu-active')
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else{
    backToTop.classList.remove('menu-active')
    navbar.classList.remove('menu') 
    hamburger.classList.remove('click')  
    sidebar.classList.remove('active')
    document.body.style.overflow = "scroll";
    document.documentElement.style.overflow = "scroll";
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


  if (window.getComputedStyle(prices,null).getPropertyValue("display") == 'none'){
    prices.classList.add('active')
    about.classList.remove('active')
    help.classList.remove('active')
    pricesToggle.classList.add('click')
    aboutToggle.classList.remove('click')
    helpToggle.classList.remove('click')
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

  if (window.getComputedStyle(about,null).getPropertyValue("display") == 'none'){
    about.classList.add('active')
    help.classList.remove('active')
    prices.classList.remove('active')
    aboutToggle.classList.add('click')
    pricesToggle.classList.remove('click')
    helpToggle.classList.remove('click')
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

  if (window.getComputedStyle(help,null).getPropertyValue("display") == 'none'){
    help.classList.add('active')
    about.classList.remove('active')
    prices.classList.remove('active')
    helpToggle.classList.add('click')
    pricesToggle.classList.remove('click')
    aboutToggle.classList.remove('click')
  } else{
    help.classList.remove('active')
    helpToggle.classList.remove('click')

  }
}

  
  window.addEventListener("scroll", function(){
    const navbar = document.getElementById('mobileNav');
    navbar.classList.toggle("sticky", window.scrollY > 1)
  })

  window.addEventListener("scroll", function(){
    const navbar = document.getElementById('desNav');
    navbar.classList.toggle("sticky", window.scrollY > 1)
  })


function search(){
  const search = document.getElementById('mobSidebarSearch');
  const hamburger = document.getElementById('hamburger');

  if (window.getComputedStyle(search,null).getPropertyValue("opacity") == '0'){
    search.classList.add('active');
    hamburger.style.pointerEvents = 'none';
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }else{
    search.classList.remove('active');
    hamburger.style.pointerEvents = 'visible';
    document.body.style.overflow = "scroll";
    document.documentElement.style.overflow = "scroll";
  }
}  


/////////// MOBILE JAVASCRIPT
// MENU
function menu(){
  const sidebar = document.getElementById('sidebar');
  const navbar = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburger');
  const search = document.getElementById('mobNavSearchIcon');

  if (window.getComputedStyle(sidebar,null).getPropertyValue("opacity") == '0'){
    navbar.classList.add('menu')  
    hamburger.classList.add('click')  
    sidebar.classList.add('active')
    search.style.pointerEvents = 'none';
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else{
    navbar.classList.remove('menu') 
    hamburger.classList.remove('click')  
    sidebar.classList.remove('active')
    search.style.pointerEvents = 'visible';
    document.body.style.overflow = "scroll";
    document.documentElement.style.overflow = "scroll";
  }  
};


function categoriesDrop(){
  const a =  document.getElementById('categoryDropdownMobile');
  const b =  document.getElementById('categoryDropdownMobileIcon');
  const c =  document.getElementById('categoryDropdownMobileLink');
  
  if (window.getComputedStyle(a,null).getPropertyValue("display") == 'none'){
    a.classList.add('active')
    b.className = 'fa-solid fa-caret-up';
    b.style.transform = "translateY(1px) translateX(10px)";
    c.classList.add('active');
  }else{
    a.classList.remove('active')
    b.className = 'fa-solid fa-caret-down';
    b.style.transform = "translateY(0px) translateX(10px)";
    c.classList.remove('active');
  }
};


function categoriesDropDes(){
  const a =  document.getElementById('categoryDropdownDes');
  const b =  document.getElementById('categoryDropdownIconDes');
  const c =  document.getElementById('categoryDropdownLinkDes');
  
  if (window.getComputedStyle(a,null).getPropertyValue("display") == 'none'){
    a.classList.add('active')
    b.className = 'fa-solid fa-caret-up';
    b.style.transform = "translateY(1px)";
    c.classList.add('active');
  }else{
    a.classList.remove('active')
    b.className = 'fa-solid fa-caret-down';
    b.style.transform = "translateY(0px)";
    c.classList.remove('active');
  }
};



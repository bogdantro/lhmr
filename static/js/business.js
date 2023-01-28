window.addEventListener("scroll", function(){
    const businessQ = document.getElementById('businessQ');
    businessQ.classList.toggle("sticky", window.scrollY > 1)
  })

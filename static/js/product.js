window.addEventListener("scroll", function(){
    const productSearch = document.getElementById('productSearch');
    productSearch.classList.toggle("sticky", window.scrollY > 55)
  })



  
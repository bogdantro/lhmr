window.addEventListener("scroll", function(){
    const productSearch = document.getElementById('searchSearch');
    const searchQ = document.getElementById('searchQ');
    productSearch.classList.toggle("sticky", window.scrollY > 53)
    searchQ.classList.toggle("sticky", window.scrollY > 53)
  })
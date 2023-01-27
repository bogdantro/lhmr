window.addEventListener("scroll", function(){
    const allPrSearch = document.getElementById('allPrSearch');
    allPrSearch.classList.toggle("sticky", window.scrollY > 55)
    const allPrQ = document.getElementById('allPrQ');
    allPrQ.classList.toggle("sticky", window.scrollY > 55)
  })

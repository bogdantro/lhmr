window.addEventListener("scroll", function(){
    const categorySearch = document.getElementById('categorySearch');
    categorySearch.classList.toggle("sticky", window.scrollY > 55)
    const categoryQ = document.getElementById('categoryQ');
    categoryQ.classList.toggle("sticky", window.scrollY > 55)
  })

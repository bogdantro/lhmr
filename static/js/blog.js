window.addEventListener("scroll", function(){
    const blogQ = document.getElementById('blogQ');
    blogQ.classList.toggle("sticky", window.scrollY > 1)
  })

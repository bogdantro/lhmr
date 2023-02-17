window.addEventListener("scroll", function(){
    const searchQYes = document.getElementById('searchQYes');
    searchQYes.classList.toggle("sticky", window.scrollY > 1)
  })

window.addEventListener("scroll", function(){
    const searchQNo = document.getElementById('searchQNo');
    searchQNo.classList.toggle("sticky", window.scrollY > 1)
  })

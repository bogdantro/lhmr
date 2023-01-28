window.addEventListener("scroll", function(){
    const vilkårQ = document.getElementById('vilkårQ');
    vilkårQ.classList.toggle("sticky", window.scrollY > 1)
  })

window.addEventListener("scroll", function(){
    const aboutQ = document.getElementById('aboutQ');
    aboutQ.classList.toggle("sticky", window.scrollY > 67)
  })

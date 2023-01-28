window.addEventListener("scroll", function(){
    const policyQ = document.getElementById('policyQ');
    policyQ.classList.toggle("sticky", window.scrollY > 1)
  })

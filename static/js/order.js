$.ajax({
    type: "GET",
    url: "bestill/",
    success: function (response){
        document.getElementById('orderLoader').classList.add('hidden');
        console.log('Ok');
    },
    error: function(er){
      console.log('Not ok');  
    },
})

function orderProductDropdown(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('productDropdown');

  if (window.getComputedStyle(productDropdown,null).getPropertyValue("pointer-events") == 'none'){  
    productDropdown.classList.add('active');
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

  } else{
    productDropdown.classList.remove('active');
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
  }  
}
function orderhostingDropdown(){
  const html = document.querySelector("html");
  const body = document.body;
  const hostingDropdown = document.getElementById('hostingDropdown');

  if (window.getComputedStyle(hostingDropdown,null).getPropertyValue("pointer-events") == 'none'){  
    hostingDropdown.classList.add('active');
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

  } else{
    hostingDropdown.classList.remove('active');
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
  }  
}

function orderNumPagesDropdown(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  if (window.getComputedStyle(numPagesDropdown,null).getPropertyValue("pointer-events") == 'none'){  
    numPagesDropdown.classList.add('active');
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

  } else{
    numPagesDropdown.classList.remove('active');
    html.style.overflow = 'unset'
    body.style.overflow = 'unset'
  }  
}

function noneNumPages(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "";
  document.getElementById('numPagesPrice').innerHTML = '0kr';
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page6').style.display = 'none';
  document.getElementById('page7').style.display = 'none';
  document.getElementById('page8').style.display = 'none';
  document.getElementById('page9').style.display = 'none';
  document.getElementById('page10').style.display = 'none';
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}
function a1(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "1";
  document.getElementById('numPagesPrice').innerHTML = '399kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page6').style.display = 'none';
  document.getElementById('page7').style.display = 'none';
  document.getElementById('page8').style.display = 'none';
  document.getElementById('page9').style.display = 'none';
  document.getElementById('page10').style.display = 'none';
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}
function a2(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "2";
  document.getElementById('numPagesPrice').innerHTML = '798kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page6').style.display = 'none';
  document.getElementById('page7').style.display = 'none';
  document.getElementById('page8').style.display = 'none';
  document.getElementById('page9').style.display = 'none';
  document.getElementById('page10').style.display = 'none';
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}
function a3(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "3";
  document.getElementById('numPagesPrice').innerHTML = '1197kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page6').style.display = 'none';
  document.getElementById('page7').style.display = 'none';
  document.getElementById('page8').style.display = 'none';
  document.getElementById('page9').style.display = 'none';
  document.getElementById('page10').style.display = 'none';

  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}
function a4(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "4";
  document.getElementById('numPagesPrice').innerHTML = '1596kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page4').style.display = 'block';
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page6').style.display = 'none';
  document.getElementById('page7').style.display = 'none';
  document.getElementById('page8').style.display = 'none';
  document.getElementById('page9').style.display = 'none';
  document.getElementById('page10').style.display = 'none';

  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}
function a5(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "5";
  document.getElementById('numPagesPrice').innerHTML = '1995kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page4').style.display = 'block';
  document.getElementById('page5').style.display = 'block';
  document.getElementById('page6').style.display = 'none';
  document.getElementById('page7').style.display = 'none';
  document.getElementById('page8').style.display = 'none';
  document.getElementById('page9').style.display = 'none';
  document.getElementById('page10').style.display = 'none';

  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}

function a6(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "6";
  document.getElementById('numPagesPrice').innerHTML = '2394kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page4').style.display = 'block';
  document.getElementById('page5').style.display = 'block';
  document.getElementById('page6').style.display = 'block';
  document.getElementById('page7').style.display = 'none';
  document.getElementById('page8').style.display = 'none';
  document.getElementById('page9').style.display = 'none';
  document.getElementById('page10').style.display = 'none';

  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}

function a7(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "7";
  document.getElementById('numPagesPrice').innerHTML = '2793kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page4').style.display = 'block';
  document.getElementById('page5').style.display = 'block';
  document.getElementById('page6').style.display = 'block';
  document.getElementById('page7').style.display = 'block';
  document.getElementById('page8').style.display = 'none';
  document.getElementById('page9').style.display = 'none';
  document.getElementById('page10').style.display = 'none';
  

  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}

function a8(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "8";
  document.getElementById('numPagesPrice').innerHTML = '3192kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page4').style.display = 'block';
  document.getElementById('page5').style.display = 'block';
  document.getElementById('page6').style.display = 'block';
  document.getElementById('page7').style.display = 'block';  
  document.getElementById('page8').style.display = 'block';
  document.getElementById('page9').style.display = 'none';
  document.getElementById('page10').style.display = 'none';

  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}

function a9(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "9";
  document.getElementById('numPagesPrice').innerHTML = '3591kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page4').style.display = 'block';
  document.getElementById('page5').style.display = 'block';
  document.getElementById('page6').style.display = 'block';
  document.getElementById('page7').style.display = 'block';
  document.getElementById('page8').style.display = 'block'; 
  document.getElementById('page9').style.display = 'block';
  document.getElementById('page10').style.display = 'none';

  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}

function a10(){
  const html = document.querySelector("html");
  const body = document.body;
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  document.getElementById("num_pages").value = "10";
  document.getElementById('numPagesPrice').innerHTML = '3990kr';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page4').style.display = 'block';
  document.getElementById('page5').style.display = 'block';
  document.getElementById('page6').style.display = 'block';
  document.getElementById('page7').style.display = 'block';
  document.getElementById('page8').style.display = 'block';
  document.getElementById('page9').style.display = 'block';
  document.getElementById('page10').style.display = 'block';

  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  numPagesDropdown.classList.remove('active');
}

function noneHosting(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('hostingDropdown');

  document.getElementById("hosting").value = "";
  document.getElementById('hostingPrice').innerHTML = '0kr';
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}

function ja(){
  const html = document.querySelector("html");
  const body = document.body;
  const hostingDropdown = document.getElementById('hostingDropdown');

  document.getElementById("hosting").value = "Ja";
  document.getElementById('hostingPrice').innerHTML = '60kr/m';
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  hostingDropdown.classList.remove('active');
}

function nei(){
  const html = document.querySelector("html");
  const body = document.body;
  const hostingDropdown = document.getElementById('hostingDropdown');

  document.getElementById("hosting").value = "Nei";
  document.getElementById('hostingPrice').innerHTML = '0kr';
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  hostingDropdown.classList.remove('active');
}

function noneProducts(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "";
  document.getElementById('productPrice').innerHTML = '0kr';
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}

function ecommerce(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Ecommerce";
  document.getElementById('productPrice').innerHTML = '4399kr';
  document.getElementById('ifCustom').classList.remove('active');
  document.getElementById('ifEcommerce').classList.add('active');
  document.getElementById('loaderElEcommerce').style.display = 'block';
  setTimeout( function(){
    document.getElementById('ifEcommerce').classList.remove('active');
    document.getElementById('loaderElEcommerce').style.display = 'none';
  }, 4900)
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}

function blog(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Blogg";
  document.getElementById('productPrice').innerHTML = '3699kr';
  document.getElementById('ifCustom').classList.remove('active');
  document.getElementById('ifBlog').classList.add('active');
  document.getElementById('loaderElBlog').style.display = 'block';
  setTimeout( function(){
    document.getElementById('ifBlog').classList.remove('active');
    document.getElementById('loaderElBlog').style.display = 'none';
  }, 4900)
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}

function portofolio(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Portofolio";
  document.getElementById('productPrice').innerHTML = '2999kr';
  document.getElementById('ifCustom').classList.remove('active'); 
  document.getElementById('ifPortofolio').classList.add('active');
  document.getElementById('loaderElPortofolio').style.display = 'block';
  setTimeout( function(){
    document.getElementById('ifPortofolio').classList.remove('active');
    document.getElementById('loaderElPortofolio').style.display = 'none';
  }, 4900)
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}

function bedrift(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Bedrift";
  document.getElementById('productPrice').innerHTML = '2999kr';
  document.getElementById('ifCustom').classList.remove('active');
  document.getElementById('ifBedrift').classList.add('active');
  document.getElementById('loaderElBedrift').style.display = 'block';
  setTimeout( function(){
    document.getElementById('ifBedrift').classList.remove('active');
    document.getElementById('loaderElBedrift').style.display = 'none';
  }, 4900)
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}

function personal(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Personal";
  document.getElementById('productPrice').innerHTML = '1699kr';
  document.getElementById('ifCustom').classList.remove('active');
  document.getElementById('ifPersonal').classList.add('active');
  document.getElementById('loaderElPersonal').style.display = 'block';
  setTimeout( function(){
    document.getElementById('ifPersonal').classList.remove('active');
    document.getElementById('loaderElPersonal').style.display = 'none';
  }, 4900)
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}

function custom(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Custom";
  document.getElementById('productPrice').innerHTML = '599kr-9999kr';
  document.getElementById('ifCustom').classList.add('active');
  document.getElementById('loaderElCustom').style.display = 'block';
  setTimeout( function(){
    document.getElementById('ifCustom').classList.remove('active');
    document.getElementById('loaderElCustom').style.display = 'none';
  }, 4900)
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}
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

function noneHosting(){
  const html = document.querySelector("html");
  const body = document.body;
  const hostingDropdown = document.getElementById('hostingDropdown');

  document.getElementById("hosting").value = "";
  document.getElementById('hostingPrice').innerHTML = '0kr';
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  hostingDropdown.classList.remove('active');
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
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}

function bedrift(){
  const html = document.querySelector("html");
  const body = document.body;
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Bedrift";
  document.getElementById('productPrice').innerHTML = '3399kr';
  document.getElementById('ifCustom').classList.remove('active');
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
  document.getElementById('loaderEl').style.display = 'block';
  setTimeout( function(){
    document.getElementById('ifCustom').classList.remove('active');
    document.getElementById('loaderEl').style.display = 'none';
  }, 3900)
  html.style.overflow = 'unset'
  body.style.overflow = 'unset'
  productDropdown.classList.remove('active');
}
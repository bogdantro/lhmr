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


// NUM PAGES
function orderNumPagesDropdown(){
  const numPagesDropdown = document.getElementById('numPagesDropdown');

  if (window.getComputedStyle(numPagesDropdown,null).getPropertyValue("pointer-events") == 'none'){  
    numPagesDropdown.classList.add('active');

  } else{
    numPagesDropdown.classList.remove('active');
  }  
}

function noneNumPages(){
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

  numPagesDropdown.classList.remove('active');
}
function a1(){
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

  numPagesDropdown.classList.remove('active');
}
function a2(){
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

  numPagesDropdown.classList.remove('active');
}
function a3(){
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

  numPagesDropdown.classList.remove('active');
}
function a4(){
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

  numPagesDropdown.classList.remove('active');
}
function a5(){
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

  numPagesDropdown.classList.remove('active');
}

function a6(){
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

  numPagesDropdown.classList.remove('active');
}

function a7(){
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
  

  numPagesDropdown.classList.remove('active');
}

function a8(){
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

  numPagesDropdown.classList.remove('active');
}

function a9(){
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

  numPagesDropdown.classList.remove('active');
}

function a10(){
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

  numPagesDropdown.classList.remove('active');
}

// HOSTING
function orderhostingDropdown(){
  const hostingDropdown = document.getElementById('hostingDropdown');

  if (window.getComputedStyle(hostingDropdown,null).getPropertyValue("pointer-events") == 'none'){  
    hostingDropdown.classList.add('active');

  } else{
    hostingDropdown.classList.remove('active');
  }  
}

function noneHosting(){
  const productDropdown = document.getElementById('hostingDropdown');

  document.getElementById("hosting").value = "";
  document.getElementById('hostingPrice').innerHTML = '0kr';

  productDropdown.classList.remove('active');
}

function ja(){
  const hostingDropdown = document.getElementById('hostingDropdown');

  document.getElementById("hosting").value = "Ja";
  document.getElementById('hostingPrice').innerHTML = '60kr/m';

  hostingDropdown.classList.remove('active');
}

function nei(){
  const hostingDropdown = document.getElementById('hostingDropdown');

  document.getElementById("hosting").value = "Nei";
  document.getElementById('hostingPrice').innerHTML = '0kr';

  hostingDropdown.classList.remove('active');
}

// SITES
function orderProductDropdown(){
  const productDropdown = document.getElementById('productDropdown');

  if (window.getComputedStyle(productDropdown,null).getPropertyValue("pointer-events") == 'none'){  
    productDropdown.classList.add('active');

  } else{
    productDropdown.classList.remove('active');
  }  
}

function noneProducts(){
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "";
  document.getElementById('productPrice').innerHTML = '0kr';

  productDropdown.classList.remove('active');
}

function ecommerce(){
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Ecommerce";
  document.getElementById('productPrice').innerHTML = '4399kr';

  productDropdown.classList.remove('active');
}

function blog(){
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Blogg";
  document.getElementById('productPrice').innerHTML = '3699kr';

  productDropdown.classList.remove('active');
}

function portofolio(){
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Portofolio";
  document.getElementById('productPrice').innerHTML = '2999kr';

  productDropdown.classList.remove('active');
}

function bedrift(){
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Bedrift";
  document.getElementById('productPrice').innerHTML = '2999kr';

  productDropdown.classList.remove('active');
}

function personal(){
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Personal";
  document.getElementById('productPrice').innerHTML = '1699kr';

  productDropdown.classList.remove('active');
}

function custom(){
  const productDropdown = document.getElementById('productDropdown');

  document.getElementById("products").value = "Custom";
  document.getElementById('productPrice').innerHTML = '599kr-9999kr';

  productDropdown.classList.remove('active');
}
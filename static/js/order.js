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


function productDropdown(){
  const product =  document.getElementById('product');
  const dropdown =  document.getElementById('productDrop');
  const productArrow =  document.getElementById('productArrow');

  if (window.getComputedStyle(dropdown,null).getPropertyValue("display") == 'none'){
    product.classList.add('active');
    dropdown.classList.add('active');
    productArrow.classList.add('active');
  }else{
    product.classList.remove('active');
    dropdown.classList.remove('active');
    productArrow.classList.remove('active');
  }
}
// SMALL PACK
function smallPack(){
  const product =  document.getElementById('product');
  const dropdown =  document.getElementById('productDrop');
  const productArrow =  document.getElementById('productArrow');

  document.getElementById("product").value = "Nettbutikk/eCommerce - LITEN";
  product.classList.remove('active');
  dropdown.classList.remove('active');
  productArrow.classList.remove('active');
}
// MIDDLE PACK
function middlePack(){
  const product =  document.getElementById('product');
  const dropdown =  document.getElementById('productDrop');
  const productArrow =  document.getElementById('productArrow');

  document.getElementById("product").value = "Nettbutikk/eCommerce - MIDDELS";
  product.classList.remove('active');
  dropdown.classList.remove('active');
  productArrow.classList.remove('active');
}
// BIG PACK
function bigPack(){
  const product =  document.getElementById('product');
  const dropdown =  document.getElementById('productDrop');
  const productArrow =  document.getElementById('productArrow');

  document.getElementById("product").value = "Nettbutikk/eCommerce - STOR";
  product.classList.remove('active');
  dropdown.classList.remove('active');
  productArrow.classList.remove('active');
}


// document.getElementById('productPrice').innerHTML = '3500kr';

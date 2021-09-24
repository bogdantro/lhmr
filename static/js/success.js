$.ajax({
    type: "GET",
    url: "bestilling-utfort/webiser/bestilling/",
    success: function (response){
        document.getElementById('orderSentLoader').classList.add('hidden');
        console.log('Ok');
    },
    error: function(er){
      console.log('Not ok');  
    },
})
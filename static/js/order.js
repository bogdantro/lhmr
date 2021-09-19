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

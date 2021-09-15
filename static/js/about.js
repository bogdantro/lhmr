$.ajax({
    type: "GET",
    url: "om-webiser/",
    success: function (response){
        document.getElementById('aboutLoader').classList.add('hidden');
        console.log('Ok');
    },
    error: function(er){
      console.log('Not ok');  
    },
})
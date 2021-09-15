$.ajax({
    type: "GET",
    url: "hosting-informasjon/",
    success: function (response){
        document.getElementById('hostingLoader').classList.add('hidden');
        console.log('Ok');
    },
    error: function(er){
      console.log('Not ok');  
    },
})
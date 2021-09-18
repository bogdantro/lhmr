$.ajax({
    type: "GET",
    url: "email-success/",
    success: function (response){
        document.getElementById('emailLoader').classList.add('hidden');
        console.log('Ok');
    },
    error: function(er){
      console.log('Not ok');  
    },
})
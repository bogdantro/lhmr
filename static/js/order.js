function orderLoading(){
const allContentArea = document.getElementById('allContentArea');
    allContentArea.style.transition = '.5s';
    setTimeout(function(){
    allContentArea.style.filter = 'brightness(50%)';
    }, 100)
};

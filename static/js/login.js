function forgotPass(){
    const forgotPassForm = document.getElementById('forgotPassForm');
    const blackOverlay = document.getElementById('blackOverlay');

    forgotPassForm.classList.add('active')
    blackOverlay.classList.add('show')
}

function forgotPassClose(){
    const forgotPassForm = document.getElementById('forgotPassForm');
    const blackOverlay = document.getElementById('blackOverlay');

    forgotPassForm.classList.remove('active')
    blackOverlay.classList.remove('show')
}
const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`;
    },
};

const storageType = cookieStorage;
const consentPropertyName = 'webiser';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    const consentPopup = document.getElementById('popup');
    const acceptBtn = document.getElementById('accept');
    const blackOverlay = document.getElementById('blackOverlay');

    
    
    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden')
        blackOverlay.classList.remove('show');
    };
    
    acceptBtn.addEventListener('click', acceptFn);
    
    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
            blackOverlay.classList.add('show');
        }, 700);
    }
};

$.ajax({
    type: "GET",
    url: "/",
    success: function (response){
        document.getElementById('homeLoader').classList.add('hidden');
        console.log('Ok');
    },
    error: function(er){
      console.log('Not ok');  
    },
})


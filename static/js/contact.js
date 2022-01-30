function contactName(){
    const contactEmailLabel = document.getElementById('contactEmailLabel');
    const contactMessageLabel = document.getElementById('contactMessageLabel');
    const contactNameLabel = document.getElementById('contactNameLabel');

    contactNameLabel.classList.add('click');

    contactEmailLabel.classList.remove('click');
    contactMessageLabel.classList.remove('click');
}

function contactEmail(){
    const contactMessageLabel = document.getElementById('contactMessageLabel');
    const contactNameLabel = document.getElementById('contactNameLabel');
    const contactEmailLabel = document.getElementById('contactEmailLabel');

    contactEmailLabel.classList.add('click');

    contactMessageLabel.classList.remove('click');
    contactNameLabel.classList.remove('click');
}

function contactMessage(){
    const contactMessageLabel = document.getElementById('contactMessageLabel');
    const contactEmailLabel = document.getElementById('contactEmailLabel');
    const contactNameLabel = document.getElementById('contactNameLabel');

    contactMessageLabel.classList.add('click');

    contactNameLabel.classList.remove('click');
    contactEmailLabel.classList.remove('click');
}
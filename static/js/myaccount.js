function completedOrders(){
    const completedOrdersP = document.getElementById('completedOrdersP');
    const startedOrdersP = document.getElementById('startedOrdersP');
    const ifOrderFinished = document.getElementById('ifOrderFinished');
    const ifOrderStarted = document.getElementById('ifOrderStarted');

    setTimeout(() => {
        completedOrdersP.classList.add('click')
    }, 70);
    setTimeout(() => {
        completedOrdersP.classList.remove('click')
    }, 180);

    
    completedOrdersP.classList.add('active')
    completedOrdersP.classList.remove('unactive')

    startedOrdersP.classList.add('unactive')
    startedOrdersP.classList.remove('active')

    ifOrderFinished.classList.remove('hide')

    ifOrderStarted.classList.add('hide')
}
function startedOrders(){
    const startedOrdersP = document.getElementById('startedOrdersP');
    const completedOrdersP = document.getElementById('completedOrdersP');
    const ifOrderFinished = document.getElementById('ifOrderFinished');
    const ifOrderStarted = document.getElementById('ifOrderStarted');

    setTimeout(() => {
        startedOrdersP.classList.add('click')
    }, 70);
    setTimeout(() => {
        startedOrdersP.classList.remove('click')
    }, 180);

    startedOrdersP.classList.add('active')
    startedOrdersP.classList.remove('unactive')

    completedOrdersP.classList.add('unactive')
    completedOrdersP.classList.remove('active')

    ifOrderFinished.classList.add('hide')

    ifOrderStarted.classList.remove('hide')
}





// onclick="window.location.href='{% url 'orderinfo' order.id %}'"
function getCurrentTime(){
    const timeElement = document.querySelector('.time-element')
    var time;
    setInterval(() => {
        var d = new Date();
        time = d.toLocaleTimeString();
        timeElement.innerHTML = time
    }, 1000)
}

function sayHello(){
    alert('Merhaba, ben Hale. Portfolyo websiteme hoş geldin!')
}

function showLoadingScreen(){
    const loadingElement = document.querySelector('#loading-element')
    loadingElement.style.display = 'flex'
    setTimeout(() => {
        loadingElement.style.display = 'none'
        showPersonalTitle();
        sayHello();
        getCurrentTime();
    }, 3000)
}

function showPersonalTitle(){
    const personalTitleElement = document.querySelector('.personal-title')
    personalTitleElement.style.display = 'block'

}

showLoadingScreen();
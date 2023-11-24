let greeting = document.querySelector('#greeting');

let now = new Date();
let hourNow = now.getHours();

function writeGreeting(hour) {
    if(hour >= 0 && hour < 6) {
        if(langUk.classList.contains('active')) {
            greeting.textContent = 'Спокійної ночі!';
        } else {
            greeting.textContent = 'Good night!';
        }
    }
    if(hour >= 6 && hour < 12) {
        if(langUk.classList.contains('active')) {
            greeting.textContent = 'Приємного ранку!';
        } else {
            greeting.textContent = 'Good morning!';
        }
    }
    if(hour >= 12 && hour < 18) {
        if(langUk.classList.contains('active')) {
            greeting.textContent = 'Вдалого дня!';
        } else {
            greeting.textContent = 'Good day!';
        }
    }
    if(hour >= 18 && hour <= 23) {
        if(langUk.classList.contains('active')) {
            greeting.textContent = 'Затишного вечора!';
        } else {
            greeting.textContent = 'Have a cozy evening!';
        }
    }
}
writeGreeting(hourNow);



setInterval(function() {
    let checkNow = new Date();
    let checkHourNow = checkNow.getHours();
    writeGreeting(checkHourNow);
    console.log(checkHourNow);
}, 1800000)



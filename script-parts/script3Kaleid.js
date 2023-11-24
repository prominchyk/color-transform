circle.addEventListener('click', function circleRotate(event) {
    let counter = 0;
    let counterTimer = setInterval(function() {
        counter++;
        if(counter == 40) {
            clearInterval(counterTimer);
            rotateNumber.textContent = '';
            circle.addEventListener('click', circleRotate);
        }
        if(counter == 1) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(1turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '1 оберт за секунду';
            } else {
                rotateNumber.textContent = '1 revolution per second';  
            }
        }
        if(counter == 4) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
        if(counter == 5) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(2turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '2 оберти за секунду';
            } else {
                rotateNumber.textContent = '2 revolutions per second';  
            }
        }
        if(counter == 8) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
        if(counter == 9) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(3turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '3 оберти за секунду';
            } else {
                rotateNumber.textContent = '3 revolutions per second';  
            }
        }
        if(counter == 12) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
        if(counter == 13) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(5turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '5 обертів за секунду';
            } else {
                rotateNumber.textContent = '5 revolutions per second';  
            }
        }
        if(counter == 16) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
        if(counter == 17) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(8turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '8 обертів за секунду';
            } else {
                rotateNumber.textContent = '8 revolutions per second';  
            }
        }
        if(counter == 20) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
        if(counter == 21) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(10turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '10 обертів за секунду';
            } else {
                rotateNumber.textContent = '10 revolutions per second';  
            }
        }
        if(counter == 23) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
        if(counter == 24) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(15turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '15 обертів за секунду';
            } else {
                rotateNumber.textContent = '15 revolutions per second';  
            }
        }
        if(counter == 27) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
        if(counter == 28) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(19turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '19 обертів за секунду';
            } else {
                rotateNumber.textContent = '19 revolutions per second';  
            }
        }
        if(counter == 31) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
        if(counter == 32) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(30turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '30 обертів за секунду';
            } else {
                rotateNumber.textContent = '30 revolutions per second';  
            }
        }
        if(counter == 35) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
        if(counter == 36) {
            circle.style.transition = 'transform 1s linear';
            circle.style.transform = 'rotate(35turn)';
            if(langUk.classList.contains('active')) {
                rotateNumber.textContent = '35 обертів за секунду';
            } else {
                rotateNumber.textContent = '35 revolutions per second';  
            }
        }
        if(counter == 39) {
            circle.style.transition = 'none';
            circle.style.transform = 'none';
        }
    }, 500)
    circle.removeEventListener('click', circleRotate);
})
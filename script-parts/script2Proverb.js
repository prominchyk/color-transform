
function changeColor() {
    let rndColor = `radial-gradient(rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, 0.6), rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, 0.6))`;
    document.body.style.background = rndColor;
    header.style.background = rndColor;
    header.style.opacity = 1;
    header.style.borderBottom = '8px solid rgb(250, 250, 250)';
    aside.style.border = '8px solid rgb(250, 250, 250)';
    if(window.matchMedia("(max-width: 800px)").matches) {
        aside.style.backgroundColor = 'rgba(123, 170, 194, 0.8)';
        aside.style.border = '1px solid rgb(250, 250, 250)';
        //aside.style.backgroundColor = rndColor;
    }
    asideTextMenu.style.display = 'block';
    figures.style.display = 'block';
    rainbow.style.display = 'block';
    proverbTitle.style.display = 'block';
    btn.style.display = 'none'; 
    console.log(rndColor);
}

function addGreeting() {
        let proverb = ['Подорож у тисячу миль починається з одного кроку.', 'Дії говорять голосніше, ніж слова.', 'Курчат восени лічать.', 'Не судіть книгу за її обкладинкою.', 'Не кладіть усі яйця в один кошик.', 'Доля прихильна до сміливих.', 'Бог допомагає тим, хто допомагає собі.', 'Хороші речі приходять до тих, хто вміє чекати.', 'Сподівайся на краще, готуйся до гіршого.', 'Ви можете привести коня до води, але ви не можете змусити її напитися.'];
        let currProverb = `${proverb[randomNumber(proverb.length-1)]}`;
        setTimeout(function() {
            para.animate(pictureTumbling, pictureTiming3);
            if(langUk.classList.contains('active')) {
                para.textContent = currProverb;
            } else {
                for(let langObj in langObjs) {
                    if(currProverb == langObjs[langObj][0]) {
                        para.textContent = langObjs[langObj][1];
                    }
                } 
            }
        }, 1500)
}

let pictureTumbling = [
    {transform: 'scale(0)'},
    {transform: 'scale(1)'}
]

let pictureTiming1 = {
    duration: 400,
    iterations: 1,
    fill: 'forwards'

}

let pictureTiming2 = {
    duration: 900,
    iterations: 1,
    fill: 'forwards'

}

let pictureTiming3 = {
    duration: 1200,
    iterations: 1,
    fill: 'forwards'

}

function addPicture1() {
    img1.animate(pictureTumbling, pictureTiming1); 
    btn.removeEventListener('click', addPicture1);
}

function addPicture2() {
    setTimeout(function() {
        img2.animate(pictureTumbling, pictureTiming2); 
        btn.removeEventListener('click', addPicture2);
    }, 500)
}

//function timer() {
    //setTimeout(addGreeting, 1500);
//}   

btn.addEventListener('click', changeColor);
btn.addEventListener('click', addPicture1);
btn.addEventListener('click', addPicture2);
btn.addEventListener('click', addGreeting);
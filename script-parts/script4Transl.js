let langObjs = {
    1: ['Кольорова трансформація', 'Color transform'],
    2: ['Натисніть', 'Click me'],
    3: ['Мудрість народу в прислів\'ях', 'Wisdom of people in proverbs'],
    4: ['Калейдоскоп', 'Kaleidoscope'],
    5: ['Клікніть на круг - змінюватиметься візуальний малюнок в залежності від швидкості обертання.', 'Click on the circle to see visual picture of different speed of its rotation.'],
    6: ['1 оберт за секунду', '1 revolution per second'],
    7: ['Подорож у тисячу миль починається з одного кроку.', 'A journey of a thousand miles begins with a single step.'],
    8: ['Дії говорять голосніше, ніж слова.', 'Actions speak louder than words.'],
    9: ['Курчат восени лічать.', 'Don\’t count your chickens before they hatch.'],
    10: ['Не судіть книгу за її обкладинкою.', 'Don\’t judge a book by its cover.'],
    11: ['Не кладіть усі яйця в один кошик.', 'Don\’t put all of your eggs in one basket.'],
    12: ['Доля прихильна до сміливих.', 'Fortune favors the bold.'],
    13: ['Бог допомагає тим, хто допомагає собі.', 'God helps those who help themselves.'],
    14: ['Хороші речі приходять до тих, хто вміє чекати.', 'Good things come to those who wait.'],
    15: ['Сподівайся на краще, готуйся до гіршого.', 'Hope for the best, prepare for the worst.'],
    16: ['Ви можете привести коня до води, але ви не можете змусити її напитися.', 'You can lead a horse to water, but you can\’t make him drink it.'],
    17: ['2 оберти за секунду', '2 revolutions per second'],
    18: ['3 оберти за секунду', '3 revolutions per second'],
    19: ['5 обертів за секунду', '5 revolutions per second'],
    20: ['8 обертів за секунду', '8 revolutions per second'],
    21: ['10 обертів за секунду', '10 revolutions per second'],
    22: ['15 обертів за секунду', '15 revolutions per second'],
    23: ['19 обертів за секунду', '19 revolutions per second'],
    24: ['30 обертів за секунду', '30 revolutions per second'],
    25: ['35 обертів за секунду', '35 revolutions per second'],
    26: ['[Міні-ігри]', '[Mini-games]'],
    27: ['[Інструменти текстові, математичні]', '[Math, text tools]'],
    28: ['Спокійної ночі!', 'Good night!'],
    29: ['Приємного ранку!', 'Good morning!'],
    30: ['Вдалого дня!', 'Good day!'],
    31: ['Затишного вечора!', 'Have a cozy evening!'],
    32: ['Веселка', 'Rainbow'],
    33: ['Розмістіть кольори веселки в поля нижче (клік на колір - клік на потрібне поле).', ['Place the colors of the rainbow in the fields below (click on a color - click on the necessary field).']],
    34: ['Розділи сайту:', 'Sections:']
}

langEn.addEventListener('click', function() {
    langUk.classList.remove('active');
    this.classList.add('active');
    translateInEn();
})

langUk.addEventListener('click', function() {
    langEn.classList.remove('active');
    this.classList.add('active');
    translateInUa();
});

let elems = translate.children;
function translateInEn() {
    for(let elem of elems) {
    let elemChildren = elem.children;
        for(let langObj in langObjs) {
           if(elem.children[0] == undefined && elem.textContent.trim() == langObjs[langObj][0]) {
            elem.textContent = langObjs[langObj][1];
        }
        for(let elemChild of elemChildren) {
            if(elem.children[0] != undefined && elemChild.textContent.trim() == langObjs[langObj][0]) {
                elemChild.textContent = langObjs[langObj][1];
            }
        }
        }
    }
}
function translateInUa() {
    for(let elem of elems) {
    let elemChildren = elem.children;
        for(let langObj in langObjs) {
            if(elem.children[0] == undefined && elem.textContent.trim() == langObjs[langObj][1]) {
            elem.textContent = langObjs[langObj][0];
        }
        for(let elemChild of elemChildren) {
            if(elem.children[0] != undefined && elemChild.textContent.trim() == langObjs[langObj][1]) {
                elemChild.textContent = langObjs[langObj][0];
            }
        }
        }
    }
}
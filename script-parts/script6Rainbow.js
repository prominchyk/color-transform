
function getRadians(degrees) {
    return(Math.PI / 180) * degrees;
}

let ctx1 = document.querySelector('#canv1').getContext('2d');
let gradient1 = ctx1.createRadialGradient(500,350,350,500,350,310);
let ctx2 = document.querySelector('#canv2').getContext('2d');
let gradient2 = ctx2.createRadialGradient(500,350,310,500,350,270);
let ctx3 = document.querySelector('#canv3').getContext('2d');
let gradient3 = ctx3.createRadialGradient(500,350,270,500,350,230);
let ctx4 = document.querySelector('#canv4').getContext('2d');
let gradient4 = ctx4.createRadialGradient(500,350,230,500,350,190);
let ctx5 = document.querySelector('#canv5').getContext('2d');
let gradient5 = ctx5.createRadialGradient(500,350,190,500,350,150);
let ctx6 = document.querySelector('#canv6').getContext('2d');
let gradient6 = ctx6.createRadialGradient(500,350,150,500,350,110);
let ctx7 = document.querySelector('#canv7').getContext('2d');
let gradient7 = ctx7.createRadialGradient(500,350,110,500,350,40);

ctx1.arc(500, 350, 350, getRadians(180), getRadians(0));
gradient1.addColorStop(0, "rgba(255, 0, 0, 0.6)");
gradient1.addColorStop(1, "orange");
ctx1.fillStyle = gradient1;
ctx1.fill();

ctx2.arc(500, 350, 310, getRadians(180), getRadians(0));
gradient2.addColorStop(0, "rgba(255, 165, 0, 0.99)");
gradient2.addColorStop(1, "yellow");
ctx2.fillStyle = gradient2;
ctx2.fill();

ctx3.arc(500, 350, 270, getRadians(180), getRadians(0));
gradient3.addColorStop(0, "rgba(255, 255, 0, 0.1)");
gradient3.addColorStop(1, "rgb(4, 242, 4)");
ctx3.fillStyle = gradient3;
ctx3.fill(); 

ctx4.arc(500, 350, 230, getRadians(180), getRadians(0));
gradient4.addColorStop(0, "rgb(4, 242, 4)");
gradient4.addColorStop(1, "skyblue");
ctx4.fillStyle = gradient4;
ctx4.fill();

ctx5.arc(500, 350, 190, getRadians(180), getRadians(0));
gradient5.addColorStop(0, "rgba(135, 206, 235, 0.1)");
gradient5.addColorStop(1, "rgb(0, 123, 255)");
ctx5.fillStyle = gradient5;
ctx5.fill();

ctx6.arc(500, 350, 150, getRadians(180), getRadians(0));
gradient6.addColorStop(0, "rgb(0, 123, 255)");
gradient6.addColorStop(1, "rgb(128, 00, 255)");
ctx6.fillStyle = gradient6;
ctx6.fill();

ctx7.arc(500, 350, 110, getRadians(180), getRadians(0));
gradient7.addColorStop(0, "rgba(128, 00, 255, 1)");
gradient7.addColorStop(1, "rgba(208, 190, 225)");
ctx7.fillStyle = gradient7;
ctx7.fill();



let colors = document.querySelectorAll('.child');
let colorsParent = document.querySelector('#colors');
let rainbow = document.querySelector('#rainbow');
let resColorsParent = document.querySelector('#resColors');
let resColors = document.querySelectorAll('.resColorsChild');
let canv = document.querySelector('#canv');
let anim = document.querySelector('#anim');

for(let color of colors) {
    let id = color.getAttribute('id');
    color.classList.add(id);
    color.addEventListener('click', function takeColor() {
        let target = this;
        rainbow.addEventListener('mousemove', function(event) {
            target.style.left = event.pageX + 15 + 'px';
            target.style.top = event.pageY + 10 + 'px';
        })
        for(let resColor of resColors) {
            resColor.addEventListener('click', function(event) {
                target.remove();
                event.target.style.backgroundColor = id;
            })
        }
    })
} 

let objRes = {
    0: 'red',
    1: 'orange',
    2: 'yellow',
    3: 'green',
    4: 'skyblue',
    5: 'blue',
    6: 'blueviolet'
}

let colorsCompletedTrue = 0;
let colorsCompleted = 0;
resColorsParent.addEventListener('click', function(event) {
        if(event.target.style.backgroundColor === objRes[Array.from(resColorsParent.children).indexOf(event.target)]) {
            colorsCompletedTrue++;
            console.log(colorsCompletedTrue);
        }
        if(event.target.style.backgroundColor) {
            colorsCompleted++;
            console.log(colorsCompleted);
        }
    if(colorsCompleted === 7 && colorsCompletedTrue === 7) {
        resColorsParent.style.display = 'none';
        canv.style.display = 'block';
        anim.style.display = 'block';
    }
    else if(colorsCompleted === 7 && colorsCompletedTrue !== 7) {
        if(langUk.classList.contains('active')) {
            alert('Помилка в розташуванні кольорів. Оновіть сторінку, щоб спробувати ще раз!');
        } else {
            alert('An error in the arrangement of colors. Refresh the page to try again!');
        }
    }
}) 






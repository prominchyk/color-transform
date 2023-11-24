//adaptive design

if(window.matchMedia("(max-width: 800px)").matches) {
  asideTextMenu.addEventListener('click', function() {
    aside.classList.toggle('asideHeight');
    for(let asideLink of asideLinks) {
    asideLink.classList.toggle('asideDisplay');
    }
  })
}
let rellax = new Rellax('.rellax');
let cube = document.querySelector('.cube');
let previousPos = 0;
let currentPos = 0;
let currentDirection;

const nameDivs = document.querySelectorAll('.name');
const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#2E2B5F', '#8B00FF'];
let currentColor = 0;

const colorInterval = setInterval(() => {
    nameDivs.forEach(name => {
       name.style.webkitTextStrokeColor = rainbowColors[currentColor];
    });

    currentColor++;

    if(currentColor == rainbowColors.length) {
        currentColor = 0;
    }
}, 500);


// Reset cube animation if no scroll detected, checked every second
const textInterval = setInterval(() => {
    if(currentPos  == previousPos) {
        resetAnimation();
    }
    previousPos = currentPos;
}, 1000);

// Reset cube animation
function resetAnimation() {
    cube.style.transform = 'translateZ(-100px) rotateY(0deg)';
    currentDirection = '';
    currentPos = 0;
}

// set initial side
let lastScrollTop = 0;
document.body.onscroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){//bottom
        if(currentDirection == 'top') {
            currentPos = currentPos - 2;
        }
        currentPos = currentPos - 2;
        currentDirection = 'bottom';
        cube.style.transform = 'translateZ(-100px) rotateY( '+ currentPos +'deg)';
    } else {//top
        if(currentDirection == 'bottom') {
            currentPos = currentPos + 2;
        }
        currentPos = currentPos + 2;
        currentDirection = 'top';
        cube.style.transform = 'translateZ(-100px) rotateY( '+ currentPos +'deg)';
    }
    if(window.pageYOffset == 0) {
        resetAnimation();
    }
    lastScrollTop = st <= 0 ? 0 : st;
};

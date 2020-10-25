let rellax = new Rellax('.rellax');
let cube = document.querySelector('.cube');
let previousPos = 0;
let currentPos = 0;
let currentDirection;

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

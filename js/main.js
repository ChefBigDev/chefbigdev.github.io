let cube = document.querySelector('.cube');
let previousPos = 0;
let currentPos = 0;
let currentDirection;

const nameDivs = document.querySelectorAll('.name');
const canvas_div = document.getElementById('sParticles');
const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#2E2B5F', '#8B00FF'];
let currentColor = 0;

const modeSwitchInput = document.querySelector('.modeSwitchInput');
const modeSwitchLabel = document.querySelector('.modeSwitchLabel');

//Set colors globally
const color_dark = '#171827';
const color_light = '#F3F3F3';
const color_white = '#FFFFFF';

modeHandler(modeSwitchInput);
modeSwitchInput.addEventListener('click', modeHandler);

function modeHandler(e) {
    if(this.checked || e.checked) {//Dark mode enabled
        //Switch styling
        modeSwitchLabel.innerHTML = 'LIGHT';
        modeSwitchLabel.style.color = color_white;
        //Element styling
        document.querySelector('.bottom').style.background = color_dark;
        document.querySelector('.primary').style.color = color_white;
        document.querySelector('.top').style.background = color_dark;

        document.body.style.background = color_dark;
        //Color of text blocks in the bottom section
        document.querySelectorAll('.block').forEach(block => {
            block.style.color = '';
        });
        //Show particles in dark mode
        canvas_div.style.visibility = 'visible';
    } else {//Dark mode disabled
        //Switching styling
        modeSwitchLabel.innerHTML = 'DARK';
        modeSwitchLabel.style.color = color_dark;
        //Element styling
        document.querySelector('.primary').style.color = '';
        document.querySelector('.bottom').style.background = '';
        document.querySelector('.top').style.background = color_light;
        document.body.style.background = color_white;
        //Color of text blocks in the bottom section
        document.querySelectorAll('.block').forEach(block => {
            block.style.color = 'black';
        });
        //Hide particles in light mode
        canvas_div.style.visibility = 'hidden';
    }
}

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

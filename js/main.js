const particles = {"fpsLimit":30,"particles":{"number":{"value":10,"density":{"enable":true,"value_area":1000}},"color":{"value":"#ffffff","animation":{"enable":false,"speed":10,"sync":true}},"shape":{"type":"circle","stroke":{"width":0},"polygon":{"nb_sides":6}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"random":true,"anim":{"enable":true,"speed":2,"size_min":1,"size_max":3,"sync":false}},"links":{"enable":false,"distance":100,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"down","random":false,"straight":false,"out_mode":"out","attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":0.8},"repulse":{"distance":200},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true,"background":{"color":"#171827","image":"","position":"50% 50%","repeat":"no-repeat","size":"cover"}}
let cube = document.querySelector('.cube');
let previousPos = 0;
let currentPos = 0;
let currentDirection;

const nameDivs = document.querySelectorAll('.name');
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
        document.body.style.background = color_dark;
        //Color of text blocks in the bottom section
        document.querySelectorAll('.block').forEach(block => {
            block.style.color = '';
        });
        //Enable particles in dark mode
        particles.background.color = color_dark;
        particles.particles.color = color_white;
        tsParticles.load('tsparticles', particles);
    } else {//Dark mode disabled
        //Switching styling
        modeSwitchLabel.innerHTML = 'DARK';
        modeSwitchLabel.style.color = color_dark;
        //Element styling
        document.querySelector('.primary').style.color = '';
        document.querySelector('.bottom').style.background = '';
        document.body.style.background = color_light;
        //Color of text blocks in the bottom section
        document.querySelectorAll('.block').forEach(block => {
            block.style.color = 'black';
        });
        //Clear particles in light mode
        document.getElementById('tsparticles').innerHTML = '';
    }
}

const colorInterval = setInterval(() => {
    nameDivs.forEach(name => {
       name.style.webkitTextStrokeColor = rainbowColors[currentColor];
       particles.particles.color.value = rainbowColors[currentColor];
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

function getRandomRainbowColor() {
    const random = Math.floor(Math.random() * rainbowColors.length);

    return rainbowColors[random];
}

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

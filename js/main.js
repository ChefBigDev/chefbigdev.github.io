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

const particles = {
    "fpsLimit": 30,
    "particles": {
        "number": {
            "value": 25,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": rainbowColors,
            "animation": {
                "enable": false,
                "speed": 10,
                "sync": true
            }
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0
            },
            "polygon": {
                "nb_sides": 6
            },
        },
        "opacity": {
            "value": 0.35,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 3,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
    "random": true,
    "anim": {
    "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
}
},
"links": {
    "enable": false,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
},
"move": {
    "enable": true,
        "speed": 6,
        "direction": "down",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
        "enable": false,
            "rotateX": 600,
            "rotateY": 1200
    }
}
},
"interactivity": {
    "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": false,
                "mode": "repulse"
        },
        "onclick": {
            "enable": false,
                "mode": "push"
        },
        "resize": true
    },
    "modes": {
        "grab": {
            "distance": 400,
                "line_linked": {
                "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 0.8
        },
        "repulse": {
            "distance": 200
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
    }
},
"retina_detect": true,
    "background": {
    "color": "#ffffff",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
}
};

//Particles
tsParticles.load('tsparticles', particles);
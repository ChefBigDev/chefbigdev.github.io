const canvas_div = document.getElementById('sparticles');

const modeSwitchInput = document.querySelector('.modeSwitchInput');
const modeSwitchLabel = document.querySelector('.modeSwitchLabel');

//Set colors globally
const color_dark = '#1a1a1a';
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
        document.querySelector('.top').style.background = color_dark;
        document.querySelector('.modeSwitchWrapper').style.background = 'none';

        document.querySelectorAll('.top .left .text h1').forEach(tag => {
            tag.style.color = color_white;
        });

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
        document.querySelector('.modeSwitchWrapper').style.background = '';
        //Element styling
        document.querySelector('.top').style.background = '';

        document.querySelectorAll('.top .left .text h1').forEach(tag => {
            tag.style.color = '';
        });

        document.body.style.background = color_white;
        //Color of text blocks in the bottom section
        document.querySelectorAll('.block').forEach(block => {
            block.style.color = 'black';
        });
        //Hide particles in light mode
        canvas_div.style.visibility = 'hidden';
    }
}

const wrapper = document.querySelector('.wrapper');
wrapper.style.opacity = 1;

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

link1.style.backgroundColor = '#39836a';
content1.style.opacity = '1';

link1.addEventListener('click',function(){
    link1.style.backgroundColor = '#39836a';
    link2.style.backgroundColor = '';
    link3.style.backgroundColor = '';

    content1.style.opacity = '1';
    content2.style.opacity = '0';
    content3.style.opacity = '0';
});

link2.addEventListener('click',function(){
    link1.style.backgroundColor = '';
    link2.style.backgroundColor = '#9a4880';
    link3.style.backgroundColor = '';

    content1.style.opacity = '0';
    content2.style.opacity = '1';
    content3.style.opacity = '0';
});

link3.addEventListener('click',function(){
    link1.style.backgroundColor = '';
    link2.style.backgroundColor = '';
    link3.style.backgroundColor = '#39836a';

    content1.style.opacity = '0';
    content2.style.opacity = '0';
    content3.style.opacity = '1';
});

const wrapper = document.querySelector('.wrapper');
wrapper.style.opacity = 1;

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

link1.style.backgroundColor = '#39836a';
content1.style.display = 'grid';

link1.addEventListener('click',function(){
    link1.style.backgroundColor = '#39836a';
    link2.style.backgroundColor = '';
    link3.style.backgroundColor = '';

    content1.style.display = 'grid';
    content2.style.display = 'none';
    content3.style.display = 'none';
});

link2.addEventListener('click',function(){
    link1.style.backgroundColor = '';
    link2.style.backgroundColor = '#9a4880';
    link3.style.backgroundColor = '';

    content1.style.display = 'none';
    content2.style.display  = 'grid';
    content3.style.display  = 'none';
});

link3.addEventListener('click',function(){
    link1.style.backgroundColor = '';
    link2.style.backgroundColor = '';
    link3.style.backgroundColor = '#39836a';

    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'grid';
});

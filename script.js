// responsive navbar
const bar= document.getElementById('bar');
const nav= document.getElementById('navbar');
const close= document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

// single product
var mainimg= document.getElementById('main-img');
var smallimg= document.getElementsByClassName('small-img');

smallimg[0].onmouseover = () =>{
    mainimg.src=smallimg[0].src;
}
smallimg[1].onmouseover = () =>{
    mainimg.src=smallimg[1].src;
}
smallimg[2].onmouseover = () =>{
    mainimg.src=smallimg[2].src;
}
smallimg[3].onmouseover = () =>{
    mainimg.src=smallimg[3].src;
}

// 
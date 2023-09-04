
'use strict'

let navBar = document.getElementById('navBar');
let burgerBar = document.getElementById('burger');
let line1 = document.querySelector('.line1');
let line3 = document.querySelector('.line3');
let line2 = document.querySelector('.line2');
let line = document.querySelector('.line');
burgerBar.addEventListener('click', function(){
    navBar.classList.toggle('activeNav');

});

burgerBar.addEventListener('click', function(){
    line1.classList.toggle('line1Active');
    line3.classList.toggle('line3Active');
    line2.classList.toggle('line2NO');
    line.classList.toggle('lineAc');
})




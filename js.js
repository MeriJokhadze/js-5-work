
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


let btnAdd = document.querySelector('.btn');
let inputElToDo = document.querySelector('.input-form');
let ulElToDo = document.querySelector('.list-ul')
let clearAllBtn = document.querySelector('.clearList');

btnAdd.addEventListener('click', function(){
    let valueInfo = inputElToDo.value;

    if(valueInfo == " "){
        return;
    }

    let li = document.createElement('li');

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "deleetee";


    deleteBtn.addEventListener('click', function(){
        li.remove();
    })

    li.textContent = valueInfo;
    li.appendChild(deleteBtn);
    ulElToDo.appendChild(li);
    
    inputElToDo.value = " ";

});

clearAllBtn.addEventListener('click', function(){
    ulElToDo.innerHTML=" ";
})


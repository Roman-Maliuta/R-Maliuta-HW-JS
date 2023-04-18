const pText = document.querySelector('.text');

const btnOpHide = document.getElementById('open-hide');

const elemHide = document.querySelectorAll('.for-hide');


let i = 0;
let q = 0;

btnOpHide.onclick = function() {
    elemHide.forEach(function(item){
        item.classList.toggle('hide');
    });
    ++i;
    if(i % 2 == 0){
        btnOpHide.innerText = `Hide text (1)`;
        ++q;
        if(q % 2 == 0){
            pText.classList.add("even-paragraph-text");
        } else{
            pText.classList.add("odd-paragraph-text"); 
        } 
    } else{
        btnOpHide.innerText = `Show text (1)`;
        pText.classList.remove("even-paragraph-text", "odd-paragraph-text");
    };
};

let count = parseFloat(getComputedStyle(pText).fontSize);

const btnIncr = document.querySelector('.Increase');

btnIncr.onclick = function() {
    pText.style.fontSize = count++ + "px";
};

const btnDecr = document.querySelector('.Decrease');

btnDecr.onclick = function() {
    pText.style.fontSize = count-- + "px";
};
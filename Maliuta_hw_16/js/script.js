const btnFirst = document.getElementById('btn-first');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnLast = document.getElementById('btn-last');

const inputSlideNum = document.getElementById('field-slide-num');
const btnOpenByNum = document.getElementById('open-slide-num');

const inputTitle = document.getElementById('field-title');
const inputDescr = document.getElementById('field-descritpion');
const inputPosition = document.getElementById('field-position');
const btnAddEnd = document.getElementById('add-end');
const btnAddPosition = document.getElementById('add-position');

const btnRemoveEnd = document.getElementById('remove-end');

const inputSlideRemove = document.getElementById('field-remove');
const btnRemovePosition = document.getElementById('remove-position');


function Slider(sliderEl) {
    this.sliderEl = sliderEl;

    let count = 0;


    this.firstSlide = function() {
        if (count !== 0) {
            this.sliderEl.children[0].classList.remove('hide');
            this.sliderEl.children[count].classList.add('hide');
        count = 0; 
        };
    };

    this.nextSlide = function() {
        if (count !== (this.sliderEl.children.length)-1) {
            this.sliderEl.children[count].classList.toggle('hide');
            this.sliderEl.children[count].nextElementSibling.classList.toggle('hide');
        count++;
        } else {
            this.firstSlide();  
        }
    };

    this.lastSlide = function() {
        if (count !== (this.sliderEl.children.length)-1) {
        let inLast = (this.sliderEl.children.length)-1;
        this.sliderEl.children[inLast].classList.remove('hide');
        this.sliderEl.children[count].classList.add('hide');
        count = inLast; 
        };
    };
    
    this.prevSlide = function() {
        if (count !== 0) {
        this.sliderEl.children[count].classList.toggle('hide');
        this.sliderEl.children[count].previousElementSibling.classList.toggle('hide');
        count--;
        } else {
            this.lastSlide();
        }
    };

    this.openSlideByIndex = function(number)  {
        let openValue = (number)-1;
        
        if (Number.isNaN(openValue)) {
           inputSlideNum.value = '';
           return; 
        };

        if (openValue > (this.sliderEl.children.length)-1) {
            inputSlideNum.value = '';
            return;
        };
    
        if (count === openValue) {
            inputSlideNum.value = '';
            return;
        }; 
    
        this.sliderEl.children[openValue].classList.remove('hide');
        this.sliderEl.children[count].classList.add('hide');
        count = openValue;
        inputSlideNum.value = '';
        openValue = 0;
        
    };

    this.addSlide = function (title, descr) {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        div.classList.add('hide');
        
        const pTitle = document.createElement('p');
        pTitle.classList.add('title');
        pTitle.innerText = `${title}`;
        
        const pDescr = document.createElement('p');
        pDescr.classList.add('descr');
        pDescr.innerText = `${descr}`;
        
        this.sliderEl.append(div);
        div.append(pTitle, pDescr);

        if((this.sliderEl.children.length)-1 === 0){
            this.sliderEl.children[count].classList.toggle('hide');
        } else { 
            count = 1;
            this.firstSlide();
        };
        inputTitle.value = '';
        inputDescr.value = '';
    };

    this.insertSlide = function (title, descr, number) {
        let selectValue = (number)-1;
        
        if (Number.isNaN(selectValue)) {
            inputTitle.value = '';
            inputDescr.value = '';
            inputPosition.value = '';
            return; 
        };

        if (selectValue > (this.sliderEl.children.length)-1) {
            inputTitle.value = '';
            inputDescr.value = '';
            inputPosition.value = '';
            return;
        };
      
        
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        div.classList.add('hide');
        
        const pTitle = document.createElement('p');
        pTitle.classList.add('title');
        pTitle.innerText = `${title}`;
        
        const pDescr = document.createElement('p');
        pDescr.classList.add('descr');
        pDescr.innerText = `${descr}`;

        this.sliderEl.children[selectValue].before(div);
        div.append(pTitle, pDescr);

        count = 1;
        this.firstSlide();

        inputTitle.value = '';
        inputDescr.value = '';
        inputPosition.value = '';
    };

    this.removeLastSlide = function() {
        let last = (this.sliderEl.children.length)-1;
        this.sliderEl.children[last].remove();
        count = 0;
        this.lastSlide();
    };

    this.removeSlide = function(number) {
        let removeValue = (number)-1;

        if (Number.isNaN(removeValue)) {
            inputSlideRemove.value = '';
            return; 
        };

        if (removeValue > (this.sliderEl.children.length)-1) {
            inputSlideRemove.value = '';
            return;
        };

        this.sliderEl.children[removeValue].remove();
        count = 1;
        this.firstSlide();
        inputSlideRemove.value = '';
    }
};

const slider = new Slider(document.getElementById('carousel-inner'));



btnNext.addEventListener('click', ()=> {slider.nextSlide()});

btnPrev.addEventListener('click', ()=> {slider.prevSlide()});

btnFirst.addEventListener('click', ()=> {slider.firstSlide()});

btnLast.addEventListener('click', ()=> {slider.lastSlide()});

btnOpenByNum.addEventListener('click', ()=> {
    if(inputSlideNum.value !== '') {
        slider.openSlideByIndex(inputSlideNum.value);
    }
});

btnAddEnd.addEventListener('click', ()=> {
    if(inputTitle.value !== '' && inputDescr.value !== ''
    && inputPosition.value === '') {
        slider.addSlide(inputTitle.value, inputDescr.value);
    }
});

btnAddPosition.addEventListener('click', ()=> {
    if(inputTitle.value !== '' && inputDescr.value !== '' 
    && inputPosition.value !=='') {
        slider.insertSlide(inputTitle.value, inputDescr.value, inputPosition.value);
    }
});

btnRemoveEnd.addEventListener('click', ()=> {slider.removeLastSlide()});

btnRemovePosition.addEventListener('click', ()=> {
    if(inputSlideRemove.value !== '') {
        slider.removeSlide(inputSlideRemove.value);
    }
});
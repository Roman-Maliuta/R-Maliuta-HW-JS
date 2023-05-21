function Slider(sliderNew) {
    this.sliderNew = sliderNew;
    this.sliderEl = this.sliderNew.querySelector('.carousel-inner');

    let count = 0;

    this.btnFirst = this.sliderNew.querySelector('.btn-first').addEventListener(
         'click', ()=> {this.firstSlide()}
        ); 
    this.firstSlide = function() {
        if (count !== 0) {
            this.sliderEl.children[0].classList.remove('hide');
            this.sliderEl.children[count].classList.add('hide');
        count = 0; 
        };
    };
    
    this.btnNext = this.sliderNew.querySelector('.btn-next').addEventListener(
         'click', ()=> {this.nextSlide()}
        ); 
    this.nextSlide = function() {
        if (count !== (this.sliderEl.children.length)-1) {
            this.sliderEl.children[count].classList.toggle('hide');
            this.sliderEl.children[count].nextElementSibling.classList.toggle('hide');
        count++;
        } else {
            this.firstSlide();  
        }
    };
    
    this.btnLast = this.sliderNew.querySelector('.btn-last').addEventListener(
         'click', ()=> {this.lastSlide()}
        ); 
    this.lastSlide = function() {
        if (count !== (this.sliderEl.children.length)-1) {
        let inLast = (this.sliderEl.children.length)-1;
        this.sliderEl.children[inLast].classList.remove('hide');
        this.sliderEl.children[count].classList.add('hide');
        count = inLast; 
        };
    };

    this.btnPrev = this.sliderNew.querySelector('.btn-prev').addEventListener(
         'click', ()=> {this.prevSlide()}
        ); 
    this.prevSlide = function() {
        if (count !== 0) {
        this.sliderEl.children[count].classList.toggle('hide');
        this.sliderEl.children[count].previousElementSibling.classList.toggle('hide');
        count--;
        } else {
            this.lastSlide();
        }
    };

    this.inputSlideNum = this.sliderNew.querySelector('.field-slide-num');
    this.btnOpenByNum = this.sliderNew.querySelector('.open-slide-num').addEventListener(
        'click', ()=> {
        if(this.inputSlideNum.value !== '') {
            this.openSlideByIndex(this.inputSlideNum.value);
        }
    });
    this.openSlideByIndex = function(number)  {
        let openValue = (number)-1;
        
        if (Number.isNaN(openValue)) {
            this.inputSlideNum.value = '';
           return; 
        };

        if (openValue > (this.sliderEl.children.length)-1) {
            this. inputSlideNum.value = '';
            return;
        };
    
        if (count === openValue) {
            this.inputSlideNum.value = '';
            return;
        }; 
    
        this.sliderEl.children[openValue].classList.remove('hide');
        this.sliderEl.children[count].classList.add('hide');
        count = openValue;
        this.inputSlideNum.value = '';
        openValue = 0;
        
    };

    
    this.inputTitle = this.sliderNew.querySelector('.field-title');
    this.inputDescr = this.sliderNew.querySelector('.field-descritpion');
    this.inputPosition = this.sliderNew.querySelector('.field-position');
    this.btnAddEnd = this.sliderNew.querySelector('.add-end').addEventListener(
        'click', ()=> {
     if(this.inputTitle.value !== '' && this.inputDescr.value !== ''
     && this.inputPosition.value === '') {
        this.addSlide(this.inputTitle.value, this.inputDescr.value);
     }
    });
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
        this.inputTitle.value = '';
        this.inputDescr.value = '';
    };

    this.btnAddPosition = this.sliderNew.querySelector('.add-position').addEventListener(
        'click', ()=> {
     if(this.inputTitle.value !== '' &&  this.inputDescr.value !== '' 
     &&  this.inputPosition.value !=='') {
        this.insertSlide(this.inputTitle.value, 
         this.inputDescr.value, this.inputPosition.value);
     }
    });
    this.insertSlide = function (title, descr, number) {
        let selectValue = (number)-1;
        
        if (Number.isNaN(selectValue)) {
            this.inputTitle.value = '';
            this.inputDescr.value = '';
            this.inputPosition.value = '';
            return; 
        };

        if (selectValue > (this.sliderEl.children.length)-1) {
            this.inputTitle.value = '';
            this.inputDescr.value = '';
            this.inputPosition.value = '';
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

        this.inputTitle.value = '';
        this.inputDescr.value = '';
        this.inputPosition.value = '';
    };

    this.btnRemoveEnd = this.sliderNew.querySelector('.remove-end').addEventListener(
        'click', ()=> {this.removeLastSlide()});
    this.removeLastSlide = function() {
        let last = (this.sliderEl.children.length)-1;
        this.sliderEl.children[last].remove();
        count = 0;
        this.lastSlide();
    };

    this.inputSlideRemove = this.sliderNew.querySelector('.field-remove');
    this.btnRemovePosition = this.sliderNew.querySelector('.remove-position').addEventListener(
        'click', ()=> {
        if(this.inputSlideRemove.value !== '') {
            this.removeSlide(this.inputSlideRemove.value);
        }
    });
    this.removeSlide = function(number) {
        let removeValue = (number)-1;

        if (Number.isNaN(removeValue)) {
            this.inputSlideRemove.value = '';
            return; 
        };

        if (removeValue > (this.sliderEl.children.length)-1) {
            this.inputSlideRemove.value = '';
            return;
        };

        this.sliderEl.children[removeValue].remove();
        count = 1;
        this.firstSlide();
        this.inputSlideRemove.value = '';
    }
};

const slider = new Slider(document.getElementById('carousel-slider'));
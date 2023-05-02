const inputTitle = document.getElementById('title');
const inputDescr = document.getElementById('descritpion');
const selectPriority = document.getElementById('priority');
const btnAdd = document.getElementById('btn-add');

const ol = document.createElement('ol');
btnAdd.insertAdjacentElement('afterend', ol);


function createLi() {
    const li = document.createElement('li');
    li.classList.add('item');

    li.innerText = `${inputTitle.value}: 
    ${inputDescr.value}  `;

    if (selectPriority.value === "Low") {
        li.style.background = 'green';
    } else if (selectPriority.value === "Medium") {
        li.style.background = 'yellow';
    } else if (selectPriority.value === "Hight") {
        li.style.background = 'red';
    };

    const btnDelete = document.createElement('button');
    btnDelete.innerText = `Delete todo`;
    btnDelete.classList.add('hide');

    btnDelete.addEventListener('click', ()=> {
        li.remove();
    });

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');

    checkbox.addEventListener('change', ()=> {
        li.classList.toggle('text-change');
        btnDelete.classList.remove('hide');
    });
    
    ol.append(li);
    li.append(checkbox, btnDelete);

    inputTitle.value = '';
    inputDescr.value = '';
    selectPriority.value = '';
};


btnAdd.addEventListener('click', createLi);
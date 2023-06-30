const userList = document.getElementById('user-list');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnLogOut = document.getElementById('btn-logout');
//login const
const inputEmailLogin = document.getElementById('login-email');
const inputPass = document.getElementById('login-pass');
const formLogin = document.getElementById('login-form');
const messageFinal = document.querySelector('.message-final');
//formForCreate const
const inputFirstName = document.getElementById('First-name');
const inputLastName = document.getElementById('Last-name');
const inputEmail = document.getElementById('email');
const inputJob = document.getElementById('job');
const formAdd = document.getElementById('form-add');
const newUsersList = document.getElementById('new-users-list');

let count = 1;

const succsesAuthorization =  function() {
    formLogin.classList.toggle('hide');
    formLogin.classList.toggle('form');
    fetchUsers();
    formAdd.classList.remove('hide');
    formAdd.classList.add('form');
    btnPrev.classList.remove('hide');
    btnNext.classList.remove('hide');
    messageFinal.classList.add('hide');
    userList.classList.remove('hide');
    newUsersList.classList.remove('hide');
    btnLogOut.classList.remove('hide');
    inputEmailLogin.value = ''; 
    inputPass.value = '';
};

firstCheck();

function firstCheck() {
    if (localStorage.getItem('token')) {
        succsesAuthorization()
    }; 
}

import {btnPrevNextDisable} from './module/btn-prev-next-disable.js'

function fetchUsers(){
    fetch(`https://reqres.in/api/users?page=${count}`)
      .then(response => response.json())
      .then((response) => {
            const respon = response;
           btnPrevNextDisable (respon, btnPrev, btnNext);
            renderUserList(respon, userList, requestUpdUserServer);  
      })
      .catch(error => console.log(error))
};

import {renderUserList} from './module/render-user-list.js'

btnPrev.addEventListener('click', ()=> {
    count--;
    fetchUsers();
});

btnNext.addEventListener('click', ()=> {
    count++;
    fetchUsers();
});

//formForCreate

import {CreateNewUser, createNewLiUser} from './module/create-new-user.js'

formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
        inputFirstName.value !== '' &&
        inputLastName.value !== '' &&
        inputEmail.value !== '' &&
        inputJob.value !== ''
    ) {
        
        CreateNewUser(inputFirstName, inputLastName,
            inputEmail, inputJob, newUsersList, requestUpdUser);
    }
});

//Login

import {validLogin} from './module/valid-login.js'

validLogin(inputEmailLogin, inputPass);

import {login} from './module/login-component.js'

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
     if (
         inputEmailLogin.value !== '' &&  inputPass.value !== ''
     ) {
         login(inputEmailLogin, inputPass, succsesAuthorization);
     }
});

//Logout

function logOut(){
    localStorage.clear();
    formLogin.classList.toggle('hide');
    formLogin.classList.toggle('form');
    formAdd.classList.add('hide');
    formAdd.classList.remove('form');
    btnPrev.classList.add('hide');
    btnNext.classList.add('hide');
    btnLogOut.classList.add('hide');
    userList.classList.add('hide');
    newUsersList.classList.add('hide');
    firstCheck();
};

btnLogOut.addEventListener('click',() =>{
    logOut();
});

import {
    formInputCreate, formUpdate, formH4, inputNewFirstName, inputNewLastName, 
    inputNewEmail, inputNewJob, btnUpdateNow, btnCancelUpdate
} from './module/form-input-create.js'


function requestUpdUser(li, userId) {

    formInputCreate();
    
    li.append(formUpdate, btnCancelUpdate);

    formUpdate.append(formH4,inputNewFirstName, inputNewLastName, 
    inputNewEmail, inputNewJob, btnUpdateNow);

    formUpdate.addEventListener('submit', (e) => {
        e.preventDefault();
        if (
            inputNewFirstName.value !== '' &&
            inputNewLastName.value !== '' &&
            inputNewEmail.value !== '' &&
            inputNewJob.value !== ''
        ) {
            
            upDateN(inputNewFirstName.value ,inputNewLastName.value,
                inputNewEmail.value, inputNewJob.value, li);
        }
    });

    btnCancelUpdate.addEventListener('click', () => {
        formUpdate.remove();
        btnCancelUpdate.remove();    
    });

 function upDateN(name1, name2, email, job){

    const infoToSend = {
        first_name: name1, 
        last_name: name2,
        email: email,
        job: job
    };

    fetch(`https://reqres.in/api/users/${userId}`, {
        method:'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(infoToSend)
    })

    .then(response => response.json())
    .then((response) => {
        const responsNew = response;
        li.remove();
        createNewLiUser(responsNew,newUsersList,
     requestUpdUser);
    })
    .catch(error => console.log(error))
};
};

import {renderUpdateUser} from './module/render-update-user.js'

const requestUpdUserServer = function (li, userId) {

    formInputCreate();

    li.append(formUpdate, btnCancelUpdate);
    formUpdate.append(formH4,inputNewFirstName, inputNewLastName, 
    inputNewEmail, btnUpdateNow);

    formUpdate.addEventListener('submit', (e) => {
        e.preventDefault();
        if (
            inputNewFirstName.value !== '' &&
            inputNewLastName.value !== '' &&
            inputNewEmail.value !== ''
        ) {           
            upDate(inputNewFirstName.value ,inputNewLastName.value,
                inputNewEmail.value, li);
        }
    });

    btnCancelUpdate.addEventListener('click', () => {
        formUpdate.remove();
        btnCancelUpdate.remove();  
    });

  function upDate(name1, name2, email, li){

    const infoToSend = {
        first_name: name1, 
        last_name: name2,
        email: email
    };

    fetch(`https://reqres.in/api/users/${userId}`, {
        method:'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(infoToSend)
    })

    .then(response => response.json())
    .then((response) => {
            const respon = response;
            formUpdate.remove();
            btnCancelUpdate.remove(); 
           renderUpdateUser(respon, li, userList); 
    })
    .catch(error => console.log(error))
  };
};
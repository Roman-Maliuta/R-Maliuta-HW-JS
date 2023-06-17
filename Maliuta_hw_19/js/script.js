const cardTemplate =  document.getElementById('card-template');
const userList = document.querySelector('#user-list');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const xhr =  new XMLHttpRequest();


let count = 1;

function fetchUsers(){
    xhr.open('GET', `https://reqres.in/api/users?page=${count}`, true);
    xhr.send();

    xhr.onload = (e) =>{
        try {
            const respon = JSON.parse(e.target.response);

            btnDisable(respon);
            renderUserList(respon);        

        } catch (e) {
            console.warn(e);
        }
    }
};

function btnDisable(responsData) {
    if (responsData.page === responsData.total_pages) {
        btnPrev.disabled = false;
        btnNext.disabled = true;
      } else if (responsData.page === 1){
        btnPrev.disabled = true;
        btnNext.disabled = false;
      }else {
        btnPrev.disabled = false;
        btnNext.disabled = false; 
      };
};

function renderUserList(responseData){
    const mappedUsersName = responseData.data.map(user => {
        user["name"] = `${user.first_name} ${user.last_name}`;
        return user;
       });
   
       let res = '';
       mappedUsersName.forEach(user => {
        let currentUser = cardTemplate.innerHTML;
        Object.keys(user).forEach(key=>{
           currentUser = currentUser.replaceAll(`{{${key}}}`,user[key])});
        res += currentUser;
       });
userList.innerHTML = res;

};
 
btnPrev.addEventListener('click', ()=> {
    count--;
    fetchUsers();
});

btnNext.addEventListener('click', ()=> {
    count++;
    fetchUsers();
});

//formForCreate
const inputFirstName = document.getElementById('First-name');
const inputLastName = document.getElementById('Last-name');
const inputEmail = document.getElementById('email');
const inputJob = document.getElementById('job');
const formAdd = document.getElementById('form-add');
const newUsersList = document.getElementById('new-users-list');

function CreateNewUser() {
    xhr.open('POST', 'https://reqres.in/api/users', true);

    const infoToSend = {
        first_name: inputFirstName.value, 
        last_name: inputLastName.value,
        email: inputEmail.value,
        job: inputJob.value
    };

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(infoToSend));

    xhr.onload = (e) =>{
        try {
            const responsNew = JSON.parse(e.target.response); 
            console.log(responsNew);
            createNewLiUser(responsNew);

            inputFirstName.value = ''; 
            inputLastName.value = ''; 
            inputEmail.value = '';
            inputJob.value = '';
        } catch (e) {
            console.warn(e);
        }
    }
};

function createNewLiUser(responsData) {
    const li = document.createElement('li');
    li.classList.add('card');

    li.innerText = `${responsData.first_name} ${responsData.last_name} ID: ${responsData.id}
    ${responsData.email} 
    ${responsData.job}`;


    const btnDelete = document.createElement('button');
    btnDelete.innerText = `Delete user`;

    btnDelete.addEventListener('click', ()=> {
      requestDelUser(li, responsData.id);
    });

    
    const btnUpdate = document.createElement('button');
    btnUpdate.innerText = `Update user`;

    btnUpdate.addEventListener('click', ()=> {
      requestUpdUser(li, responsData.id);
    });

    newUsersList.append(li);
    li.append(btnDelete,btnUpdate);
};

formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
        inputFirstName.value !== '' &&
        inputLastName.value !== '' &&
        inputEmail.value !== '' &&
        inputJob.value !== ''
    ) {
        
        CreateNewUser();
    }
});

//Login
const inputEmailLogin = document.getElementById('login-email');
const inputPass = document.getElementById('login-pass');
const formLogin = document.getElementById('login-form');
const btnSubmit = document.getElementById('btn');
const pWrongEmail = document.getElementById('p-wrong-email');
const pWrongPass = document.getElementById('p-wrong-pass');
const messageFinal = document.querySelector('.message-final');


let emailValue;

function validAt() {
    let endo = emailValue.indexOf('@');
    if( endo === -1){
        return false;
    } else{
    let ch ='@';
    let  checkAt = emailValue.split(ch).length-1; 
    if (checkAt.length > 1){
        return false;
     };
    };
};

function validUserName() {
    let endo = emailValue.indexOf('@');
    let  checkUserName = emailValue.slice(0, endo);
    return checkUserName.length;
};

function validDomain() {
     let strt = emailValue.indexOf('@');
     let endo = emailValue.lastIndexOf('.');
     let  checkDomen = emailValue.slice(strt, endo);
     return checkDomen.length;
};

function validDomainExt() {
    let strt = emailValue.indexOf('.');
    let  checkDomenExt = emailValue.slice(strt);
    return checkDomenExt.length;
};


inputEmailLogin.addEventListener('blur', () => {
     emailValue = inputEmailLogin.value;

 if (validAt() === false) {
    pWrongEmail.textContent = "Email should  include  one '@'";
    return;
 } 

 if (validUserName() < 3) {
    pWrongEmail.textContent = 'Username  must include more than 3 chars';
    return;
 };

 if (validDomain() < 3){
    pWrongEmail.textContent = 'Domain name  must include more than 2 chars';
    return;
 };

 if (validDomainExt() < 2){
    pWrongEmail.textContent = 'Domain extenstion  must include more than 1 chars';
    return;
 };
 btnLogDisable();
});


inputEmailLogin.addEventListener('focus', () => {
    pWrongEmail.textContent = '';
});


inputPass.addEventListener('blur', () => {
    let passValue = inputPass.value;

 if (passValue.length < 6){
    pWrongPass.textContent = 'Password must include more than 6 chars';
    return;
 }

 btnLogDisable();
});


inputPass.addEventListener('focus', () => {
    pWrongPass.textContent = '';
});


function login(){
    xhr.open('POST', 'https://reqres.in/api/login', true);

    const infoToLogin = {
        email: inputEmailLogin.value,
        password: inputPass.value,
    };

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(infoToLogin));

    xhr.onload = (e) =>{
        try {
            const responsLog = JSON.parse(e.target.status);
            checkLogInfo(responsLog);
        } catch (e) {
            console.warn(e);
        }
    } 
};

inputPass.addEventListener('blur', () => {
    let passValue = inputPass.value;

 if (passValue.length < 6){
    pWrongPass.textContent = 'Password must include more than 6 chars';
    return;
 }

 btnLogDisable();
});


inputPass.addEventListener('focus', () => {
    pWrongPass.textContent = '';
});


function btnLogDisable(){
    if (
        inputEmailLogin.value !== '' &&  inputPass.value !== ''
     ) {
        btnSubmit.disabled = false;
     }  else {
        btnSubmit.disabled = true;
    }
};

function checkLogInfo(responInfo) {
    if (responInfo === 200) {
        formLogin.classList.toggle('hide');
        formLogin.classList.toggle('form');
        fetchUsers();
        formAdd.classList.remove('hide');
        formAdd.classList.add('form');
        btnPrev.classList.remove('hide');
        btnNext.classList.remove('hide');
    } else{
        messageFinal.classList.add('message-fail');
        messageFinal.textContent = `Error: User not found!`
        inputEmailLogin.value  = '';
        inputPass.value = '';
    }

};


formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
     if (
         inputEmailLogin.value !== '' &&  inputPass.value !== ''
     ) {
         login();
     }
});


function requestDelUser(li,userId) {

    xhr.open('DELETE', `https://reqres.in/api/users/${userId}`, true);

    xhr.send();

    xhr.onload = (e) =>{
        try {

            const responsDel = JSON.parse(e.target.status);
            if(responsDel===204) {
                li.remove();

            } 

        } catch (e) {
            console.warn(e);
        }
    } 
};

function requestUpdUser(li, userId) {

    const formUpdate = document.createElement('form');

    const inputNewFirstName =  document.createElement('input');
    inputNewFirstName.setAttribute('type','text');
    inputNewFirstName.setAttribute('id','new-first-name');
    inputNewFirstName.setAttribute('placeholder','New first name');
    inputNewFirstName.classList.add('field');

    const inputNewLastName =  document.createElement('input');
    inputNewLastName.setAttribute('type','text');
    inputNewLastName.setAttribute('id','new-last-name');
    inputNewLastName.setAttribute('placeholder','New last name');
    inputNewLastName.classList.add('field');

    const inputNewEmail =  document.createElement('input');
    inputNewEmail.setAttribute('type','email');
    inputNewEmail.setAttribute('id','new-email');
    inputNewEmail.setAttribute('placeholder','New email');
    inputNewEmail.classList.add('field');

    const inputNewJob =  document.createElement('input');
    inputNewJob.setAttribute('type','text');
    inputNewJob.setAttribute('id','new-job');
    inputNewJob.setAttribute('placeholder','New job');
    inputNewJob.classList.add('field');

    const btnUpdateNow = document.createElement('button');
    btnUpdateNow.innerText = `Update user NOW`

    li.append(formUpdate);
    formUpdate.append(inputNewFirstName, inputNewLastName, 
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
                inputNewEmail.value, inputNewJob.value);

                inputNewFirstName.value = ''; 
                inputNewLastName.value = ''; 
                inputNewEmail.value = '';
                inputNewJob.value = '';

        }
    });

function upDateN(name1, name2, email, job){
    xhr.open('PUT', `https://reqres.in/api/users/${userId}`, true);
    
    const infoToSend = {
        first_name: name1, 
        last_name: name2,
        email: email,
        job: job
    };

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(infoToSend));

    xhr.onload = (e) =>{
        try {
            const responsNew = JSON.parse(e.target.response); 
            li.remove();
            createNewLiUser(responsNew);
        } catch (e) {
            console.warn(e);
        }
    }
};
};
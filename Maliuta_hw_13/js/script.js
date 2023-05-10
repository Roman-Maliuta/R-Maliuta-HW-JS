const userList = [
    {
        userEmail: 'admin@domain.com',
        userPassword: 'password123'
    },
    {
        userEmail: 'qdmin@domain.com',
        userPassword: 'password456'
    },
    {
        userEmail: 'wdmin@domain.com',
        userPassword: 'password789'
    }
];


const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('pass');
const form = document.getElementById('form');
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
     let endo = emailValue.indexOf('.');
     let  checkDomen = emailValue.slice(strt, endo);
     return checkDomen.length;
};

function validDomainExt() {
    let strt = emailValue.indexOf('.');
    let  checkDomenExt = emailValue.slice(strt);
    return checkDomenExt.length;
};


inputEmail.addEventListener('blur', () => {
     emailValue = inputEmail.value;

 if (validAt() === false ) {
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
 }
});


inputEmail.addEventListener('focus', () => {
    pWrongEmail.textContent = '';
});


inputPass.addEventListener('blur', () => {
    let passValue = inputPass.value;

 if (passValue.length < 6){
    pWrongPass.textContent = 'Password must include more than 6 chars';
    return;
 }
});


inputPass.addEventListener('focus', () => {
    pWrongPass.textContent = '';
});


function checkLogInfo() {
    let copyList = userList.slice().find( function(item) {
       return (item.userPassword === inputPass.value && 
       item.userEmail === inputEmail.value);
     });

   if (typeof(copyList) === 'undefined') {
    return false;
   } else {
    return true;
   };
};


function login(){

if (checkLogInfo() === true) {
   form.classList.toggle('hide');
   messageFinal.classList.remove('message-fail');
   messageFinal.classList.add('message-success');
   messageFinal.textContent = 'Login was successful!';
} else {
   messageFinal.classList.add('message-fail');
   messageFinal.textContent = `Error: User not found! 
   Please check correct input Email or Password`;
   inputEmail.value = '';
   inputPass.value = '';
}; 

};


form.addEventListener('submit', (e) => {
    e.preventDefault();
     if (
         inputEmail.value !== '' &&  inputPass.value !== ''
     ) {
         login();
     }
});

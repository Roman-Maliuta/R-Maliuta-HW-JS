export function validLogin(Email, Pass) {
const btnSubmit = document.getElementById('btn');
const pWrongEmail = document.getElementById('p-wrong-email');
const pWrongPass = document.getElementById('p-wrong-pass');
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


Email.addEventListener('blur', () => {
     emailValue = Email.value;

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


Email.addEventListener('focus', () => {
    pWrongEmail.textContent = '';
});


Pass.addEventListener('blur', () => {
    let passValue = Pass.value;

 if (passValue.length < 6){
    pWrongPass.textContent = 'Password must include more than 6 chars';
    return;
 }

 btnLogDisable();
});


Pass.addEventListener('focus', () => {
    pWrongPass.textContent = '';
});



Pass.addEventListener('blur', () => {
    let passValue = Pass.value;

 if (passValue.length < 6){
    pWrongPass.textContent = 'Password must include more than 6 chars';
    return;
 }

 btnLogDisable();
});


Pass.addEventListener('focus', () => {
    pWrongPass.textContent = '';
});


function btnLogDisable(){
    if (
        Email.value !== '' &&  Pass.value !== ''
     ) {
        btnSubmit.disabled = false;
     }  else {
        btnSubmit.disabled = true;
    }
};

};
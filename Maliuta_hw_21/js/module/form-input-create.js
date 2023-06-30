export let formUpdate;
export let formH4;
export let inputNewFirstName;
export let inputNewLastName;
export let inputNewEmail;
export let inputNewJob;
export let btnUpdateNow;
export let btnCancelUpdate;

export function formInputCreate() {
       
   formUpdate = document.createElement('form');

   formH4 =  document.createElement('h4');
   formH4.innerText = `Please fill in ALL input fields:`;
   formH4.classList.add('h4');

   inputNewFirstName =  document.createElement('input');
   inputNewFirstName.setAttribute('type','text');
   inputNewFirstName.setAttribute('id','new-first-name');
   inputNewFirstName.setAttribute('placeholder','New first name');
   inputNewFirstName.classList.add('field');

   inputNewLastName =  document.createElement('input');
   inputNewLastName.setAttribute('type','text');
   inputNewLastName.setAttribute('id','new-last-name');
   inputNewLastName.setAttribute('placeholder','New last name');
   inputNewLastName.classList.add('field');

   inputNewEmail =  document.createElement('input');
   inputNewEmail.setAttribute('type','email');
   inputNewEmail.setAttribute('id','new-email');
   inputNewEmail.setAttribute('placeholder','New email');
   inputNewEmail.classList.add('field');

   inputNewJob =  document.createElement('input');
   inputNewJob.setAttribute('type','text');
   inputNewJob.setAttribute('id','new-job');
   inputNewJob.setAttribute('placeholder','New job');
   inputNewJob.classList.add('field');

   btnUpdateNow = document.createElement('button');
   btnUpdateNow.innerText = `Update user NOW`;

   btnCancelUpdate = document.createElement('button');
   btnCancelUpdate.innerText = `Cancel update`;

   return formUpdate, formH4, inputNewFirstName, inputNewLastName, 
    inputNewEmail, inputNewJob, btnUpdateNow, btnCancelUpdate;
};
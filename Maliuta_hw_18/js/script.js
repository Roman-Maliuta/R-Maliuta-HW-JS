const cardTemplate =  document.getElementById('card-template').innerHTML;
const userList = document.getElementById('user-list');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const xhr =  new XMLHttpRequest();


let count = 1;

function fetchUsers(){
    xhr.open('GET', `https://reqres.in/api/users?page=${count}`, false);
    xhr.send();


    const respon = JSON.parse(xhr.response);

    if (respon.page === respon.total_pages) {
      btnPrev.disabled = false;
      btnNext.disabled = true;
    } else if (respon.page === 1){
      btnPrev.disabled = true;
      btnNext.disabled = false;
    }else {
      btnPrev.disabled = false;
      btnNext.disabled = false; 
    };

    const mappedUsersName = respon.data.map(user => {
     user["name"] = `${user.first_name} ${user.last_name}`;
     return user;
    });

    let res = '';
    mappedUsersName.forEach( user => {
     let currentUser = cardTemplate;
     Object.keys(user).forEach(key=>{
        currentUser = currentUser.replaceAll(`{{${key}}}`,user[key]);
     });
     res += currentUser;
    });

 userList.innerHTML = res;
};

fetchUsers();

btnPrev.addEventListener('click', ()=> {
    count--;
    fetchUsers();
});

btnNext.addEventListener('click', ()=> {
    count++;
    fetchUsers();
});


const btnCreate = document.getElementById('btn-create');
const inputFirstName = document.getElementById('First-name');
const inputLastName = document.getElementById('Last-name');
const inputEmail = document.getElementById('email');
const inputJob = document.getElementById('job');
const form = document.getElementById('form');
const newUsersList = document.getElementById('new-users-list');

function CreateNewUser() {
    xhr.open('POST', 'https://reqres.in/api/users', false);

    const infoToSend = {
        first_name: inputFirstName.value, 
        last_name: inputLastName.value,
        email: inputEmail.value,
        job: inputJob.value
    };

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(infoToSend));

    const responsNew = JSON.parse(xhr.response);

    createNewLiUser(responsNew);

    inputFirstName.value = ''; 
    inputLastName.value = ''; 
    inputEmail.value = '';
    inputJob.value = '';
};

function createNewLiUser(responsData) {
    const li = document.createElement('li');
    li.classList.add('card');

    li.innerText = `${responsData.first_name} ${responsData.last_name} 
    ${responsData.email} 
    ${responsData.job}`;

    newUsersList.append(li);
};

form.addEventListener('submit', (e) => {
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

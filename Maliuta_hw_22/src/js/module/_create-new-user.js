import { requestDelUser } from './_del-user.js'

export function CreateNewUser(inputFirstName, inputLastName,
            inputEmail, inputJob, newUsersList, requestUpdUser) {

    const infoToSend = {
        first_name: inputFirstName.value, 
        last_name: inputLastName.value,
        email: inputEmail.value,
        job: inputJob.value
    };

    fetch('https://reqres.in/api/users', {
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(infoToSend)
    })

    .then(response => response.json())
    .then((response) => {
            const responsNew = response;
        createNewLiUser(responsNew, newUsersList,requestUpdUser);

            inputFirstName.value = ''; 
            inputLastName.value = ''; 
            inputEmail.value = '';
            inputJob.value = '';
    })
    .catch(error => console.log(error))
};

export function createNewLiUser(responsData, newUsersList,
     requestUpdUser) {
    const li = document.createElement('li');
    li.classList.add('card');

    const pName = document.createElement('p');
    pName.classList.add('user-data');
    pName.innerText = `${responsData.first_name} ${responsData.last_name}`;

    const pEmail = document.createElement('p');
    pEmail.classList.add('user-data');
    pEmail.innerText = `${responsData.email}`;

    const pJob = document.createElement('p');
    pJob.classList.add('user-data');
    pJob.innerText = `${responsData.job}`;

    const pId = document.createElement('p');
    pId.classList.add('user-data');
    pId.innerText = `ID:`;

    const spanId = document.createElement('span');
    spanId.classList.add('user-data');
    spanId.innerText = `${responsData.id}`;

    const btnDelete = document.createElement('button');
    btnDelete.innerText = `Delete user`;
    btnDelete.classList.add('btn');

    btnDelete.addEventListener('click', ()=> {
      requestDelUser(li);
    });

    
    const btnUpdate = document.createElement('button');
    btnUpdate.innerText = `Update user`;
    btnUpdate.classList.add('btn');
    
    btnUpdate.addEventListener('click', ()=> {
      requestUpdUser(li);
    });

    newUsersList.append(li);
    li.append(pName, pEmail, pJob, pId, btnDelete, btnUpdate);
    pId.append(spanId);
};
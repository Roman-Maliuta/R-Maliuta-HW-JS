import { requestDelUser } from './del-user.js'

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

    li.innerText = `${responsData.first_name} ${responsData.last_name}
    ${responsData.email} 
    ${responsData.job}`;


    const btnDelete = document.createElement('button');
    btnDelete.innerText = `Delete user`;
    btnDelete.classList.add('btn');

    btnDelete.addEventListener('click', ()=> {
      requestDelUser(li, responsData.id);
    });

    
    const btnUpdate = document.createElement('button');
    btnUpdate.innerText = `Update user`;
    btnUpdate.classList.add('btn');
    
    btnUpdate.addEventListener('click', ()=> {
      requestUpdUser(li, responsData.id);
    });

    newUsersList.append(li);
    li.append(btnDelete,btnUpdate);
};
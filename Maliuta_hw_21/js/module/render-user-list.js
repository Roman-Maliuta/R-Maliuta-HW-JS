import { requestDelUser } from './del-user.js'

export function renderUserList(responseData, userList, requestUpdUserServer) {
    const cardTemplate = document.getElementById('card-template');
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

    const dobleUserList = userList.querySelectorAll('li');

    dobleUserList.forEach(function(item){
        const btnDelete = document.createElement('button');
        btnDelete.innerText = `Delete user`;
        btnDelete.classList.add('btn');
   
        btnDelete.addEventListener('click', ()=> {
           requestDelUser(item, item.children[3].children[0].innerHTML);
        });

        const btnUpdate = document.createElement('button');
        btnUpdate.innerText = `Update user`;
        btnUpdate.classList.add('btn');

        btnUpdate.addEventListener('click', ()=> {
         requestUpdUserServer(item, item.children[3].children[0].innerHTML);
        });
       item.append(btnDelete,btnUpdate);
    })
    
    return dobleUserList;
};

 export function renderUpdateUser(responseData, li, userList){
        responseData["name"] = `${responseData.first_name} ${responseData.last_name}`;

        li.classList.add('upd');
        
        const newli  = userList.querySelector('.upd');

        newli.children[1].innerHTML = responseData.name;
        newli.children[2].innerHTML = responseData.email;

        li.classList.remove('upd');
       return li = newli;
};
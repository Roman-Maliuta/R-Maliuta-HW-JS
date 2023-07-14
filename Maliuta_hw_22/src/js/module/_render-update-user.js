 export function renderUpdateUser(responseData, li){
        responseData["name"] = `${responseData.first_name} ${responseData.last_name}`;
        
        li.children[1].innerHTML = responseData.name;
        li.children[2].innerHTML = responseData.email;

        return li;
};

 export function renderUpdateNewUser(responseData, li){
        responseData["name"] = `${responseData.first_name} ${responseData.last_name}`;

        li.children[0].innerHTML = responseData.name;
        li.children[1].innerHTML = responseData.email;
        li.children[2].innerHTML = responseData.job;

        return li;
};
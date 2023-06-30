 export const requestDelUser = function (li,userId) {
    fetch(`https://reqres.in/api/users/${userId}`, {
        method:'DELETE'
    })

    .then((response) => {
        const responsDel = response.status;
        if(responsDel===204) {
            li.remove();

        } 

    })
    .catch(error => console.log(error))
};

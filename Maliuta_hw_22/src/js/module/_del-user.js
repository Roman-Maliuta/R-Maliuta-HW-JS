 export const requestDelUser = function (li) {
    fetch(`https://reqres.in/api/users/${li.children[3].children[0].innerHTML}`, {
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

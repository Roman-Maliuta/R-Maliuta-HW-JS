const addContacts = (contacts) => ({
    type: 'ADD_CONTACTS',
    payload: contacts
})

export const addFetchContacts = (infoToSend) =>(dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(infoToSend),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
    .then((response) => response.json())
    .then((contacts) => dispatch(addContacts(contacts)))
    .catch(error => console.log(error));
}



const delContacts = (contactId) => ({
    type: 'DEL_CONTACTS',
    payload: contactId
})

export const onContactCustomDelete = (contactId, userId) =>(dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${contactId}`, {
          method: 'DELETE',
        })
        .then((response) => {
         const responsDel = response.status;
            if (responsDel === 200) {
                dispatch(delContacts(userId))
            } 
        })
       .catch(error => console.log(error))
    }
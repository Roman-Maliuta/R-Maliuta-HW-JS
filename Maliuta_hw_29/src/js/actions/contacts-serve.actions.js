const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    payload: contacts
})

export const fetchContacts = () =>(dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((contacts) => dispatch(setContacts(contacts)))
    .catch(error => console.log(error));
}


const delContacts = (contactId) => ({
    type: 'DEL_CONTACTS',
    payload: contactId
})

export const onContactDelete = (contactId, userId) =>(dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${contactId}`, {
          method: 'DELETE',
        })
        .then((response) => {
         const responsDel = response.status;
            if (responsDel === 200) {
                dispatch(delContacts(contactId))
            } 
        })
       .catch(error => console.log(error))
    }
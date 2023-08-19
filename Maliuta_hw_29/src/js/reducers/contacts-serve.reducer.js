const initialState = {
       ContactsServerList: []
};

export const contactsServerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CONTACTS': {
            state = {
                ...state,
                ContactsServerList: [...state.ContactsServerList, ...action.payload]
            }

            break;
        }
            
        case 'DEL_CONTACTS': {
                state = {
                ...state,
                ContactsServerList: state.ContactsServerList.filter(contact => contact.id !== action.payload)
            }

            break;

        }
    }

    return state;
}
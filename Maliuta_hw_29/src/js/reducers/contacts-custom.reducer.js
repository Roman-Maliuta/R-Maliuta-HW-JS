const initialState = {
       ContactsCustomList: []
};

export const contactsCustomReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACTS': {
            state = {
                ...state,
                ContactsCustomList: [...state.ContactsCustomList, action.payload]
            }

            break;
        }
            
        case 'DEL_CONTACTS': {
                state = {
                ...state,
                ContactsCustomList: state.ContactsCustomList.filter(contact => contact.userId !== action.payload)
            }

            break;

        }
    }

    return state;
}
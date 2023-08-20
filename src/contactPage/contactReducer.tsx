import { Add_Contact, Edit_Contact, Delete_Contact, Contact, ContactActionTypes } from "./actions";
const initialState: Contact[] = [];

const contactReducer = (state: Contact[] = initialState, action: ContactActionTypes): Contact[] => {
    switch (action.type) {
        case Add_Contact:
            return [...state, action.payload];
        case Edit_Contact:
            const updatedContacts: Contact[] = state.map((contactInfo: Contact, index: number) => {
                if (index === action.payload.contactId) {
                    return action.payload.updatedContact;
                }
                return contactInfo;
            });
            return updatedContacts;
        case Delete_Contact:
            return state.filter((contactInfo: Contact, index: Number) => index !== action.payload);
        default: return state;
    }
}

export default contactReducer;
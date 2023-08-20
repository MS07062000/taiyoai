export const Add_Contact = 'AddContact';
export const Delete_Contact = 'DeleteContact';
export const Edit_Contact = 'EditContact';

export interface Contact {
    firstName: string;
    lastName: string;
    status: string;
}

interface AddContactAction{
    type:typeof Add_Contact;
    payload:Contact;
} 

interface DeleteContactAction{
    type:typeof Delete_Contact;
    payload:number;
}

interface EditContactAction{
    type:typeof Edit_Contact;
    payload:{contactId:number,updatedContact:Contact};
}

export type ContactActionTypes= AddContactAction | EditContactAction | DeleteContactAction;

export const addContact = (contact:Contact):AddContactAction => ({
    type: Add_Contact,
    payload: contact,
});

export const deleteContact = (contactId:number):DeleteContactAction => ({
    type: Delete_Contact,
    payload: contactId,
});

export const editContact = (contactId:number, updatedContact:Contact):EditContactAction => ({
    type: Edit_Contact,
    payload: { contactId, updatedContact },
});

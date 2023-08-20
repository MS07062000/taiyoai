import { Contact, deleteContact } from './actions'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ContactList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const contactList: Contact[] = useSelector((state: Contact[]) => state);
    const handleEdit = (index: number, contact: Contact) => {
        const encodedContact = encodeURIComponent(JSON.stringify(contact));
        navigate(`/editContact/${index}/${encodedContact}`);
    };

    const handleDelete = (index: number) => {
        dispatch(deleteContact(index));
        navigate('/');
    };


    return (
        <div className='flex flex-row flex-wrap'>
            {contactList.length !== 0 ?
                contactList.map((contact: Contact, index: number) => (
                    <div className='flex flex-col items-center border-4 border-black flex-nowrap w-40 m-4' key={index}>
                        <p className='font-bold text-xl w-24 h-14 text-center mt-2 mb-2'>{contact.firstName} {contact.lastName}</p>
                        <button className='block bg-lime-500 hover:shadow-md hover:shadow-2xl hover:bg-lime-500 mt-2 mb-1 p-1.5 w-16' onClick={() => { handleEdit(index, contact) }}>Edit</button>
                        <button className='block bg-red-500 hover:shadow-md hover:shadow-2xl hover:bg-red-500 mt-2 mb-2 p-1.5 w-16' onClick={() => { handleDelete(index) }}>Delete</button>
                    </div>
                ))
                :
                <div className='flex justify-around	 items-center text-lg border-2 border-black mx-auto flex-row flex-nowrap w-1/3 p-1.5'>
                    <i className="bi bi-x-circle text-4xl ml-1"></i>
                    <div className=''>
                        <p>No Contact Found</p>
                        <p>Please add contact from Create Contact Button</p>
                    </div>
                </div>}
        </div>
    )
}

export default ContactList;
import React, { useState } from 'react'
import { Contact, addContact } from './actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState('active');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => { setFirstName(event.target.value) };
    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => { setLastName(event.target.value) };
    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => { setStatus(event.target.value) };
    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newContact: Contact = {
            firstName: firstName,
            lastName: lastName,
            status: status
        }
        dispatch(addContact(newContact));
        navigate('/');
    };


    return (
        <>
            <p className='text-center font-bold mt-4 mb-4 text-lg'>Create Contact Screen</p>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col flex-no-wrap sm:border-4 sm:border-black sm:border-solid p-4 sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto my-auto">
                    <div className="flex flex-col sm:flex-row lg:items-center sm:gap-2 ">
                        <label htmlFor='firstName'>First Name: </label>
                        <input type='text' value={firstName} onChange={handleFirstName} className='border-black border-2 p-2' />
                    </div>
                    <div className="flex flex-col sm:flex-row lg:items-center sm:my-2 sm:gap-2">
                        <label htmlFor='lastName'>Last Name:  </label>
                        <input type='text' value={lastName} onChange={handleLastName} className='border-black border-2 p-2' />
                    </div>
                    <div className="flex flex-col sm:flex-row lg:items-center sm:gap-8 md:gap-4 lg:gap-10">
                        <label htmlFor='status'>Status: </label>
                        <div className='flex flex-col items-start flex-nowrap'>
                            <span>
                                <input type='radio' name='status' id='active' value='active' onChange={handleStatusChange} checked={status === 'active'} />
                                <label htmlFor='active'> Active</label>
                            </span>
                            <span>
                                <input type='radio' name='status' id='inactive' value='inactive' onChange={handleStatusChange} checked={status === 'inactive'} />
                                <label htmlFor='inactive'> Inactive</label>
                            </span>
                        </div>
                    </div>
                </div>
                <button type='submit' className='block bg-lime-500 hover:shadow-md hover:shadow-2xl hover:bg-lime-500 mt-6 mb-6 sm:ml-auto mr-auto p-3'>Save Contact</button>
            </form >
        </>
    )
}

export default AddContact;
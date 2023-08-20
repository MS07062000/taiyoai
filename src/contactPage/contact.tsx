import { Provider } from 'react-redux';
import ContactList from './contactList';
import contactStore from './contactStore';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <Provider store={contactStore}>
        <Link to="/createContact">
          <button className='block bg-lime-500 hover:shadow-md hover:shadow-2xl hover:bg-lime-500 mt-6 mb-6 ml-auto mr-auto p-4'>Create Contact</button>
        </Link>
        <ContactList />
      </Provider>
    </>
  )
}

export default Contact;
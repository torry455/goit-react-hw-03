import Contact from '../Contact/Contact';
import contactData from '../Contact/contactData.json';
import css from './ContactList.module.css';

function ContactList({ inputValue }) {
    const filteredContacts = contactData.filter(contact =>
        contact.name.toLowerCase().includes(inputValue ? inputValue.toLowerCase() : "")
    );

    return (
        <>
            <ul className={css.contactList}>
                {filteredContacts.map(contact => (
                    <Contact key={contact.id} contactData={contact} />
                ))}
            </ul>
        </>
    );
}

export default ContactList;
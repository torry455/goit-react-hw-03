import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa'; // Приклад використання Font Awesome іконок

function Contact({ contactData }) {
  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <div className={`${css.icon} ${css.userIcon}`}><FaUser /></div>
        <p className={css.name}>{contactData.name}</p>
      </div>
      <div className={css.contactInfo}>
        <div className={`${css.icon} ${css.phoneIcon}`}><FaPhone /></div>
        <p className={css.number}>{contactData.number}</p>
          </div>
        <button className={css.deleteButton}>Delete</button>
    </li>
  );
}

export default Contact;
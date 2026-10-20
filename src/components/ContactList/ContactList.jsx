import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/contactsSelectors';

import { Contact } from '../Contact/Contact';

import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
